import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Ui";
import { Reveal } from "@/components/shared/Reveal";
import { gymInfo } from "@/lib/mockData";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your first week is on us. Let's forge something stronger.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-white/85">
                Walk in, meet a coach, and try a class — completely free. No pressure, no contracts.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/login"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-orange-600 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Claim Your Free Week
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${gymInfo.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {gymInfo.phone}
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/75">
                <MapPin className="h-4 w-4" />
                {gymInfo.address}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
