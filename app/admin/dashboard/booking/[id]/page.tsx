"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import { getAdminAuthHeaders } from "@/lib/auth";

type BookingDetail = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  date?: string | null;
  time?: string | null;
  location?: string | null;
  reason?: string | null;
  submittedAt?: string | null;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const BookingDetailPage = ({ params }: { params: { id: string } }) => {
  const [booking, setBooking] = useState<BookingDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_URL}/bookings/${params.id}`, {
          headers: new Headers({
            ...getAdminAuthHeaders(),
          }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data?.detail || "Unable to load booking.");
          return;
        }
        const data = (await res.json()) as {
          id: string;
          name: string;
          email: string;
          phone?: string | null;
          preferred_date?: string | null;
          preferred_time?: string | null;
          preferred_location?: string | null;
          message?: string | null;
          created_at?: string | null;
        };

        setBooking({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: data.preferred_date,
          time: data.preferred_time,
          location: data.preferred_location,
          reason: data.message,
          submittedAt: data.created_at,
        });
      } catch {
        setError("Unable to load booking.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [params.id]);

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading booking...</div>;
  }

  if (error || !booking) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-red-600">{error || "Booking not found."}</p>
        <Link
          href="/admin/dashboard/booking"
          className="text-sm text-emerald-700 hover:text-emerald-800"
        >
          Back to bookings
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard/booking"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-sm text-muted-foreground">Booking detail</p>
              <h1 className="text-2xl font-semibold text-foreground">{booking.name}</h1>
            </div>
          </div>
          <div className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            Request received
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Requester</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Full name</p>
                  <p className="font-medium">{booking.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Email address</p>
                  <p className="font-medium">{booking.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone number</p>
                  <p className="font-medium">{booking.phone || "Not provided"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Reason for visit</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {booking.reason || "No additional notes."}
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Appointment details</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Date & time</p>
                  <p className="font-medium">
                    {booking.date || "Flexible"} · {booking.time || "Flexible"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Preferred location</p>
                  <p className="font-medium">{booking.location || "No preference"}</p>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
                Submitted {booking.submittedAt || "—"}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Next steps</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Confirm the appointment time with the patient.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Share any pre-visit instructions or forms.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Update the booking status after contact.
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BookingDetailPage;
