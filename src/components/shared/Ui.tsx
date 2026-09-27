import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-5 font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-slate-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-balance text-base leading-relaxed sm:text-lg", light ? "text-white/60" : "text-slate-500 dark:text-white/60")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function GlowOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="animate-blob absolute -left-24 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="animate-blob animation-delay-2000 absolute right-0 top-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
      <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
    </div>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", className)}>{children}</span>
  );
}

export function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</span>
      <span className="mt-1 text-xs uppercase tracking-wide text-white/50">{label}</span>
    </div>
  );
}
