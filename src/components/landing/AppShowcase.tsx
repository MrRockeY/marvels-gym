import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, TrendingUp, Users, DollarSign, Calendar, Trophy } from "lucide-react";
import { Container, SectionHeading } from "@/components/shared/Ui";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/utils/cn";

const tabs = [
  {
    key: "member",
    label: "Member Dashboard",
    icon: Flame,
  },
  {
    key: "owner",
    label: "Owner Dashboard",
    icon: TrendingUp,
  },
] as const;

export function AppShowcase() {
  const [active, setActive] = useState<"member" | "owner">("member");

  return (
    <section id="app" className="relative overflow-hidden bg-white py-24 dark:bg-slate-950 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Forge App"
            title="A members app your gym actually deserves"
            description="Every membership includes access to our SaaS-grade platform — track workouts, diet, streaks and rankings, while owners get a full command centre for the business."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex w-fit gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
                  active === tab.key ? "text-white" : "text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white"
                )}
              >
                {active === tab.key && (
                  <motion.span
                    layoutId="app-tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <tab.icon className="relative h-4 w-4" />
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute -inset-x-10 -inset-y-10 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.12),transparent_65%)]" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-300/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/40">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-3.5 dark:border-white/10 dark:bg-slate-900/60">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-4 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400 dark:bg-white/5 dark:text-white/40">
                  app.forgefitnessclub.com/dashboard
                </span>
              </div>

              <div className="min-h-[420px] bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {active === "member" ? (
                    <motion.div
                      key="member"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                    >
                      <div className="rounded-2xl glass p-5 sm:col-span-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-wide text-white/40">Membership</p>
                            <p className="mt-1 text-lg font-semibold text-white">Elite Performance — Active</p>
                          </div>
                          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">21 days left</span>
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-4">
                          {[
                            ["Streak", "14 days"],
                            ["This month", "18 sessions"],
                            ["Rank", "#4 of 240"],
                          ].map(([label, val]) => (
                            <div key={label} className="rounded-xl bg-white/5 p-3">
                              <p className="text-[11px] text-white/40">{label}</p>
                              <p className="mt-1 text-sm font-semibold text-white">{val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl glass p-5">
                        <div className="flex items-center gap-2 text-white/70">
                          <Calendar className="h-4 w-4" />
                          <p className="text-xs font-semibold uppercase tracking-wide">Today</p>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-white">Upper Body Strength</p>
                        <p className="text-xs text-white/40">6:00 AM · Coach Maya Chen</p>
                      </div>
                      <div className="rounded-2xl glass p-5 sm:col-span-3">
                        <div className="mb-3 flex items-center gap-2 text-white/70">
                          <Trophy className="h-4 w-4" />
                          <p className="text-xs font-semibold uppercase tracking-wide">Leaderboard snapshot</p>
                        </div>
                        <div className="space-y-2">
                          {[
                            ["1", "Sasha Kim", "3120 pts"],
                            ["4", "Jordan Reyes (you)", "2735 pts"],
                          ].map(([rank, name, pts]) => (
                            <div key={name} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-sm">
                              <span className="flex items-center gap-3 text-white/80">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-300">
                                  {rank}
                                </span>
                                {name}
                              </span>
                              <span className="text-white/50">{pts}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="owner"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                      {[
                        { icon: Users, label: "Active members", value: "1,698" },
                        { icon: DollarSign, label: "Monthly revenue", value: "$214,650" },
                        { icon: TrendingUp, label: "Growth YoY", value: "+18.6%" },
                        { icon: Flame, label: "Check-ins today", value: "341" },
                      ].map((kpi) => (
                        <div key={kpi.label} className="rounded-2xl glass p-5">
                          <kpi.icon className="h-5 w-5 text-amber-300" />
                          <p className="mt-3 text-xl font-bold text-white">{kpi.value}</p>
                          <p className="text-xs text-white/40">{kpi.label}</p>
                        </div>
                      ))}
                      <div className="col-span-2 rounded-2xl glass p-5 sm:col-span-4">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-white/50">Revenue trend</p>
                        <div className="flex h-24 items-end gap-2">
                          {[62, 68, 71, 75, 79, 84, 88, 82, 90, 94, 96, 100].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-amber-500/40 to-orange-400"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
