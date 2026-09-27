import {
  Users,
  DollarSign,
  TrendingUp,
  Footprints,
  UserPlus,
  UserMinus,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import { Reveal } from "@/components/shared/Reveal";
import { StatCard, SectionCard, Pill, Avatar } from "@/components/dashboard/Widgets";
import { ownerKpis, revenueTrend, membershipPlans, upcomingRenewals, equipmentAlerts } from "@/lib/mockData";

const statusTone: Record<string, "success" | "warning" | "danger"> = {
  "auto-renew": "success",
  "action-needed": "warning",
  overdue: "danger",
};

export function OwnerOverview({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Users} label="Total members" value={ownerKpis.totalMembers.toLocaleString()} trend="up" trendLabel="+96 this mo." iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={DollarSign} label="Monthly revenue" value={`$${ownerKpis.monthlyRevenue.toLocaleString()}`} trend="up" trendLabel={`+${ownerKpis.revenueGrowthYoY}% YoY`} iconClass="bg-emerald-400/10 text-emerald-500" />
          <StatCard icon={Footprints} label="Check-ins today" value={ownerKpis.checkInsToday.toString()} trend="up" trendLabel="Peak at 6PM" iconClass="bg-amber-400/10 text-amber-500" />
          <StatCard icon={UserMinus} label="Churn rate" value={`${ownerKpis.churnRate}%`} trend="down" trendLabel="-0.3pp" iconClass="bg-rose-400/10 text-rose-500" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={0.05}>
          <SectionCard title="Revenue vs. Expenses" description="Last 12 months" action={<Pill tone="success">+18.6% YoY</Pill>}>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueTrend}>
                  <defs>
                    <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="expGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tickFormatter={(v) => `$${v / 1000}k`} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={46} />
                  <Tooltip
                    contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }}
                    formatter={(v, name) => [`$${Number(v).toLocaleString()}`, name === "revenue" ? "Revenue" : "Expenses"]}
                  />
                  <Area type="monotone" dataKey="expenses" stroke="#94a3b8" strokeWidth={2} fill="url(#expGradient)" />
                  <Area type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={2.5} fill="url(#revGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionCard title="Membership mix" description="Members by plan">
            <div className="flex items-center justify-center">
              <div className="h-52 w-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={membershipPlans} dataKey="members" nameKey="name" innerRadius={58} outerRadius={82} paddingAngle={3}>
                      {membershipPlans.map((p) => (
                        <Cell key={p.name} fill={p.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`${v} members`, ""]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {membershipPlans.map((p) => (
                <div key={p.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-slate-600 dark:text-white/60">{p.name}</span>
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-white/80">{p.members}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={0.15}>
          <SectionCard
            title="Upcoming renewals"
            description="Next 7 days"
            action={
              <button onClick={() => onNavigate("members")} className="flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-amber-600">
                View all <ArrowRight className="h-3 w-3" />
              </button>
            }
            noPadding
          >
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              {upcomingRenewals.map((r) => (
                <div key={r.name} className="flex items-center justify-between gap-3 px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar initials={r.name.split(" ").map((n) => n[0]).join("")} />
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-white/80">{r.name}</p>
                      <p className="text-xs text-slate-400 dark:text-white/35">{r.plan} · ${r.amount}/mo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 dark:text-white/35">{new Date(r.renewalDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <Pill tone={statusTone[r.status]}>{r.status.replace("-", " ")}</Pill>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.2}>
          <SectionCard title="Quick stats">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/50">
                  <UserPlus className="h-4 w-4 text-emerald-500" /> New this month
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">{ownerKpis.newMembersThisMonth}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/50">
                  <TrendingUp className="h-4 w-4 text-sky-500" /> Utilization rate
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">{ownerKpis.utilizationRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/50">
                  <Footprints className="h-4 w-4 text-amber-500" /> Avg visits / week
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">{ownerKpis.avgVisitsPerWeek}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/50">
                  <DollarSign className="h-4 w-4 text-rose-500" /> Outstanding payments
                </div>
                <span className="font-semibold text-slate-800 dark:text-white">${ownerKpis.outstandingPayments.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-400/20 dark:bg-amber-400/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
                <AlertTriangle className="h-3.5 w-3.5" /> Equipment alerts ({equipmentAlerts.length})
              </div>
              <ul className="mt-2 space-y-1 text-xs text-amber-700/80 dark:text-amber-200/70">
                {equipmentAlerts.slice(0, 2).map((a) => (
                  <li key={a.equipment}>• {a.equipment} — {a.issue}</li>
                ))}
              </ul>
            </div>
          </SectionCard>
        </Reveal>
      </div>
    </div>
  );
}
