const highlights = [
  "Rooms from PHP 1,500",
  "Complimentary breakfast",
  "Baguio City location",
  "Family and group options"
];

export const metadata = {
  title: "About | H100 Ecolodge"
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <img
          src="/images/standard-executive-room.jpeg"
          alt="H100 Ecolodge room"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="container-pad relative max-w-4xl">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-6xl">
            Comfortable rooms and straightforward hospitality in Baguio City.
          </h1>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="eyebrow">Hotel Story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">H100 Ecolodge</h2>
            <p className="mt-4 leading-7 text-slate-600">
              H100 Ecolodge offers practical accommodations at #358 Lower Magsaysay Avenue, ENDCP
              Compound, Baguio City. The property focuses on clean rooms, clear rates, and a convenient
              booking request process for guests planning short stays, family trips, or group visits.
            </p>
          </div>
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">To make every stay simple and comfortable.</h2>
            <p className="mt-4 leading-7 text-white/75">
              Our mission is to give guests a reliable place to rest, helpful service, complimentary
              breakfast, and room options that match the size of their travel group.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Guests Choose Us</p>
            <h2 className="section-title mt-3">A practical Baguio stay with honest room choices.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Guests can choose from Standard, Triple, Executive, and Family rooms, all with breakfast
              included and rates displayed clearly before they send a request.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-[1.5rem] border border-sand/70 bg-pearl p-6">
                <p className="font-semibold text-navy">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
