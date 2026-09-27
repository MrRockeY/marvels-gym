import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  trendLabel,
  iconClass,
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: "up" | "down";
  trendLabel?: string;
  iconClass?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="flex items-start justify-between">
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", iconClass ?? "bg-amber-400/10 text-amber-500")}>
          <Icon className="h-5 w-5" />
        </span>
        {trend && trendLabel && (
          <span
            className={cn(
              "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold",
              trend === "up" ? "bg-emerald-400/10 text-emerald-500" : "bg-rose-400/10 text-rose-500"
            )}
          >
            {trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {trendLabel}
          </span>
        )}
      </div>
      <p className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-500 dark:text-white/45">{label}</p>
    </motion.div>
  );
}

export function SectionCard({
  title,
  description,
  action,
  className,
  children,
  noPadding,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
  noPadding?: boolean;
}) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]", className)}>
      {(title || action) && (
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5 dark:border-white/10">
          <div>
            {title && <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{title}</h3>}
            {description && <p className="mt-0.5 text-xs text-slate-500 dark:text-white/40">{description}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={noPadding ? "" : "p-6"}>{children}</div>
    </div>
  );
}

export function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" | "info" }) {
  const tones: Record<string, string> = {
    neutral: "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-white/60",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
    danger: "bg-rose-100 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300",
    info: "bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300",
  };
  return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold", tones[tone])}>{children}</span>;
}

export function EmptyState({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200 py-14 text-center dark:border-white/10">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-white/30">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-white/70">{title}</p>
        <p className="mt-1 max-w-xs text-xs text-slate-400 dark:text-white/35">{description}</p>
      </div>
    </div>
  );
}

export function ProgressBar({ value, className, barClassName }: { value: number; className?: string; barClassName?: string }) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500", barClassName)}
      />
    </div>
  );
}

export function RadialProgress({
  value,
  size = 120,
  stroke = 10,
  label,
  sublabel,
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  sublabel?: string;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, value) / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-slate-100 dark:text-white/10" />
        <defs>
          <linearGradient id="radial-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#radial-gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        {label && <span className="font-display text-xl font-bold text-slate-900 dark:text-white">{label}</span>}
        {sublabel && <span className="text-[10px] uppercase tracking-wide text-slate-400 dark:text-white/40">{sublabel}</span>}
      </div>
    </div>
  );
}

export function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-xs font-bold text-white",
        className
      )}
    >
      {initials}
    </span>
  );
}
