import Link from "next/link";
import type { Room } from "@/data/rooms";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={`${room.name} interior`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
          {room.type}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-navy">{room.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{room.description}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-semibold text-gold">
              PHP {room.price.toLocaleString()}
            </p>
            <p className="text-xs text-slate-500">per night</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink">
            Up to {room.maxGuests} guests
          </span>
          {room.amenities.map((amenity) => (
            <span key={amenity} className="rounded-full bg-pearl px-3 py-1 text-xs text-slate-600">
              {amenity}
            </span>
          ))}
        </div>
        <Link
          href={`/booking?room=${encodeURIComponent(room.name)}`}
          className="premium-button mt-6 w-full bg-navy text-white hover:bg-ink"
        >
          Book This Room
        </Link>
      </div>
    </article>
  );
}
