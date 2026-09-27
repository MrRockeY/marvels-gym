import { Flame, Dumbbell, Trophy, Footprints, CalendarClock, ArrowRight, Sparkles } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Reveal } from "@/components/shared/Reveal";
import { StatCard, SectionCard, RadialProgress, Pill, Avatar } from "@/components/dashboard/Widgets";
import {
  currentMember,
  memberStreak,
  workoutSchedule,
  weeklyActivityMinutes,
  leaderboard,
  badges,
} from "@/lib/mockData";

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
const todaysSchedule = workoutSchedule.find((d) => d.day === today) ?? workoutSchedule[0];
const percentRemaining = Math.round((currentMember.daysRemaining / currentMember.totalPlanDays) * 100);

export function MemberOverview({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 text-white shadow-lg dark:border-white/10 sm:p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white/50">Welcome back,</p>
              <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{currentMember.name.split(" ")[0]} 👋</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                You're on a <span className="font-semibold text-amber-300">{memberStreak.currentStreak}-day streak</span> — keep it up! Your
                next session is {todaysSchedule.sessions.length ? `today at ${todaysSchedule.sessions[0].time}` : "not scheduled today, take a rest day"}.
              </p>
              <button
                onClick={() => onNavigate("schedule")}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:shadow-orange-500/40"
              >
                View full schedule
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
            <div className="flex items-center gap-6 rounded-2xl bg-white/5 p-6">
              <RadialProgress value={percentRemaining} label={`${currentMember.daysRemaining}`} sublabel="days left" />
              <div>
                <Pill tone="success">● {currentMember.status === "active" ? "Active" : "Inactive"}</Pill>
                <p className="mt-3 font-display text-lg font-semibold">{currentMember.plan}</p>
                <p className="mt-1 text-xs text-white/45">Renews {new Date(currentMember.renewalDate).toLocaleDateString("en-US", { month: "long", day: "numeric" })}</p>
                <p className="text-xs text-white/45">${currentMember.monthlyFee}/mo · {currentMember.paymentStatus === "paid" ? "Paid" : "Due"}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Flame} label="Current streak" value={`${memberStreak.currentStreak} days`} trend="up" trendLabel="+3 vs last wk" iconClass="bg-orange-400/10 text-orange-500" />
          <StatCard icon={Dumbbell} label="Workouts this month" value={`${memberStreak.workoutsThisMonth}/${memberStreak.workoutsGoal}`} trend="up" trendLabel="On track" iconClass="bg-sky-400/10 text-sky-500" />
          <StatCard icon={Trophy} label="Leaderboard rank" value="#4 of 240" trend="up" trendLabel="+2 spots" iconClass="bg-amber-400/10 text-amber-500" />
          <StatCard icon={Footprints} label="Total check-ins" value={memberStreak.totalCheckIns.toString()} trend="up" trendLabel="All-time" iconClass="bg-emerald-400/10 text-emerald-500" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={0.1}>
          <SectionCard title="Weekly activity" description="Minutes trained per day, this week">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivityMinutes} barCategoryGap="28%">
                  <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="currentColor" className="text-slate-100 dark:text-white/5" />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                  <Tooltip
                    cursor={{ fill: "rgba(249,115,22,0.06)" }}
                    contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }}
                    formatter={(v) => [`${v} min`, "Trained"]}
                  />
                  <Bar dataKey="minutes" radius={[8, 8, 8, 8]} fill="url(#barGradient)" />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionCard title="Today" description={today} action={<CalendarClock className="h-4 w-4 text-slate-400" />}>
            {todaysSchedule.sessions.length ? (
              <div className="space-y-3">
                {todaysSchedule.sessions.map((s) => (
                  <div key={s.name} className="rounded-xl border border-slate-100 p-4 dark:border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">{s.type}</p>
                    <p className="mt-1 font-display text-base font-semibold text-slate-900 dark:text-white">{s.name}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-white/40">
                      {s.time} · {s.duration} min · {s.trainer}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
                <Sparkles className="h-8 w-8 text-amber-400" />
                <p className="text-sm font-medium text-slate-600 dark:text-white/70">Rest day — recover well!</p>
                <p className="text-xs text-slate-400 dark:text-white/35">No sessions scheduled today.</p>
              </div>
            )}
          </SectionCard>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={0.2}>
          <SectionCard
            title="Leaderboard snapshot"
            description="Top members this month"
            action={
              <button onClick={() => onNavigate("community")} className="text-xs font-semibold text-amber-500 hover:text-amber-600">
                View all →
              </button>
            }
          >
            <div className="space-y-2">
              {leaderboard.slice(0, 5).map((m) => (
                <div
                  key={m.name}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${
                    m.isCurrentUser ? "bg-amber-400/10 ring-1 ring-amber-400/30" : "hover:bg-slate-50 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 dark:bg-white/10 dark:text-white/60">
                      {m.rank}
                    </span>
                    <Avatar initials={m.initials} />
                    <span className="text-sm font-medium text-slate-700 dark:text-white/80">
                      {m.name} {m.isCurrentUser && <span className="text-amber-500">(you)</span>}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 dark:text-white/50">{m.points.toLocaleString()} pts</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </Reveal>

        <Reveal delay={0.25}>
          <SectionCard title="Achievements" description="Badges earned">
            <div className="grid grid-cols-3 gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-3 text-center ${
                    b.earned ? "border-amber-400/30 bg-amber-400/5" : "border-slate-100 opacity-40 dark:border-white/10"
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                    <Trophy className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-medium leading-tight text-slate-600 dark:text-white/60">{b.label}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </Reveal>
      </div>
    </div>
  );
}
