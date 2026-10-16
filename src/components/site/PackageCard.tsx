import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import type { TourPackage } from "@/lib/site";

export function PackageCard({ p, index }: { p: TourPackage; index: number }) {
  return (
    <Link
      to="/packages/$slug"
      params={{ slug: p.slug }}
      className="group grid overflow-hidden rounded-2xl bg-card shadow-soft md:grid-cols-[1.1fr_1fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-display text-xs font-bold text-forest">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-col p-6 md:p-10">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-emerald" />{p.duration}</span>
          <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-emerald" />{p.groupSize}</span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-forest-deep md:text-4xl">{p.name}</h3>
        <p className="mt-3 text-muted-foreground">{p.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.highlights.slice(0, 5).map((h) => (
            <li key={h} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest">{h}</li>
          ))}
          {p.highlights.length > 5 && <li className="px-1 py-1 text-xs text-muted-foreground">+{p.highlights.length - 5} more</li>}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <div>
            <p className="font-display text-2xl font-extrabold text-forest">{p.priceLabel}</p>
            <p className="text-sm text-muted-foreground">{p.priceNote}</p>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-forest-deep transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
