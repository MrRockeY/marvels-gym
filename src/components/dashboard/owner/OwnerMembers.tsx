import { useMemo, useState } from "react";
import { Search, Filter, UserPlus, Users, UserCheck, UserX, PauseCircle } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionCard, Pill, Avatar, StatCard } from "@/components/dashboard/Widgets";
import { memberDirectory, ownerKpis } from "@/lib/mockData";
import { cn } from "@/utils/cn";

const statusTone: Record<string, "success" | "warning" | "danger"> = {
  active: "success",
  "at-risk": "warning",
  paused: "danger",
};

const filters = ["all", "active", "at-risk", "paused"] as const;

export function OwnerMembers() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const filtered = useMemo(() => {
    return memberDirectory.filter((m) => {
      const matchesQuery = m.name.toLowerCase().includes(query.toLowerCase()) || m.id.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "all" || m.status === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Users} label="Total members" value={ownerKpis.totalMembers.toLocaleString()} iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={UserCheck} label="Active" value={ownerKpis.activeMembers.toLocaleString()} iconClass="bg-emerald-400/10 text-emerald-500" />
          <StatCard icon={UserPlus} label="New this month" value={ownerKpis.newMembersThisMonth.toString()} iconClass="bg-amber-400/10 text-amber-500" />
          <StatCard icon={UserX} label="At risk / paused" value="212" iconClass="bg-rose-400/10 text-rose-500" />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <SectionCard
          title="Member directory"
          description={`${filtered.length} of ${memberDirectory.length} shown`}
          action={
            <button className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 dark:bg-white/10 dark:hover:bg-white/20">
              <UserPlus className="h-3.5 w-3.5" /> Add member
            </button>
          }
          noPadding
        >
          <div className="flex flex-col gap-3 border-b border-slate-100 p-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or ID..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <Filter className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition",
                    filter === f ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-white/50 dark:hover:bg-white/10"
                  )}
                >
                  {f.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400 dark:border-white/10 dark:text-white/35">
                  <th className="px-5 py-3 font-medium">Member</th>
                  <th className="px-5 py-3 font-medium">Plan</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Joined</th>
                  <th className="px-5 py-3 font-medium">Last visit</th>
                  <th className="px-5 py-3 font-medium">Check-ins</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-sm text-slate-400 dark:text-white/35">
                      No members match your search.
                    </td>
                  </tr>
                )}
                {filtered.map((m) => (
                  <tr key={m.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 dark:border-white/5 dark:hover:bg-white/[0.02]">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar initials={m.name.split(" ").map((n) => n[0]).join("")} />
                        <div>
                          <p className="font-medium text-slate-700 dark:text-white/85">{m.name}</p>
                          <p className="text-xs text-slate-400 dark:text-white/35">{m.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{m.plan}</td>
                    <td className="px-5 py-3.5">
                      <Pill tone={statusTone[m.status]}>{m.status.replace("-", " ")}</Pill>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{new Date(m.joined).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{m.lastVisit}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{m.checkins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionCard title="Retention watch" description="Members trending towards churn">
          <div className="flex items-center gap-4 rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-400/20 dark:bg-rose-400/5">
            <PauseCircle className="h-8 w-8 flex-shrink-0 text-rose-500" />
            <div>
              <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">2 members haven't checked in for 9+ days</p>
              <p className="text-xs text-rose-600/70 dark:text-rose-300/60">Consider sending a re-engagement message or personal check-in call.</p>
            </div>
          </div>
        </SectionCard>
      </Reveal>
    </div>
  );
}
