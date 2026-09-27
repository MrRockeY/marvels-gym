import { Dumbbell, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/shared/Ui";
import { gymInfo } from "@/lib/mockData";

const columns = [
  {
    title: "Programs",
    links: ["Strength & Hypertrophy", "HIIT Conditioning", "Functional Athlete", "Private Coaching", "Nutrition Coaching"],
  },
  {
    title: "Gym",
    links: ["About Forge", "Our Coaches", "Locations", "Careers", "Press Kit"],
  },
  {
    title: "Resources",
    links: ["Member App", "Blog & Guides", "Success Stories", "Referral Program", "Gift Memberships"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600">
                <Dumbbell className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                FORGE <span className="text-amber-400">FITNESS</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Premium strength &amp; conditioning gym in Brooklyn, NY. Expert coaching, real
              nutrition guidance, and a members app that keeps you accountable.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/60">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400" /> {gymInfo.address}
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400" /> {gymInfo.phone}
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400" /> {gymInfo.email}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-400" /> Mon–Fri {gymInfo.hoursWeekday} · Sat–Sun {gymInfo.hoursWeekend}
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-white/50 transition hover:text-amber-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Forge Fitness Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-white/70">
              Terms of Service
            </a>
            <a href="#top" className="hover:text-white/70">
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
