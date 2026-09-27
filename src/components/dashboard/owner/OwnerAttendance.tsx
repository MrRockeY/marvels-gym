import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import { Footprints, Clock, TrendingUp, Users } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionCard, StatCard } from "@/components/dashboard/Widgets";
import { checkInsByHour, ownerKpis, memberGrowth } from "@/lib/mockData";

const weeklyCheckins = [
  { day: "Mon", checkins: 312 },
  { day: "Tue", checkins: 289 },
  { day: "Wed", checkins: 334 },
  { day: "Thu", checkins: 298 },
  { day: "Fri", checkins: 341 },
  { day: "Sat", checkins: 402 },
  { day: "Sun", checkins: 218 },
];

export function OwnerAttendance() {
  const peakHour = checkInsByHour.reduce((max, h) => (h.count > max.count ? h : max), checkInsByHour[0]);

  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Footprints} label="Check-ins today" value={ownerKpis.checkInsToday.toString()} trend="up" trendLabel="+8% vs avg" iconClass="bg-amber-400/10 text-amber-500" />
          <StatCard icon={Clock} label="Peak hour" value={peakHour.hour} trendLabel={`${peakHour.count} check-ins`} iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={TrendingUp} label="Avg visits / member / week" value={ownerKpis.avgVisitsPerWeek.toString()} iconClass="bg-emerald-400/10 text-emerald-500" />
          <StatCard icon={Users} label="Facility utilization" value={`${ownerKpis.utilizationRate}%`} iconClass="bg-rose-400/10 text-rose-500" />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <SectionCard title="Check-ins by hour" description="Today's traffic pattern — identify peak & off-peak windows">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={checkInsByHour} barCategoryGap="22%">
                <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                <XAxis dataKey="hour" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} interval={1} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={30} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v} check-ins`, ""]} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]} fill="url(#attendanceGradient)" />
                <defs>
                  <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <SectionCard title="Weekly check-in volume" description="This week vs. capacity">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyCheckins} barCategoryGap="35%">
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={34} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v} check-ins`, ""]} />
                  <Bar dataKey="checkins" radius={[8, 8, 8, 8]} fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionCard title="Member growth" description="Total active members over 12 months">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={memberGrowth}>
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis domain={["dataMin - 50", "dataMax + 50"]} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={40} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v} members`, ""]} />
                  <Line type="monotone" dataKey="members" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>
      </div>
    </div>
  );
}
