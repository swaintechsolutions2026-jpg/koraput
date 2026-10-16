import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MapPin, Mountain, Tent, Users, Compass, Camera, Leaf } from "lucide-react";
import { business, destinations, faqs, gallery, img, packages, waLink } from "@/lib/site";
import { PackageCard } from "@/components/site/PackageCard";
import { DestinationImage } from "@/components/site/chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koraput Tour Packages & Araku Valley Tours | Desiavally" },
      { name: "description", content: "Discover the unseen Koraput — misty Deomali, Duduma waterfall, Araku Valley and hilltop camping. Group tours from Koraput, Odisha." },
      { property: "og:title", content: "Discover the Unseen Koraput | Desiavally" },
      { property: "og:description", content: "Group tours, hilltop camping and nature journeys through Koraput and Araku Valley." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep text-ivory">
        <img src={img.deomali} alt="Misty green ridge of Deomali with clouds rolling below" className="absolute inset-0 h-full w-full animate-slow-zoom object-cover object-[60%_center]" fetchPriority="high" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative pb-24 pt-32 md:pb-28">
          <p className="flex animate-rise items-center gap-2 text-sm text-ivory/85">
            <MapPin className="h-4 w-4 text-gold" /> Koraput, Odisha
          </p>
          <h1 className="mt-5 max-w-5xl animate-rise text-[2.75rem] font-extrabold leading-[0.95] sm:text-6xl md:text-8xl">
            Discover the <span className="font-serif font-normal italic text-gold">unseen</span> Koraput
          </h1>
          <p className="mt-6 max-w-lg animate-rise text-base text-ivory/85 md:text-lg" style={{ animationDelay: ".15s" }}>
            Explore beyond the ordinary. From misty mountains to hidden waterfalls, discover extraordinary journeys through Koraput and Araku Valley.
          </p>
          <div className="mt-8 flex animate-rise flex-col gap-3 sm:flex-row" style={{ animationDelay: ".3s" }}>
            <Link to="/packages" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-forest-deep transition-transform hover:-translate-y-0.5">
              Explore Tour Packages <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-ivory/40 px-7 py-4 font-semibold backdrop-blur-sm transition-colors hover:bg-ivory/10">
              Plan Your Trip
            </Link>
          </div>
          <div className="mt-12 hidden gap-8 text-sm text-ivory/75 md:flex">
            {["Deomali", "Duduma", "Talamali", "Araku Valley"].map((d) => (
              <span key={d} className="border-l border-gold/60 pl-3">{d}</span>
            ))}
          </div>
        </div>
        <a href="#intro" aria-label="Scroll to explore" className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/70 md:flex">
          Scroll <ChevronDown className="h-5 w-5 animate-cue" />
        </a>
      </section>

      {/* INTRO */}
      <section id="intro" className="container-x grid gap-10 py-20 md:grid-cols-[1fr_1.3fr] md:py-32">
        <p className="eyebrow text-emerald">Desiavally Hospitality · Koraput</p>
        <div>
          <p className="font-display text-2xl font-semibold leading-snug text-forest-deep md:text-4xl">
            We're a Koraput-based travel team taking friends and families into the hills, waterfalls and villages we call home.{" "}
            <span className="font-serif font-normal italic text-emerald">{business.tagline}.</span>
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              [MapPin, "Pickup from station or bus stand"],
              [Users, "Small group journeys"],
              [Tent, "Hilltop camping on request"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof MapPin;
              return (
                <div key={t as string} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <I className="h-5 w-5 shrink-0 text-emerald" /> {t as string}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-emerald">Tour packages</p>
              <h2 className="mt-3 text-4xl font-extrabold text-forest-deep md:text-6xl">Journeys, ready to go.</h2>
            </div>
            <Link to="/packages" className="inline-flex items-center gap-2 font-semibold text-forest">
              All packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8">
            {packages.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="container-x py-20 md:py-28">
        <p className="eyebrow text-emerald">Explore the unseen Koraput</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold text-forest-deep md:text-6xl">Hills above the clouds. Water through the forest.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {destinations.slice(0, 5).map((d, i) => (
            <Link
              key={d.slug}
              to="/destinations/$slug"
              params={{ slug: d.slug }}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "aspect-[4/5] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-[4/3]"}`}
            >
              <DestinationImage src={d.image} name={d.name} className="transition-transform duration-700 group-hover:scale-105" />
              {d.image && (
                <>
                  <div className="absolute inset-0 bg-card-overlay" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                    <p className="eyebrow text-gold">{d.kind}</p>
                    <p className={`mt-1 font-display font-extrabold ${i === 0 ? "text-4xl" : "text-2xl"}`}>{d.name}</p>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
        <Link to="/destinations" className="mt-8 inline-flex items-center gap-2 font-semibold text-forest">
          All destinations <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* CAMPING */}
      <section className="relative overflow-hidden bg-forest-deep text-ivory">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[50vh]">
            <img src={img.fields} alt="Green terraced paddy fields under a forested hill" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="container-x py-20 md:px-16 md:py-28">
            <p className="eyebrow text-gold">Camping · Deomali & Talamali</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Sleep under the stars. Wake up above the clouds.</h2>
            <p className="mt-6 text-ivory/80">Tents, bonfire, chairs, lighting and cooking gear — arranged on Koraput's hilltops for your group. Build your setup and get an estimate in seconds.</p>
            <Link to="/camping" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-forest-deep">
              Estimate your camp <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-x py-20 md:py-28">
        <p className="eyebrow text-emerald">Why travel with Desiavally</p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Compass, "Local know-how", "We're based in Koraput — routes, timings and hidden corners come from living here."],
            [Users, "Made for groups", "Friends, families and colleagues travelling together, with one coordinator to call."],
            [Camera, "Memories, captured", "Group photography assistance is part of the Koraput Explorer package."],
            [Leaf, "Respectful exploration", "We travel lightly and respect the villages, temples and forests we visit."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Compass;
            return (
              <div key={t as string} className="bg-background p-8">
                <I className="h-7 w-7 text-emerald" />
                <h3 className="mt-6 text-xl font-bold text-forest-deep">{t as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEMORIES */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-emerald">Real travel memories</p>
              <h2 className="mt-3 text-4xl font-extrabold text-forest-deep md:text-6xl">Travel together.</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-forest">Open gallery <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
            {gallery.slice(0, 4).map((g) => (
              <figure key={g.src} className="aspect-[3/4] w-[75vw] shrink-0 snap-start overflow-hidden rounded-2xl md:w-auto">
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="overflow-hidden rounded-2xl">
          <img src={img.hanuman} alt="Travellers before the 108 ft Hanuman statue" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-emerald">{business.secondary}</p>
          <h2 className="mt-3 text-4xl font-extrabold text-forest-deep md:text-5xl">A district of hills, rivers and living traditions.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>Koraput sits high in the Eastern Ghats of southern Odisha. Rain-fed waterfalls pour off its plateaus, mist settles over Deomali and the countryside is a patchwork of paddy terraces and forest.</p>
            <p>It is also home to many communities with their own languages, crafts and weekly markets. We visit as guests — quietly, respectfully, and with local guidance.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow text-emerald">FAQ</p>
            <h2 className="mt-3 text-4xl font-extrabold text-forest-deep md:text-5xl">Before you pack.</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-forest-deep">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        <img src={img.forestFall} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-x relative py-24 text-center md:py-32">
          <Mountain className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold md:text-6xl">Plan your next adventure.</h2>
          <p className="mx-auto mt-4 max-w-md text-ivory/80">Tell us your dates and group size — we'll come back with a plan and a quote.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="rounded-full bg-gold px-7 py-4 font-semibold text-forest-deep">Request a Quote</Link>
            <a href={waLink("Hi Desiavally, I'd like to plan a trip to Koraput.")} target="_blank" rel="noreferrer" className="rounded-full border border-ivory/40 px-7 py-4 font-semibold">
              WhatsApp {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
