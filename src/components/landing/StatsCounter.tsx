import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.6, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 12400, suffix: "+", label: "Members trained since 2014" },
  { value: 96, suffix: "%", label: "Members who renew each year" },
  { value: 42, suffix: "+", label: "Weekly classes across 3 gyms" },
  { value: 4.9, suffix: "★", label: "Average member rating", isDecimal: true },
];

export function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="font-display text-4xl font-bold text-white sm:text-5xl">
              {s.isDecimal ? "4.9★" : <Counter value={s.value} suffix={s.suffix} />}
            </div>
            <p className="mt-2 text-sm text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
