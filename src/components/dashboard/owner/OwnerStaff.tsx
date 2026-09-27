import { Users, DollarSign, Star, Clock } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionCard, StatCard, Avatar, Pill } from "@/components/dashboard/Widgets";
import { staffList, classAttendanceStats } from "@/lib/mockData";

const totalStaffCost = staffList.reduce((sum, s) => sum + s.salary, 0);
const avgRating = (staffList.reduce((sum, s) => sum + s.rating, 0) / staffList.length).toFixed(2);

export function OwnerStaff() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Users} label="Team members" value={staffList.length.toString()} iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={DollarSign} label="Monthly staff cost" value={`$${totalStaffCost.toLocaleString()}`} iconClass="bg-rose-400/10 text-rose-500" />
          <StatCard icon={Star} label="Avg. coach rating" value={avgRating} iconClass="bg-amber-400/10 text-amber-500" />
          <StatCard icon={Clock} label="Classes taught / wk" value={staffList.reduce((s, x) => s + x.classesPerWeek, 0).toString()} iconClass="bg-emerald-400/10 text-emerald-500" />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <SectionCard title="Staff directory" description="Salaries, shifts and performance" noPadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400 dark:border-white/10 dark:text-white/35">
                  <th className="px-5 py-3 font-medium">Staff</th>
                  <th className="px-5 py-3 font-medium">Role</th>
                  <th className="px-5 py-3 font-medium">Shift</th>
                  <th className="px-5 py-3 font-medium">Salary</th>
                  <th className="px-5 py-3 font-medium">Rating</th>
                  <th className="px-5 py-3 font-medium">Classes/wk</th>
                  <th className="px-5 py-3 font-medium">Tenure</th>
                </tr>
              </thead>
              <tbody>
                {staffList.map((s) => (
                  <tr key={s.name} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 dark:border-white/5 dark:hover:bg-white/[0.02]">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar initials={s.name.split(" ").map((n) => n[0]).join("")} />
                        <span className="font-medium text-slate-700 dark:text-white/85">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{s.role}</td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{s.shift}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-700 dark:text-white/80">${s.salary.toLocaleString()}</td>
                    <td className="px-5 py-3.5">
                      <span className="flex items-center gap-1 text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {s.rating}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-white/55">{s.classesPerWeek || "—"}</td>
                    <td className="px-5 py-3.5">
                      <Pill>{s.tenure}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionCard title="Top performing coaches" description="By class attendance & satisfaction">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {classAttendanceStats.map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">{c.name}</p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-500 dark:text-white/45">
                  <div className="flex justify-between">
                    <span>Classes taught</span>
                    <span className="font-semibold text-slate-700 dark:text-white/75">{c.classesTaught}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg attendance</span>
                    <span className="font-semibold text-slate-700 dark:text-white/75">{c.avgAttendance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating</span>
                    <span className="font-semibold text-amber-500">{c.rating} ★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </Reveal>
    </div>
  );
}
