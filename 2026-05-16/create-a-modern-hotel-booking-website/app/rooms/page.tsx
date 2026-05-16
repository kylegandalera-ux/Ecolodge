import RoomsFilter from "@/components/RoomsFilter";

export const metadata = {
  title: "Rooms | Ecolodge H100"
};

export default function RoomsPage() {
  return (
    <section className="bg-pearl py-16 sm:py-20">
      <div className="container-pad">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Rooms</p>
          <h1 className="section-title mt-3">Choose the room that fits the shape of your stay.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Browse refined rooms and suites with local availability request flow, clear pricing, and
            thoughtful amenities for solo travelers, couples, families, and executives.
          </p>
        </div>
        <RoomsFilter />
      </div>
    </section>
  );
}
