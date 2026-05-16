import Link from "next/link";

const quickLinks = ["Home", "Rooms", "Booking", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr_0.8fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold">Ecolodge H100</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Home of Azure Haven Hotel, where relaxed luxury meets attentive hospitality.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Links</h3>
          <div className="mt-4 flex flex-col gap-2">
            {quickLinks.map((link) => {
              const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              return (
                <Link key={link} href={href} className="text-sm text-white/70 hover:text-white">
                  {link}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p>123 Azure Bay Avenue, City Placeholder</p>
            <p>+1 (000) 123-4567</p>
            <p>reservations@azurehaven.example</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Social</h3>
          <div className="mt-4 flex gap-3">
            {["IG", "FB", "X"].map((item) => (
              <span
                key={item}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        Copyright © 2026 Ecolodge H100. All rights reserved.
      </div>
    </footer>
  );
}
