import RoomsFilter from "@/components/RoomsFilter";

export const metadata = {
  title: "Rooms | H100 Ecolodge"
};

export default function RoomsPage() {
  return (
    <section className="bg-pearl py-16 sm:py-20">
      <div className="container-pad">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Rooms</p>
          <h1 className="section-title mt-3">Choose the room that fits the shape of your stay.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Browse H100 Ecolodge room types with nightly PHP rates, guest capacity, bed setup, and
            complimentary breakfast included.
          </p>
        </div>
        <RoomsFilter />
        <div className="mt-12 grid gap-6 rounded-[2rem] bg-white p-5 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="p-2 sm:p-4">
            <p className="eyebrow">Rate Card</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Published H100 Ecolodge rates</h2>
            <p className="mt-4 leading-7 text-slate-600">
              The current room list follows the official rate card: Standard Room PHP 1,500, Triple Room
              PHP 2,000, Executive Room PHP 1,800, and Family Room PHP 2,500. All rooms include
              complimentary breakfast.
            </p>
          </div>
          <img
            src="/images/h100-rate-card.jpeg"
            alt="H100 Ecolodge room rate card"
            className="max-h-[680px] w-full rounded-[1.5rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
