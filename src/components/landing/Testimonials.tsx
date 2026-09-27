import { Star, Quote } from "lucide-react";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const testimonials = [
  {
    name: "Sasha Kim",
    role: "Member since 2021",
    quote:
      "I've tried five gyms in New York. Forge is the only one where I actually look forward to leg day. The app keeps me accountable in a way nothing else has.",
    result: "Lost 24 lb, deadlift +90 lb",
  },
  {
    name: "Marcus Webb",
    role: "Member since 2022",
    quote:
      "The coaching quality is unreal for the price. Maya rebuilt my squat form in two sessions and I stopped getting knee pain entirely.",
    result: "Squat PR: 315 lb",
  },
  {
    name: "Elena Petrova",
    role: "Member since 2023",
    quote:
      "Between the diet plan and the streak tracker, I finally have a system instead of just vibes. Down two dress sizes and stronger than ever.",
    result: "Body fat -6.2%",
  },
  {
    name: "Devon Clarke",
    role: "Member since 2020",
    quote:
      "The leaderboard sounds gimmicky until you're #1 for a month straight. Genuinely made training fun again after years of burnout.",
    result: "412 total check-ins",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.08),transparent_50%)]" />
      <Container>
        <Reveal>
          <SectionHeading light eyebrow="Member stories" title="Real people. Real transformations." />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <Quote className="h-8 w-8 text-amber-400/40" />
                <p className="mt-4 text-balance text-lg leading-relaxed text-white/80">"{t.quote}"</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-sm font-bold text-white">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="mt-1 text-[11px] font-medium text-amber-300/80">{t.result}</span>
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
