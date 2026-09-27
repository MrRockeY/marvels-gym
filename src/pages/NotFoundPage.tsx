import { Link } from "react-router-dom";
import { Dumbbell, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="animate-blob absolute -left-24 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="animate-blob animation-delay-2000 absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
      <div className="relative">
        <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg shadow-orange-500/30">
          <Dumbbell className="h-8 w-8 text-white" />
        </span>
        <h1 className="font-display text-7xl font-bold text-white">404</h1>
        <p className="mt-3 text-lg font-medium text-white/70">Looks like you skipped leg day on this route.</p>
        <p className="mt-1 text-sm text-white/40">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
