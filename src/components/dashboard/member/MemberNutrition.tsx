import { Droplets, Flame, Beef, Wheat, Nut } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { SectionCard, ProgressBar } from "@/components/dashboard/Widgets";
import { dietPlan } from "@/lib/mockData";

const consumed = { calories: 1890, protein: 138, carbs: 175, fats: 54, water: 2.1 };

export function MemberNutrition() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { icon: Flame, label: "Calories", value: consumed.calories, target: dietPlan.targetCalories, unit: "kcal", color: "text-orange-500 bg-orange-400/10" },
            { icon: Beef, label: "Protein", value: consumed.protein, target: dietPlan.targetProtein, unit: "g", color: "text-rose-500 bg-rose-400/10" },
            { icon: Wheat, label: "Carbs", value: consumed.carbs, target: dietPlan.targetCarbs, unit: "g", color: "text-amber-500 bg-amber-400/10" },
            { icon: Nut, label: "Fats", value: consumed.fats, target: dietPlan.targetFats, unit: "g", color: "text-sky-500 bg-sky-400/10" },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${m.color}`}>
                <m.icon className="h-[18px] w-[18px]" />
              </span>
              <p className="mt-3 font-display text-xl font-bold text-slate-900 dark:text-white">
                {m.value}
                <span className="text-sm font-normal text-slate-400 dark:text-white/40"> / {m.target}{m.unit}</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-white/40">{m.label} today</p>
              <ProgressBar value={(m.value / m.target) * 100} className="mt-3 h-1.5" />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <SectionCard
          title="Hydration"
          description={`${consumed.water}L of ${dietPlan.waterTargetLiters}L target`}
          action={<Droplets className="h-5 w-5 text-sky-400" />}
        >
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`h-10 flex-1 rounded-lg ${
                  i < Math.round((consumed.water / dietPlan.waterTargetLiters) * 8) ? "bg-gradient-to-b from-sky-400 to-sky-600" : "bg-slate-100 dark:bg-white/10"
                }`}
              />
            ))}
          </div>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionCard title="Today's meal plan" description="Personalised by Coach Ines Torres — Nutrition Coach">
          <RevealGroup className="space-y-4" stagger={0.06}>
            {dietPlan.meals.map((meal) => (
              <RevealItem key={meal.name}>
                <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-5 transition hover:border-amber-300 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">{meal.name}</p>
                      <span className="text-xs text-slate-400 dark:text-white/35">{meal.time}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-500 dark:text-white/50">
                      {meal.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-white/30" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3 sm:flex-col sm:items-end">
                    <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-white/5 dark:text-white/60">
                      {meal.calories} kcal
                    </span>
                    <span className="text-xs text-slate-400 dark:text-white/35">
                      P{meal.protein} · C{meal.carbs} · F{meal.fats}
                    </span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </SectionCard>
      </Reveal>
    </div>
  );
}
