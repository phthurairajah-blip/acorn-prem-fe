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

type Booking = {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
};

const initialBookings: Booking[] = [
  {
    id: "melissa-carter",
    name: "Melissa Carter",
    email: "melissa.carter@email.com",
    date: "Jan 27, 2026",
    time: "10:30 AM",
  },
  {
    id: "daniel-cho",
    name: "Daniel Cho",
    email: "daniel.cho@email.com",
    date: "Jan 27, 2026",
    time: "1:00 PM",
  },
  {
    id: "priya-singh",
    name: "Priya Singh",
    email: "priya.singh@email.com",
    date: "Jan 28, 2026",
    time: "9:15 AM",
  },
];

const BookingPage = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  const selectedBooking = useMemo(
    () => bookings.find((booking) => booking.id === deleteId),
    [bookings, deleteId]
  );

  const deleteBooking = async (id: string) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deleteBooking(deleteId);
    setDeleteId(null);
  };

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
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="grid gap-3 px-6 py-4 text-sm text-foreground sm:grid-cols-[1.4fr_1.6fr_1fr_1fr_auto] sm:items-center"
            >
              <span className="font-medium">{booking.name}</span>
              <span className="text-muted-foreground">{booking.email}</span>
              <span className="text-muted-foreground">{booking.date}</span>
              <span className="text-muted-foreground">{booking.time}</span>
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
