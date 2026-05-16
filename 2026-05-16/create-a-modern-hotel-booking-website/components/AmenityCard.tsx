type AmenityCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function AmenityCard({ title, description, icon }: AmenityCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-sand/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg text-gold">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
