export type Room = {
  name: string;
  slug: string;
  description: string;
  price: number;
  maxGuests: number;
  type: "Standard" | "Triple" | "Executive" | "Family";
  amenities: string[];
  image: string;
};

export const rooms: Room[] = [
  {
    name: "Standard Room",
    slug: "standard-room",
    description:
      "A simple, comfortable room with 1 single bed and 1 double bed, ideal for two guests.",
    price: 1500,
    maxGuests: 2,
    type: "Standard",
    amenities: ["1 single bed", "1 double bed", "Complimentary breakfast", "Private room"],
    image: "/images/standard-executive-room.jpeg"
  },
  {
    name: "Triple Room",
    slug: "triple-room",
    description:
      "A practical room arranged with 3 single beds for friends, colleagues, or small groups.",
    price: 2000,
    maxGuests: 3,
    type: "Triple",
    amenities: ["3 single beds", "Complimentary breakfast", "Group-friendly", "Private room"],
    image: "/images/family-room.jpeg"
  },
  {
    name: "Executive Room",
    slug: "executive-room",
    description:
      "A spacious option with 1 single bed and 1 queen bed for a comfortable two-person stay.",
    price: 1800,
    maxGuests: 2,
    type: "Executive",
    amenities: ["1 single bed", "1 queen bed", "Complimentary breakfast", "Private room"],
    image: "/images/standard-executive-room.jpeg"
  },
  {
    name: "Family Room",
    slug: "family-room",
    description:
      "A larger room with 2 queen beds and 1 single bed, made for families and shared stays.",
    price: 2500,
    maxGuests: 4,
    type: "Family",
    amenities: ["2 queen beds", "1 single bed", "Complimentary breakfast", "Private room"],
    image: "/images/family-room.jpeg"
  }
];
