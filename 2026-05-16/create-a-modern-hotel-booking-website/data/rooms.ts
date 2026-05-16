export type Room = {
  name: string;
  slug: string;
  description: string;
  price: number;
  maxGuests: number;
  type: "Classic" | "Premium" | "Suite";
  amenities: string[];
  image: string;
};

export const rooms: Room[] = [
  {
    name: "Standard Room",
    slug: "standard-room",
    description:
      "A refined retreat with warm finishes, soft linens, and everything needed for an effortless city escape.",
    price: 145,
    maxGuests: 2,
    type: "Classic",
    amenities: ["Queen bed", "Rain shower", "Work desk", "Smart TV"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Deluxe Room",
    slug: "deluxe-room",
    description:
      "A spacious room with lounge seating, upgraded bath amenities, and a calm palette inspired by the coast.",
    price: 210,
    maxGuests: 3,
    type: "Premium",
    amenities: ["King bed", "City view", "Espresso bar", "Soaking tub"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Family Suite",
    slug: "family-suite",
    description:
      "Generous living space for family stays, with flexible sleeping arrangements and thoughtful storage.",
    price: 320,
    maxGuests: 5,
    type: "Suite",
    amenities: ["Two bedrooms", "Living room", "Mini pantry", "Kids amenities"],
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Executive Suite",
    slug: "executive-suite",
    description:
      "A polished suite with a separate lounge, premium views, and tailored touches for business or celebration.",
    price: 460,
    maxGuests: 4,
    type: "Suite",
    amenities: ["Private lounge", "Balcony", "Butler-ready service", "Luxury bath"],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
  }
];
