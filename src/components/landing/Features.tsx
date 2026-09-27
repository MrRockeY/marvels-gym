import { Dumbbell, HeartPulse, Salad, LineChart, Users2, Trophy } from "lucide-react";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const features = [
  {
    icon: Dumbbell,
    title: "Expert-led programming",
    description: "Strength, hypertrophy and athletic conditioning blocks designed by certified coaches and adjusted every 4 weeks.",
  },
  {
    icon: Salad,
    title: "Personalised nutrition",
    description: "Macro-based meal plans tailored to your goals, synced directly with your dashboard and grocery list.",
  },
  {
    icon: LineChart,
    title: "Real progress tracking",
    description: "Log lifts, weight, and body composition. Watch trend lines move in the right direction, automatically.",
  },
  {
    icon: HeartPulse,
    title: "Recovery built in",
    description: "Mobility sessions, sauna access and guided recovery days baked into every program — no burnout.",
  },
  {
    icon: Users2,
    title: "A community that shows up",
    description: "Group classes capped at 16 people, so your coach actually knows your name (and your squat max).",
  },
  {
    icon: Trophy,
    title: "Streaks & leaderboards",
    description: "Friendly competition with monthly leaderboards, streak tracking and achievement badges.",
  },
];

export function Features() {
  return (
    <section className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Forge"
            title="Everything you need to actually stick with it"
            description="Most people don't fail because of a bad workout — they fail because of no structure, no accountability, and no visibility into progress. Forge fixes all three."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-none dark:hover:border-white/20">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-400/10 to-orange-500/10 blur-2xl transition group-hover:scale-150" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/20 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="relative mt-6 font-display text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-white/55">{f.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
