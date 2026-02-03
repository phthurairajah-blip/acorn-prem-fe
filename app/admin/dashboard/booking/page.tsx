"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MoreVertical } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getAdminAuthHeaders } from "@/lib/auth";

type Booking = {
  id: string;
  name: string;
  email: string;
  date?: string;
  time?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const PAGE_SIZE = 12;

const BookingPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  const selectedBooking = useMemo(
    () => bookings.find((booking) => booking.id === deleteId),
    [bookings, deleteId]
  );

  const loadBookings = async (pageIndex: number) => {
    setLoading(true);
    setError(null);
    try {
      const skip = pageIndex * PAGE_SIZE;
      const res = await fetch(`${API_URL}/bookings?skip=${skip}&limit=${PAGE_SIZE}`, {
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to load bookings.");
        return;
      }
      const data = (await res.json()) as Array<{
        id: string;
        name: string;
        email: string;
        preferred_date?: string | null;
        preferred_time?: string | null;
      }>;
      setBookings(
        data.map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          date: item.preferred_date || undefined,
          time: item.preferred_time || undefined,
        }))
      );
      setHasNext(data.length === PAGE_SIZE);
      setPage(pageIndex);
    } catch {
      setError("Unable to load bookings.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/bookings/${id}`, {
        method: "DELETE",
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to delete booking.");
        return;
      }
      loadBookings(page);
    } catch {
      setError("Unable to delete booking.");
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deleteBooking(deleteId);
    setDeleteId(null);
  };

  useEffect(() => {
    loadBookings(0);
  }, []);

  useEffect(() => {
    if (!menuOpenId) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-booking-menu]")) return;
      setMenuOpenId(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpenId]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Booking queue</p>
            <h2 className="text-xl font-semibold text-foreground">Appointment requests</h2>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="border-b border-slate-200 px-6 py-4">
          <div className="grid gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid-cols-[1.4fr_1.6fr_1fr_1fr_auto]">
            <span>From Name</span>
            <span>From Email</span>
            <span>Date</span>
            <span>Time</span>
            <span className="text-right">Action</span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {loading ? (
            <div className="px-6 py-6 text-sm text-muted-foreground">Loading bookings...</div>
          ) : null}
          {error ? (
            <div className="px-6 py-4 text-sm text-red-600">{error}</div>
          ) : null}
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="grid gap-3 px-6 py-4 text-sm text-foreground sm:grid-cols-[1.4fr_1.6fr_1fr_1fr_auto] sm:items-center"
            >
              <span className="font-medium">{booking.name}</span>
              <span className="text-muted-foreground">{booking.email}</span>
              <span className="text-muted-foreground">{booking.date || "Flexible"}</span>
              <span className="text-muted-foreground">{booking.time || "Flexible"}</span>
              <div className="flex items-center justify-end">
                <div className="relative" data-booking-menu>
                  <button
                    type="button"
                    onClick={() =>
                      setMenuOpenId((prev) => (prev === booking.id ? null : booking.id))
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                    aria-label="Open actions"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                  {menuOpenId === booking.id ? (
                    <div className="absolute right-0 top-11 z-10 w-36 rounded-xl border border-slate-200 bg-white py-2 text-xs shadow-soft">
                      <Link
                        href={`/admin/dashboard/booking/${booking.id}`}
                        className="block px-4 py-2 text-slate-600 hover:bg-slate-50"
                        onClick={() => setMenuOpenId(null)}
                      >
                        View detail
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpenId(null);
                          setDeleteId(booking.id);
                        }}
                        className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => loadBookings(Math.max(0, page - 1))}
          disabled={page === 0 || loading}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-70"
        >
          Prev
        </button>
        <span className="text-sm text-muted-foreground">Page {page + 1}</span>
        <button
          type="button"
          onClick={() => loadBookings(page + 1)}
          disabled={!hasNext || loading}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-70"
        >
          Next
        </button>
      </div>

      <AlertDialog open={Boolean(deleteId)} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this booking?</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedBooking
                ? `This will permanently remove the request from ${selectedBooking.name}.`
                : "This will permanently remove the selected booking."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BookingPage;
