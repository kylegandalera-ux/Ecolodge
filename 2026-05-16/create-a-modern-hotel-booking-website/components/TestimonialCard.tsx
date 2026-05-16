type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
};

export default function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <article className="rounded-[1.75rem] bg-white p-7 shadow-soft">
      <div className="text-gold">★★★★★</div>
      <p className="mt-4 text-base leading-7 text-slate-700">“{quote}”</p>
      <div className="mt-6 border-t border-sand/60 pt-5">
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-slate-500">{detail}</p>
      </div>
    </article>
  );
}
