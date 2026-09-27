import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import { Ruler, TrendingDown, Award } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { SectionCard } from "@/components/dashboard/Widgets";
import { progressTrend, personalRecords, currentMember } from "@/lib/mockData";

export function MemberProgress() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <SectionCard title="Weight trend" description="Last 12 weeks" className="lg:col-span-2">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressTrend}>
                  <defs>
                    <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis domain={["dataMin - 3", "dataMax + 3"]} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={36} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v} lb`, "Weight"]} />
                  <Area type="monotone" dataKey="weight" stroke="#f97316" strokeWidth={2.5} fill="url(#weightGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Body composition" description="Current stats">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <div className="flex items-center gap-2 text-slate-500 dark:text-white/50">
                  <Ruler className="h-4 w-4" /> Height
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">{currentMember.height}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <div className="flex items-center gap-2 text-slate-500 dark:text-white/50">
                  <TrendingDown className="h-4 w-4" /> Weight
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">{currentMember.weight} lb</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <div className="flex items-center gap-2 text-slate-500 dark:text-white/50">
                  <Award className="h-4 w-4" /> Body fat
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">{currentMember.bodyFat}%</span>
              </div>
              <div className="rounded-xl border border-dashed border-emerald-300 bg-emerald-50 p-4 text-xs text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/5 dark:text-emerald-300">
                Down 6 lb and -3.2% body fat over the last 12 weeks. Keep going — you're ahead of pace on your goal.
              </div>
            </div>
          </SectionCard>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionCard title="Body fat % trend">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressTrend}>
                <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={36} domain={["dataMin - 1", "dataMax + 1"]} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v}%`, "Body fat"]} />
                <Line type="monotone" dataKey="bodyFat" stroke="#38bdf8" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.15}>
        <SectionCard title="Personal records" description="Your strength milestones">
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {personalRecords.map((r) => (
              <RevealItem key={r.lift}>
                <div className="rounded-2xl border border-slate-100 p-5 text-center dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-white/35">{r.lift}</p>
                  <p className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">{r.value}</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-500">{r.change} in {r.period}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </SectionCard>
      </Reveal>
    </div>
  );
}
