"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { rooms } from "@/data/rooms";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  requests: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  roomType: "",
  requests: ""
};

export default function BookingForm() {
  const searchParams = useSearchParams();
  const requestedRoom = searchParams.get("room") ?? "";
  const [form, setForm] = useState<FormState>({ ...initialState, roomType: requestedRoom });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const minCheckoutDate = useMemo(() => form.checkIn || undefined, [form.checkIn]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your contact number.";
    if (!form.checkIn) nextErrors.checkIn = "Please choose a check-in date.";
    if (!form.checkOut) nextErrors.checkOut = "Please choose a check-out date.";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      nextErrors.checkOut = "Check-out must be after check-in.";
    }
    if (!form.guests || Number(form.guests) < 1) nextErrors.guests = "Add at least one guest.";
    if (!form.roomType) nextErrors.roomType = "Please select a room.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
    setForm({ ...initialState, roomType: requestedRoom });
  }

  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-8">
      {submitted ? (
        <div className="mb-6 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-4 text-sm font-semibold text-navy">
          Thank you! Your booking request has been received. Our team will contact you shortly.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.fullName}>
          <input
            className="premium-input"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email Address" error={errors.email}>
          <input
            type="email"
            className="premium-input"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Contact Number" error={errors.phone}>
          <input
            className="premium-input"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+1 000 000 0000"
          />
        </Field>
        <Field label="Number of Guests" error={errors.guests}>
          <input
            type="number"
            min="1"
            max="8"
            className="premium-input"
            value={form.guests}
            onChange={(event) => updateField("guests", event.target.value)}
          />
        </Field>
        <Field label="Check-in Date" error={errors.checkIn}>
          <input
            type="date"
            className="premium-input"
            value={form.checkIn}
            onChange={(event) => updateField("checkIn", event.target.value)}
          />
        </Field>
        <Field label="Check-out Date" error={errors.checkOut}>
          <input
            type="date"
            min={minCheckoutDate}
            className="premium-input"
            value={form.checkOut}
            onChange={(event) => updateField("checkOut", event.target.value)}
          />
        </Field>
        <Field label="Room Type" error={errors.roomType}>
          <select
            className="premium-input"
            value={form.roomType}
            onChange={(event) => updateField("roomType", event.target.value)}
          >
            <option value="">Select a room</option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.name}>
                {room.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Special Requests" className="md:col-span-2" error={errors.requests}>
          <textarea
            className="premium-input min-h-32 resize-y"
            value={form.requests}
            onChange={(event) => updateField("requests", event.target.value)}
            placeholder="Arrival details, occasion, accessibility needs, or preferences"
          />
        </Field>
        <div className="md:col-span-2">
          <button type="submit" className="premium-button w-full bg-gold text-navy hover:bg-[#d9b65c]">
            Submit Booking Request
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  className = "",
  children
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-navy">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}
