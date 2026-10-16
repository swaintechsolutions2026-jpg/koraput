import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronDown, Clock, MessageCircle, Users } from "lucide-react";
import { packages, waLink, destinations } from "@/lib/site";
import { PageHeader } from "@/components/site/chrome";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const p = packages.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ${loaderData.duration} | Desiavally` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.name} | Desiavally` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "product" },
          { property: "og:url", content: `/packages/${params.slug}` },
        ]
      : [{ title: "Package unavailable | Desiavally" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/packages/${params.slug}` }],
  }),
  component: PackagePage,
});

function PackagePage() {
  const p = Route.useLoaderData();
  const msg = `Hi Desiavally, I'm interested in the ${p.name} (${p.duration}). Please share availability and a quote.`;
  const related = destinations.filter((d) => d.packages.includes(p.slug) && d.image);
  return (
    <>
      <PageHeader eyebrow={p.duration} title={p.name} intro={p.summary} image={p.image} />
      <section className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-14">
          <div>
            <h2 className="text-3xl font-extrabold text-forest-deep">Destination highlights</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 border-b border-border pb-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-forest-deep">Itinerary</h2>
            {p.itinerary ? (
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                {p.itinerary.map((d, i) => (
                  <details key={d.day} open={i === 0} className="group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span><span className="eyebrow text-emerald">{d.day}</span><span className="mt-1 block font-display text-xl font-bold text-forest-deep">{d.title}</span></span>
                      <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-muted-foreground">{d.detail}</p>
                  </details>
                ))}
              </div>
            ) : (
              <p className="mt-6 rounded-2xl bg-sand p-6 text-muted-foreground">{p.itineraryNote}</p>
            )}
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-forest-deep">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.inclusions.map((x) => (
                <li key={x} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald" />{x}</li>
              ))}
            </ul>
          </div>
          {related.length > 0 && (
            <div>
              <h2 className="text-3xl font-extrabold text-forest-deep">Places you'll see</h2>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {related.map((d) => (
                  <Link key={d.slug} to="/destinations/$slug" params={{ slug: d.slug }} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                    <img src={d.image!} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-card-overlay" />
                    <span className="absolute bottom-3 left-3 font-display font-bold text-ivory">{d.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-forest-deep p-8 text-ivory shadow-soft">
            <p className="font-display text-4xl font-extrabold text-gold">{p.priceLabel}</p>
            <p className="text-ivory/75">{p.priceNote}</p>
            <div className="mt-6 space-y-3 border-t border-ivory/15 pt-6 text-sm">
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />{p.duration}</p>
              <p className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" />{p.groupSize}</p>
            </div>
            <Link to="/contact" className="mt-8 block rounded-full bg-gold py-4 text-center font-semibold text-forest-deep">Request a Quote</Link>
            <a href={waLink(msg)} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-full border border-ivory/30 py-4 font-semibold">
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <p className="mt-5 text-xs text-ivory/60">An enquiry is not a confirmed booking. We'll confirm availability and the final price with you.</p>
          </div>
        </aside>
      </section>
    </>
  );
}
