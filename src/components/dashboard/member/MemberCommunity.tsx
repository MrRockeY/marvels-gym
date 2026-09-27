import { Trophy, TrendingUp, TrendingDown, Minus, Flame } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionCard, Avatar, Pill } from "@/components/dashboard/Widgets";
import { leaderboard, memberStreak, generateAttendanceHeatmap } from "@/lib/mockData";
import { cn } from "@/utils/cn";

const heatmap = generateAttendanceHeatmap(18);
const intensityColor = ["bg-slate-100 dark:bg-white/5", "bg-amber-200 dark:bg-amber-900/50", "bg-amber-400 dark:bg-amber-600", "bg-orange-500 dark:bg-orange-500"];
const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

const trendIcon = { up: TrendingUp, down: TrendingDown, same: Minus };

export function MemberCommunity() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <Flame className="mx-auto h-6 w-6 text-orange-500" />
            <p className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">{memberStreak.currentStreak}</p>
            <p className="text-xs text-slate-500 dark:text-white/40">Current streak (days)</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <Trophy className="mx-auto h-6 w-6 text-amber-500" />
            <p className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">{memberStreak.longestStreak}</p>
            <p className="text-xs text-slate-500 dark:text-white/40">Longest streak (days)</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <Trophy className="mx-auto h-6 w-6 text-sky-500" />
            <p className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">#4</p>
            <p className="text-xs text-slate-500 dark:text-white/40">Rank of 240 members</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <SectionCard title="Check-in history" description="Last 18 weeks of activity">
          <div className="flex gap-1.5 overflow-x-auto pb-2">
            {heatmap.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1.5">
                {week.map((val, di) => (
                  <div
                    key={di}
                    title={`${dayLabels[di]} — ${val === 0 ? "No check-in" : "Checked in"}`}
                    className={cn("h-3.5 w-3.5 rounded-[4px]", intensityColor[val])}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 dark:text-white/35">
            <span>Less</span>
            {intensityColor.map((c, i) => (
              <div key={i} className={cn("h-3 w-3 rounded-[3px]", c)} />
            ))}
            <span>More</span>
          </div>
        </SectionCard>
      </Reveal>

      <Reveal delay={0.1}>
        <SectionCard title="Monthly leaderboard" description="Ranked by consistency points (check-ins, streaks & PRs)">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400 dark:border-white/10 dark:text-white/35">
                  <th className="pb-3 pr-4 font-medium">Rank</th>
                  <th className="pb-3 pr-4 font-medium">Member</th>
                  <th className="pb-3 pr-4 font-medium">Points</th>
                  <th className="pb-3 pr-4 font-medium">Streak</th>
                  <th className="pb-3 pr-4 font-medium">Check-ins</th>
                  <th className="pb-3 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((m) => {
                  const TrendIcon = trendIcon[m.trend as keyof typeof trendIcon];
                  return (
                    <tr
                      key={m.name}
                      className={cn(
                        "border-b border-slate-50 last:border-0 dark:border-white/5",
                        m.isCurrentUser && "bg-amber-400/5"
                      )}
                    >
                      <td className="py-3 pr-4">
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
                            m.rank <= 3 ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white" : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-white/50"
                          )}
                        >
                          {m.rank}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2.5">
                          <Avatar initials={m.initials} />
                          <span className="font-medium text-slate-700 dark:text-white/80">
                            {m.name} {m.isCurrentUser && <Pill tone="warning">You</Pill>}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 pr-4 font-semibold text-slate-700 dark:text-white/80">{m.points.toLocaleString()}</td>
                      <td className="py-3 pr-4 text-slate-500 dark:text-white/50">{m.streak}d</td>
                      <td className="py-3 pr-4 text-slate-500 dark:text-white/50">{m.checkins}</td>
                      <td className="py-3">
                        <TrendIcon
                          className={cn(
                            "h-4 w-4",
                            m.trend === "up" ? "text-emerald-500" : m.trend === "down" ? "text-rose-500" : "text-slate-400"
                          )}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </Reveal>
    </div>
  );
}
