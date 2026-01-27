import Link from "next/link";
import { ArrowLeft, Calendar, Mail, MapPin, Phone, User } from "lucide-react";

type BookingDetail = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  location: string;
  reason: string;
  submittedAt: string;
};

const bookings: BookingDetail[] = [
  {
    id: "melissa-carter",
    name: "Melissa Carter",
    email: "melissa.carter@email.com",
    phone: "+1 (415) 555-2309",
    date: "Jan 27, 2026",
    time: "10:30 AM",
    location: "San Francisco Clinic",
    reason: "Ongoing heartburn and acid reflux, especially after dinner.",
    submittedAt: "Jan 25, 2026 · 3:12 PM",
  },
  {
    id: "daniel-cho",
    name: "Daniel Cho",
    email: "daniel.cho@email.com",
    phone: "+1 (510) 555-9912",
    date: "Jan 27, 2026",
    time: "1:00 PM",
    location: "Oakland Clinic",
    reason: "Follow-up for IBS management plan and diet adjustments.",
    submittedAt: "Jan 24, 2026 · 11:04 AM",
  },
  {
    id: "priya-singh",
    name: "Priya Singh",
    email: "priya.singh@email.com",
    phone: "+1 (650) 555-7781",
    date: "Jan 28, 2026",
    time: "9:15 AM",
    location: "San Mateo Clinic",
    reason: "Interested in colonoscopy screening and general wellness guidance.",
    submittedAt: "Jan 25, 2026 · 6:45 PM",
  },
];

const BookingDetailPage = ({ params }: { params: { id: string } }) => {
  const booking = bookings.find((item) => item.id === params.id) ?? bookings[0];

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
                  <p className="font-medium">{booking.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Reason for visit</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{booking.reason}</p>
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
                    {booking.date} · {booking.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-xs text-muted-foreground">Preferred location</p>
                  <p className="font-medium">{booking.location}</p>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
                Submitted {booking.submittedAt}
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
