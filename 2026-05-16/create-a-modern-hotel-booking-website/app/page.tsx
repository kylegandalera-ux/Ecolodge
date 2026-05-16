import Link from "next/link";
import AmenityCard from "@/components/AmenityCard";
import RoomCard from "@/components/RoomCard";
import TestimonialCard from "@/components/TestimonialCard";
import { rooms } from "@/data/rooms";

const amenities = [
  {
    title: "Complimentary Breakfast",
    description: "Every room rate includes breakfast, keeping mornings easy before heading around Baguio.",
    icon: "✦"
  },
  {
    title: "Baguio City Location",
    description: "Find us at #358 Lower Magsaysay Avenue, ENDCP Compound, Baguio City.",
    icon: "◆"
  },
  {
    title: "Easy Stay Schedule",
    description: "Check-in starts at 2 PM and check-out is 12 PM, with early check-in available by request.",
    icon: "●"
  }
];

const testimonials = [
  {
    quote: "A clean, practical room and a convenient Baguio location made the stay very easy.",
    name: "Recent guest",
    detail: "Standard Room"
  },
  {
    quote: "The included breakfast and friendly assistance were exactly what we needed for a short trip.",
    name: "Returning visitor",
    detail: "Executive Room"
  },
  {
    quote: "The family room setup worked well for our group, with enough beds for everyone.",
    name: "Family traveler",
    detail: "Family Room"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-navy text-white">
        <img
          src="/images/family-room.jpeg"
          alt="H100 Ecolodge family room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/10" />
        <div className="container-pad relative flex min-h-[calc(100vh-5rem)] items-center py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Baguio City stay</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              H100 Ecolodge
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/85">
              Clean, comfortable rooms with complimentary breakfast near Lower Magsaysay Avenue.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Room rates from PHP 1,500 per night
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className="premium-button bg-gold text-navy hover:bg-[#d9b65c]">
                Book Now
              </Link>
              <Link
                href="/rooms"
                className="premium-button border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-navy"
              >
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2 className="section-title mt-3">A simple and comfortable place to stay in Baguio.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            H100 Ecolodge offers practical rooms for couples, friends, families, and small groups. Each
            room includes complimentary breakfast, clear nightly rates, and an easy booking request form
            so guests can check availability before arrival.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pad">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Featured Rooms</p>
              <h2 className="section-title mt-3">Rooms with clear rates and breakfast included.</h2>
            </div>
            <Link href="/rooms" className="premium-button border border-navy text-navy hover:bg-navy hover:text-white">
              Explore All Rooms
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {rooms.slice(0, 2).map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-pad">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow">Amenities</p>
            <h2 className="section-title mt-3">Helpful details for a smoother stay.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.title} {...amenity} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="container-pad">
          <div className="mb-10">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title mt-3">Guest-friendly rooms for real Baguio trips.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-pad flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold">
              Send a booking request to H100 Ecolodge.
            </h2>
          </div>
          <Link href="/booking" className="premium-button bg-gold text-navy hover:bg-[#d9b65c]">
            Start Booking
          </Link>
        </div>
      </section>
    </>
  );
}
