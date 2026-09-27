import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Flame, TrendingUp } from "lucide-react";
import { GlowOrbs } from "@/components/shared/Ui";
import { gymInfo } from "@/lib/mockData";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 pb-24 pt-40 sm:pb-32 sm:pt-48">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <GlowOrbs />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur"
          >
            <span className="flex -space-x-1.5">
              {["from-amber-400 to-orange-500", "from-sky-400 to-indigo-500", "from-emerald-400 to-teal-500"].map((g, i) => (
                <span key={i} className={`h-5 w-5 rounded-full border-2 border-slate-950 bg-gradient-to-br ${g}`} />
              ))}
            </span>
            <span className="text-xs font-medium text-white/70">
              Rated {gymInfo.rating} / 5 from {gymInfo.reviews.toLocaleString()} members
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Train with purpose.
            <br />
            <span className="text-gradient">Forge results</span> that last.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-white/60"
          >
            Premium strength &amp; conditioning coaching, personalised nutrition, and a
            member app that tracks every rep — all in one Brooklyn gym built for people
            who take progress seriously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/login"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-orange-500/30 transition hover:-translate-y-0.5 hover:shadow-orange-500/50"
            >
              Claim Your Free Week
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="#app"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <Play className="h-3 w-3 fill-white text-white" />
              </span>
              See the member app
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              ["12k+", "Members trained"],
              ["3", "Brooklyn locations"],
              ["4.9★", "Average rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/45">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-2 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-900 via-slate-950 to-black">
              <div className="relative flex h-[30rem] flex-col justify-end overflow-hidden p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.35),transparent_55%)]" />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative z-10 flex flex-1 flex-col justify-center gap-4">
                  <div className="animate-float flex items-center gap-3 self-start rounded-2xl glass px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                      <Flame className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs text-white/50">Current streak</div>
                      <div className="text-sm font-semibold text-white">14 days 🔥</div>
                    </div>
                  </div>
                  <div className="animate-float [animation-delay:1.2s] ml-auto flex items-center gap-3 self-end rounded-2xl glass px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs text-white/50">Bench press PR</div>
                      <div className="text-sm font-semibold text-white">200 lb (+35)</div>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 rounded-2xl glass p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/45">Membership status</div>
                      <div className="mt-1 text-lg font-semibold text-white">Elite Performance</div>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-white/45">
                    <span>21 days remaining</span>
                    <span>Renews Apr 18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 flex items-center gap-2 rounded-2xl glass px-4 py-3 shadow-xl">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-white">4.9/5 rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
