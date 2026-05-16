const highlights = ["Boutique room collection", "Wellness-led amenities", "Concierge-style service", "Flexible family stays"];

export const metadata = {
  title: "About | Ecolodge H100"
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80"
          alt="Elegant hotel terrace"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="container-pad relative max-w-4xl">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-6xl">
            Hospitality with calm, polish, and a sincere sense of welcome.
          </h1>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="eyebrow">Hotel Story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Ecolodge H100</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Ecolodge H100 was imagined as a quieter kind of luxury: beautiful spaces, natural textures,
              considered service, and rooms that make travel feel less hurried. Ecolodge H100 brings
              together boutique hospitality and the ease of a modern booking experience.
            </p>
          </div>
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">To make every stay feel effortless.</h2>
            <p className="mt-4 leading-7 text-white/75">
              Our mission is to offer restorative stays shaped by comfort, attentive care, and elegant
              details that help guests arrive fully and leave renewed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Guests Choose Us</p>
            <h2 className="section-title mt-3">A hotel designed for comfort without excess.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Guests return for rooms that feel private, dining that feels personal, and a reservations
              experience that keeps planning simple.
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
