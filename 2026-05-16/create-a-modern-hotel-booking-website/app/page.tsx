import Link from "next/link";
import AmenityCard from "@/components/AmenityCard";
import RoomCard from "@/components/RoomCard";
import TestimonialCard from "@/components/TestimonialCard";
import { rooms } from "@/data/rooms";

const amenities = [
  {
    title: "Spa & Wellness",
    description: "Quiet treatment rooms, steam rituals, and restorative therapies inspired by coastal living.",
    icon: "✦"
  },
  {
    title: "Signature Dining",
    description: "Seasonal menus, private tables, and polished service from breakfast through late evening.",
    icon: "◆"
  },
  {
    title: "Pool Terrace",
    description: "A serene outdoor deck with shaded loungers, chilled towels, and golden-hour views.",
    icon: "●"
  }
];

const testimonials = [
  {
    quote: "Every detail felt considered, from the welcome drink to the turn-down service.",
    name: "Mara Collins",
    detail: "Weekend guest"
  },
  {
    quote: "The Executive Suite was calm, spacious, and perfect for hosting clients between meetings.",
    name: "Daniel Reyes",
    detail: "Business traveler"
  },
  {
    quote: "Our family had room to breathe, and the staff made the stay beautifully easy.",
    name: "Sofia Nguyen",
    detail: "Family suite guest"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-navy text-white">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
          alt="Luxury hotel pool and exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/15" />
        <div className="container-pad relative flex min-h-[calc(100vh-5rem)] items-center py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Ecolodge H100</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Azure Haven Hotel
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/85">
              Relax, Stay, and Experience Comfort
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
            <h2 className="section-title mt-3">A polished escape with a softer sense of luxury.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Azure Haven Hotel pairs elegant rooms, thoughtful amenities, and attentive service with the
            calm of a private retreat. Whether you are booking a quiet weekend, a family stay, or a
            business trip with room to breathe, our team keeps every detail effortless.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pad">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Featured Rooms</p>
              <h2 className="section-title mt-3">Suites and rooms made for unhurried stays.</h2>
            </div>
            <Link href="/rooms" className="premium-button border border-navy text-navy hover:bg-navy hover:text-white">
              Explore All Rooms
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {rooms.slice(1, 3).map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-pad">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow">Amenities</p>
            <h2 className="section-title mt-3">The comforts guests remember.</h2>
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
            <h2 className="section-title mt-3">Guests speak warmly of the details.</h2>
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
              Reserve your next stay at Azure Haven Hotel.
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
