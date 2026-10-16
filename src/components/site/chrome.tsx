import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react";
import { business, img, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/packages", label: "Tour Packages" },
  { to: "/destinations", label: "Destinations" },
  { to: "/camping", label: "Camping" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = !overlay || scrolled || open;
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "border-b border-border bg-background/95 text-foreground backdrop-blur" : "text-ivory",
      )}
    >
      <div className="container-x grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={img.logo} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover md:h-12 md:w-12" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-extrabold tracking-tight">DESIAVALLY</span>
            <span className={cn("block truncate text-[0.65rem] tracking-[0.18em] uppercase", solid ? "text-muted-foreground" : "text-ivory/75")}>
              Koraput · Odisha
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium opacity-85 transition-opacity hover:opacity-100" activeProps={{ className: "opacity-100 underline underline-offset-8 decoration-gold decoration-2" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-deep transition-transform hover:-translate-y-0.5">
            Plan Your Trip
          </Link>
        </nav>
        <button className="grid h-11 w-11 place-items-center lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 border-t border-border bg-background pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-xl font-semibold">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-primary py-3.5 text-center font-semibold text-primary-foreground">
            Plan Your Trip
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep pb-28 pt-20 text-ivory lg:pb-12">
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={img.logo} alt="Desiavally logo" className="h-14 w-14 rounded-full" loading="lazy" />
            <div>
              <p className="font-display text-xl font-extrabold">DESIAVALLY</p>
              <p className="text-sm text-ivory/70">{business.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm font-serif text-2xl italic leading-snug text-ivory/90">{business.secondary}.</p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-ivory/80">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-ivory">{n.label}</Link></li>
            ))}
            <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Reach us</p>
          <ul className="mt-5 space-y-4 text-ivory/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{business.address}</li>
            <li><a href={`tel:${business.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-ivory"><Phone className="h-4 w-4 text-gold" />{business.phone}</a></li>
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-ivory"><MessageCircle className="h-4 w-4 text-gold" />WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-16 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {business.legalName}</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-ivory">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-ivory">Terms & Cancellation</Link>
        </div>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <>
      <a
        href={waLink("Hi Desiavally, I'd like to plan a trip to Koraput.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-emerald text-ivory shadow-soft transition-transform hover:scale-105 lg:grid"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[auto_auto_1fr] gap-2 border-t border-border bg-background/95 px-3 pt-3 backdrop-blur lg:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a href={`tel:${business.phone.replace(/\s/g, "")}`} aria-label="Call" className="grid h-12 w-12 place-items-center rounded-full border border-border text-forest">
          <Phone className="h-5 w-5" />
        </a>
        <a href={waLink("Hi Desiavally, I'd like to plan a trip to Koraput.")} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-emerald text-ivory">
          <MessageCircle className="h-5 w-5" />
        </a>
        <Link to="/contact" className="grid h-12 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
          Request a Quote
        </Link>
      </div>
    </>
  );
}

export function PageHeader({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro?: string; image?: string }) {
  if (image) {
    return (
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-forest-deep text-ivory">
        <img src={image} alt="" className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative pb-14 pt-32 md:pb-20">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl animate-rise text-4xl font-extrabold leading-[1.02] md:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-lg text-ivory/85">{intro}</p>}
        </div>
      </section>
    );
  }
  return (
    <section className="bg-sand pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="container-x">
        <p className="eyebrow text-emerald">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl animate-rise text-4xl font-extrabold leading-[1.02] text-forest-deep md:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function DestinationImage({ src, name, className }: { src: string | null; name: string; className?: string }) {
  if (src) return <img src={src} alt={name} loading="lazy" className={cn("h-full w-full object-cover", className)} />;
  return (
    <div className={cn("flex h-full w-full flex-col justify-between bg-forest p-6 text-ivory", className)}>
      <span className="eyebrow text-gold">Photo coming soon</span>
      <span className="font-serif text-4xl italic leading-none">{name}</span>
    </div>
  );
}
