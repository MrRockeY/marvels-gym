import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Wrench, TrendingUp, Target, Percent } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionCard, StatCard, Pill } from "@/components/dashboard/Widgets";
import { equipmentAlerts, ownerKpis, revenueTrend } from "@/lib/mockData";

const retentionCohorts = [
  { month: "Month 1", retention: 96 },
  { month: "Month 2", retention: 89 },
  { month: "Month 3", retention: 84 },
  { month: "Month 6", retention: 76 },
  { month: "Month 9", retention: 71 },
  { month: "Month 12", retention: 68 },
];

const programPopularity = [
  { subject: "Strength", value: 92 },
  { subject: "HIIT", value: 78 },
  { subject: "Functional", value: 65 },
  { subject: "Recovery", value: 54 },
  { subject: "Nutrition", value: 70 },
  { subject: "Private PT", value: 60 },
];

const priorityTone: Record<string, "danger" | "warning" | "success"> = {
  high: "danger",
  medium: "warning",
  low: "success",
};

const margin = Math.round(
  ((revenueTrend[revenueTrend.length - 1].revenue - revenueTrend[revenueTrend.length - 1].expenses) / revenueTrend[revenueTrend.length - 1].revenue) * 100
);

export function OwnerAnalytics() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Percent} label="Profit margin" value={`${margin}%`} trend="up" trendLabel="+1.4pp" iconClass="bg-emerald-400/10 text-emerald-500" />
          <StatCard icon={TrendingUp} label="Revenue growth YoY" value={`+${ownerKpis.revenueGrowthYoY}%`} trend="up" trendLabel="Ahead of target" iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={Target} label="12-month retention" value="68%" trend="down" trendLabel="-2pp" iconClass="bg-amber-400/10 text-amber-500" />
          <StatCard icon={Wrench} label="Open maintenance items" value={equipmentAlerts.length.toString()} iconClass="bg-rose-400/10 text-rose-500" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <SectionCard title="Member retention cohort" description="% of members still active by tenure milestone">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={retentionCohorts}>
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis domain={[50, 100]} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={36} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v}%`, "Retention"]} />
                  <Line type="monotone" dataKey="retention" stroke="#f97316" strokeWidth={2.5} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionCard title="Program popularity" description="Engagement score by category">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={programPopularity} outerRadius="75%">
                  <PolarGrid stroke="currentColor" className="text-slate-200 dark:text-white/10" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Radar dataKey="value" stroke="#f97316" fill="#f97316" fillOpacity={0.35} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <SectionCard title="Equipment & maintenance" description="Facility health at a glance">
          <div className="space-y-3">
            {equipmentAlerts.map((a) => (
              <div key={a.equipment} className="flex items-center justify-between rounded-xl border border-slate-100 p-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-white/50">
                    <Wrench className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-white/85">{a.equipment}</p>
                    <p className="text-xs text-slate-400 dark:text-white/35">{a.issue}</p>
                  </div>
                </div>
                <Pill tone={priorityTone[a.priority]}>{a.priority}</Pill>
              </div>
            ))}
          </div>
        </SectionCard>
      </Reveal>
    </div>
  );
}
