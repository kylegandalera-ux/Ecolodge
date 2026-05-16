import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-pearl py-24">
      <div className="container-pad max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="section-title mt-3">This room key does not open a page.</h1>
        <p className="mt-4 text-slate-600">Return to Azure Haven Hotel and continue planning your stay.</p>
        <Link href="/" className="premium-button mt-8 bg-gold text-navy hover:bg-[#d9b65c]">
          Back Home
        </Link>
      </div>
    </section>
  );
}
