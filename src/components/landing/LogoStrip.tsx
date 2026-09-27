const items = [
  "MEN'S HEALTH", "FORBES FITNESS", "SHAPE", "NYC LIVING", "WELL+GOOD", "OUTSIDE MAG", "BROOKLYN DAILY",
];

export function LogoStrip() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-white/10 bg-slate-950 py-8">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-white/35">
        Featured in
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-16">
          {loop.map((item, i) => (
            <span key={i} className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-white/25">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
