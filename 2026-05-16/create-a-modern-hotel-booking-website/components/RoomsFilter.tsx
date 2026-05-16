"use client";

import { useMemo, useState } from "react";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/RoomCard";

const priceRanges = [
  { label: "All prices", min: 0, max: Infinity },
  { label: "Under PHP 1,800", min: 0, max: 1799 },
  { label: "PHP 1,800 - 2,200", min: 1800, max: 2200 },
  { label: "PHP 2,300+", min: 2300, max: Infinity }
];

export default function RoomsFilter() {
  const [type, setType] = useState("All");
  const [priceRange, setPriceRange] = useState(priceRanges[0].label);

  const filteredRooms = useMemo(() => {
    const selectedRange = priceRanges.find((range) => range.label === priceRange) ?? priceRanges[0];
    return rooms.filter((room) => {
      const matchesType = type === "All" || room.type === type;
      const matchesPrice = room.price >= selectedRange.min && room.price <= selectedRange.max;
      return matchesType && matchesPrice;
    });
  }, [type, priceRange]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-[1.5rem] border border-sand/80 bg-white p-4 shadow-sm md:grid-cols-2">
        <label>
          <span className="mb-2 block text-sm font-semibold text-navy">Room Type</span>
          <select className="premium-input" value={type} onChange={(event) => setType(event.target.value)}>
            {["All", "Standard", "Triple", "Executive", "Family"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="mb-2 block text-sm font-semibold text-navy">Price Range</span>
          <select
            className="premium-input"
            value={priceRange}
            onChange={(event) => setPriceRange(event.target.value)}
          >
            {priceRanges.map((range) => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {filteredRooms.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
      </div>
    </div>
  );
}
