import { Clock, User2, Zap } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { SectionCard, Pill, EmptyState } from "@/components/dashboard/Widgets";
import { workoutSchedule } from "@/lib/mockData";

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

const intensityTone: Record<string, "success" | "warning" | "danger"> = {
  Low: "success",
  Medium: "warning",
  High: "danger",
};

export function MemberSchedule() {
  return (
    <div className="space-y-6">
      <Reveal>
        <SectionCard title="This week's training plan" description="Assigned by Coach Maya Chen · Updated 3 days ago">
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {workoutSchedule.map((day) => (
              <RevealItem key={day.day}>
                <div
                  className={`h-full rounded-2xl border p-5 transition ${
                    day.day === today ? "border-amber-400/40 bg-amber-400/5" : "border-slate-100 dark:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">{day.day}</p>
                    {day.day === today && <Pill tone="warning">Today</Pill>}
                  </div>
                  <div className="mt-4 space-y-3">
                    {day.sessions.length === 0 ? (
                      <p className="text-xs text-slate-400 dark:text-white/35">Rest day</p>
                    ) : (
                      day.sessions.map((s) => (
                        <div key={s.name} className="rounded-xl bg-slate-50 p-3 dark:bg-white/5">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-slate-800 dark:text-white/90">{s.name}</p>
                            <Pill tone={intensityTone[s.intensity]}>{s.intensity}</Pill>
                          </div>
                          <div className="mt-2 space-y-1 text-xs text-slate-500 dark:text-white/45">
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3 w-3" /> {s.time} · {s.duration} min
                            </div>
                            <div className="flex items-center gap-1.5">
                              <User2 className="h-3 w-3" /> {s.trainer}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Zap className="h-3 w-3" /> {s.type}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionCard title="Upcoming classes you can book" description="Drop into any class that fits your schedule">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sunrise Mobility Flow", time: "Tomorrow · 6:30 AM", spots: 4 },
              { name: "Olympic Lifting Fundamentals", time: "Wed · 5:30 PM", spots: 2 },
              { name: "Saturday Strongman Challenge", time: "Sat · 10:00 AM", spots: 7 },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-100 p-4 transition hover:border-amber-300 hover:shadow-md dark:border-white/10">
                <p className="text-sm font-semibold text-slate-800 dark:text-white/90">{c.name}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-white/40">{c.time}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-emerald-500">{c.spots} spots left</span>
                  <button className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-700 dark:bg-white/10 dark:hover:bg-white/20">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.15}>
        <SectionCard title="Session history">
          <EmptyState icon={Clock} title="No past sessions to show yet" description="Your completed sessions will appear here after your next check-in." />
        </SectionCard>
      </Reveal>
    </div>
  );
}
