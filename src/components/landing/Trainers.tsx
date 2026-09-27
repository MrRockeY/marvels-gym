import { Share2, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const trainers = [
  { name: "Maya Chen", role: "Head Strength Coach", tag: "Powerlifting · 9 yrs", rating: 4.9, gradient: "from-amber-400 to-orange-600" },
  { name: "Diego Alvarez", role: "HIIT & Conditioning", tag: "CrossFit L3 · 7 yrs", rating: 4.8, gradient: "from-rose-400 to-red-600" },
  { name: "Priya Nair", role: "Mobility & Recovery", tag: "Physio-based · 6 yrs", rating: 4.9, gradient: "from-sky-400 to-indigo-600" },
  { name: "Ines Torres", role: "Nutrition Coach", tag: "Sports Dietitian · 5 yrs", rating: 4.9, gradient: "from-emerald-400 to-teal-600" },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative bg-slate-50 py-24 dark:bg-slate-950 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Coaching staff"
            title="Coaches who are as invested as you are"
            description="Every Forge coach is certified, background-checked, and continually trained — because your results depend on it."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {trainers.map((t) => (
            <RevealItem key={t.name}>
              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
                <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${t.gradient}`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <span className="font-display text-5xl font-bold text-white/90">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:bg-white/30">
                    <Share2 className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{t.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {t.rating}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-white/50">{t.role}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-white/30">{t.tag}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
