import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Booking | H100 Ecolodge"
};

export default function BookingPage() {
  return (
    <section className="bg-pearl py-16 sm:py-20">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">Booking Request</p>
          <h1 className="section-title mt-3">Check availability for your H100 Ecolodge stay.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Submit your preferred room, dates, and guest details. This form creates a booking request only;
            our reservations team will confirm availability and next steps.
          </p>
          <div className="mt-8 rounded-[1.75rem] bg-navy p-6 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-gold">Stay details</p>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Check-in is 2 PM and check-out is 12 PM. Early check-in may be available with a PHP 500
              charge. No online payment is connected yet.
            </p>
          </div>
        </div>
        <Suspense fallback={<div className="rounded-[2rem] bg-white p-8 shadow-soft">Loading form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </section>
  );
}
