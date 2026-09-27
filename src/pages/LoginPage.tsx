import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Mail, Lock, ArrowRight, ShieldCheck, Crown, User, Eye, EyeOff, Star } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/utils/cn";
import { gymInfo } from "@/lib/mockData";

type RoleTab = "member" | "owner";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState<RoleTab>("member");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const demoCreds: Record<RoleTab, { email: string; password: string }> = {
    member: { email: "jordan.reyes@email.com", password: "demo-member" },
    owner: { email: "alex.morgan@forgefitnessclub.com", password: "demo-owner" },
  };

  const handleTabChange = (tab: RoleTab) => {
    setRole(tab);
    setEmail("");
    setPassword("");
  };

  const performLogin = (tab: RoleTab) => {
    setLoading(true);
    window.setTimeout(() => {
      login(tab);
      navigate(tab === "owner" ? "/dashboard/owner" : "/dashboard/member");
    }, 550);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    performLogin(role);
  };

  const handleDemoLogin = (tab: RoleTab) => {
    setRole(tab);
    setEmail(demoCreds[tab].email);
    setPassword(demoCreds[tab].password);
    performLogin(tab);
  };

  return (
    <div className="relative flex min-h-screen bg-slate-950">
      {/* Left branding panel */}
      <div className="relative hidden w-[46%] flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black p-12 lg:flex">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="animate-blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute bottom-10 right-0 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl" />

        <a href="/#top" className="relative z-10 flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg shadow-orange-500/30">
            <Dumbbell className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            FORGE <span className="text-amber-400">FITNESS</span>
          </span>
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-md"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="mt-5 text-balance font-display text-2xl font-medium leading-snug text-white">
            "The dashboard alone is worth it — I can see my whole gym's health at a glance every morning."
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-sm font-bold text-white">
              AM
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Alex Morgan</p>
              <p className="text-xs text-white/50">Founder, {gymInfo.name}</p>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {[
            ["12k+", "Members"],
            ["3", "Locations"],
            ["4.9★", "Rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-white">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div className="relative flex w-full flex-1 items-center justify-center overflow-y-auto px-6 py-16 sm:px-10">
        <div className="absolute inset-0 bg-grid opacity-[0.04] lg:hidden" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600">
              <Dumbbell className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              FORGE <span className="text-amber-400">FITNESS</span>
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-white/50">Sign in to your Forge Fitness dashboard.</p>

          <div className="mt-8 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5">
            {(
              [
                { key: "member", label: "Gym Member", icon: User },
                { key: "owner", label: "Gym Owner", icon: Crown },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={cn(
                  "relative flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                  role === tab.key ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-lg" : "text-white/60 hover:text-white"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/40">Email address</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={demoCreds[role].email}
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/25 outline-none ring-amber-400/50 transition focus:border-amber-400/50 focus:ring-2"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-xs font-medium uppercase tracking-wide text-white/40">Password</label>
                <a href="#reset" className="text-xs font-medium text-amber-400 hover:text-amber-300">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-10 text-sm text-white placeholder:text-white/25 outline-none ring-amber-400/50 transition focus:border-amber-400/50 focus:ring-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40 disabled:opacity-60"
            >
              {loading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
              ) : (
                <>
                  Sign in as {role === "owner" ? "Gym Owner" : "Gym Member"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-wide text-white/30">Or try instantly</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => handleDemoLogin("member")}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                <User className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Demo Member</p>
                <p className="text-xs text-white/40">Jordan Reyes</p>
              </div>
            </button>
            <button
              onClick={() => handleDemoLogin("owner")}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
                <Crown className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Demo Owner</p>
                <p className="text-xs text-white/40">Alex Morgan</p>
              </div>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/35">
            <ShieldCheck className="h-3.5 w-3.5" />
            This is a demo environment. No real authentication or data is used.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
