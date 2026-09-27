import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { DollarSign, TrendingUp, AlertCircle, Receipt } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionCard, StatCard, Pill } from "@/components/dashboard/Widgets";
import { revenueTrend, expenseBreakdown, recentTransactions, ownerKpis } from "@/lib/mockData";

const totalExpenses = expenseBreakdown.reduce((sum, e) => sum + e.amount, 0);
const latestMonth = revenueTrend[revenueTrend.length - 1];
const netProfit = latestMonth.revenue - latestMonth.expenses;

export function OwnerFinance() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={DollarSign} label="Revenue (this month)" value={`$${latestMonth.revenue.toLocaleString()}`} trend="up" trendLabel="+2.9%" iconClass="bg-emerald-400/10 text-emerald-500" />
          <StatCard icon={Receipt} label="Expenses (this month)" value={`$${latestMonth.expenses.toLocaleString()}`} trend="up" trendLabel="+1.7%" iconClass="bg-rose-400/10 text-rose-500" />
          <StatCard icon={TrendingUp} label="Net profit" value={`$${netProfit.toLocaleString()}`} trend="up" trendLabel="32% margin" iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={AlertCircle} label="Outstanding payments" value={`$${ownerKpis.outstandingPayments.toLocaleString()}`} trend="down" trendLabel="12 invoices" iconClass="bg-amber-400/10 text-amber-500" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={0.05}>
          <SectionCard title="Revenue & expenses" description="Monthly comparison, last 12 months">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueTrend} barGap={4}>
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tickFormatter={(v) => `$${v / 1000}k`} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} width={46} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`$${Number(v).toLocaleString()}`, ""]} />
                  <Bar dataKey="revenue" fill="#f97316" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="expenses" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionCard title="Expense breakdown" description={`$${totalExpenses.toLocaleString()} total / mo`}>
            <div className="flex items-center justify-center">
              <div className="h-44 w-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={expenseBreakdown} dataKey="amount" nameKey="category" innerRadius={50} outerRadius={75} paddingAngle={2}>
                      {expenseBreakdown.map((e) => (
                        <Cell key={e.category} fill={e.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} formatter={(v) => [`$${Number(v).toLocaleString()}`, ""]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              {expenseBreakdown.map((e) => (
                <div key={e.category} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: e.color }} />
                    <span className="text-slate-600 dark:text-white/55">{e.category}</span>
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-white/75">${e.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <SectionCard title="Recent transactions" noPadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400 dark:border-white/10 dark:text-white/35">
                  <th className="px-5 py-3 font-medium">Transaction</th>
                  <th className="px-5 py-3 font-medium">Member</th>
                  <th className="px-5 py-3 font-medium">Type</th>
                  <th className="px-5 py-3 font-medium">Amount</th>
                  <th className="px-5 py-3 font-medium">Method</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((t) => (
                  <tr key={t.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 dark:border-white/5 dark:hover:bg-white/[0.02]">
                    <td className="px-5 py-3.5 font-medium text-slate-500 dark:text-white/45">{t.id}</td>
                    <td className="px-5 py-3.5 text-slate-700 dark:text-white/80">{t.member}</td>
                    <td className="px-5 py-3.5">
                      <Pill tone="info">{t.type}</Pill>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-slate-800 dark:text-white">${t.amount}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{t.method}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </Reveal>
    </div>
  );
}
