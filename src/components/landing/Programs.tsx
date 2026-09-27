import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const programs = [
  {
    tag: "Most popular",
    title: "Strength & Hypertrophy",
    description: "Progressive overload programming to build raw strength and lean muscle mass.",
    stats: ["4x / week", "45–60 min", "All levels"],
    gradient: "from-amber-500/90 to-orange-600/90",
  },
  {
    tag: "High intensity",
    title: "HIIT Conditioning",
    description: "Metabolic conditioning circuits that torch calories and build engine capacity fast.",
    stats: ["3x / week", "30–45 min", "Intermediate+"],
    gradient: "from-rose-500/90 to-red-600/90",
  },
  {
    tag: "Small group",
    title: "Functional Athlete",
    description: "Sport-inspired training for power, agility and mobility — capped at 16 athletes.",
    stats: ["2x / week", "50 min", "All levels"],
    gradient: "from-sky-500/90 to-indigo-600/90",
  },
  {
    tag: "1-on-1",
    title: "Private Coaching",
    description: "Fully personalised programming and form coaching with a dedicated trainer.",
    stats: ["Flexible", "60 min", "All levels"],
    gradient: "from-emerald-500/90 to-teal-600/90",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative bg-slate-50 py-24 dark:bg-slate-950 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Programs"
              title="A program for every kind of goal"
              description="Whether you're chasing a deadlift PR or your first 5k, our coaches build a plan around you."
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
          {programs.map((p) => (
            <RevealItem key={p.title}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:shadow-2xl hover:shadow-slate-200 dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-none">
                <div className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${p.gradient} p-6`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />
                  <span className="relative rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/80 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-white/55">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stats.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-white/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
