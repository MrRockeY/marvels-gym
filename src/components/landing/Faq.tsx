import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/utils/cn";

const faqs = [
  {
    q: "Is there really a free trial?",
    a: "Yes — every new member gets 7 days of full access, including group classes, before choosing a plan. No credit card tricks, cancel anytime.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Absolutely. You can pause, downgrade or cancel directly from your member dashboard with no phone calls required. Changes apply from your next billing cycle.",
  },
  {
    q: "Do I need experience to join group classes?",
    a: "Not at all. Every class is coached with scalable movement options, so total beginners and advanced athletes can train side by side safely.",
  },
  {
    q: "What is the member app and is it included?",
    a: "The Forge app is included in every membership. It gives you your workout schedule, diet plan, progress charts, streaks and leaderboard — all in one place.",
  },
  {
    q: "Do you offer nutrition coaching?",
    a: "Yes. Performance and Elite Performance plans include personalised nutrition coaching from our in-house sports dietitian.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-slate-50 py-24 dark:bg-slate-950 sm:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-3">
            {faqs.map((item, i) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-slate-900 dark:text-white">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300",
                      open === i && "rotate-180 text-amber-500"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500 dark:text-white/55">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
