"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-pearl py-16 sm:py-20">
      <div className="container-pad">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title mt-3">Speak with the Azure Haven team.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use the details below or send a message for group stays, special requests, or help planning your visit.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-7 shadow-soft">
              <h2 className="font-display text-3xl font-semibold text-navy">Hotel Details</h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                <p>
                  <span className="font-semibold text-navy">Address:</span> 123 Azure Bay Avenue, City Placeholder
                </p>
                <p>
                  <span className="font-semibold text-navy">Phone:</span> +1 (000) 123-4567
                </p>
                <p>
                  <span className="font-semibold text-navy">Email:</span> reservations@azurehaven.example
                </p>
              </div>
            </div>
            <div className="flex min-h-72 items-center justify-center rounded-[2rem] border border-dashed border-gold/60 bg-white p-8 text-center shadow-sm">
              <div>
                <p className="font-display text-2xl font-semibold text-navy">Google Maps Placeholder</p>
                <p className="mt-2 text-sm text-slate-500">Embed your official hotel map here before launch.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-8">
            {sent ? (
              <div className="mb-6 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-4 text-sm font-semibold text-navy">
                Thank you. Your message has been sent.
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="grid gap-5">
              <label>
                <span className="mb-2 block text-sm font-semibold text-navy">Full Name</span>
                <input className="premium-input" required placeholder="Your name" />
              </label>
              <label>
                <span className="mb-2 block text-sm font-semibold text-navy">Email Address</span>
                <input type="email" className="premium-input" required placeholder="you@example.com" />
              </label>
              <label>
                <span className="mb-2 block text-sm font-semibold text-navy">Message</span>
                <textarea className="premium-input min-h-36 resize-y" required placeholder="How can we help?" />
              </label>
              <button type="submit" className="premium-button bg-navy text-white hover:bg-ink">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
