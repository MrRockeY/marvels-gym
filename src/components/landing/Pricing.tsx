import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { cn } from "@/utils/cn";

const plans = [
  {
    name: "Basic",
    price: 59,
    description: "Full gym floor access for self-directed training.",
    features: ["Unlimited gym floor access", "Locker room & showers", "Member app access", "1 guest pass / month"],
    highlight: false,
  },
  {
    name: "Performance",
    price: 89,
    description: "Our most popular plan — classes included.",
    features: ["Everything in Basic", "Unlimited group classes", "Monthly progress check-in", "Nutrition starter plan", "3 guest passes / month"],
    highlight: true,
  },
  {
    name: "Elite Performance",
    price: 129,
    description: "Full coaching experience with personal programming.",
    features: ["Everything in Performance", "2 PT sessions / month", "Custom nutrition coaching", "Priority class booking", "Recovery suite access"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Membership"
            title="Simple pricing. No hidden fees."
            description="Cancel or switch plans anytime from your dashboard. Every plan includes a 7-day free trial."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.1}>
          {plans.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1.5",
                  plan.highlight
                    ? "border-amber-400/50 bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl shadow-orange-500/20"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]"
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1 text-xs font-bold text-slate-950">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={cn("font-display text-lg font-semibold", plan.highlight ? "text-white" : "text-slate-900 dark:text-white")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-2 text-sm", plan.highlight ? "text-white/60" : "text-slate-500 dark:text-white/50")}>{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={cn("font-display text-4xl font-bold", plan.highlight ? "text-white" : "text-slate-900 dark:text-white")}>
                    ${plan.price}
                  </span>
                  <span className={cn("text-sm", plan.highlight ? "text-white/50" : "text-slate-400 dark:text-white/40")}>/ month</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={cn("flex items-start gap-2.5 text-sm", plan.highlight ? "text-white/75" : "text-slate-600 dark:text-white/65")}>
                      <Check className={cn("mt-0.5 h-4 w-4 flex-shrink-0", plan.highlight ? "text-amber-400" : "text-emerald-500")} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/login"
                  className={cn(
                    "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                    plan.highlight
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20"
                  )}
                >
                  Start free trial
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
