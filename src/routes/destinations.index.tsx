import { createFileRoute, Link } from "@tanstack/react-router";
import { destinations } from "@/lib/site";
import { DestinationImage, PageHeader } from "@/components/site/chrome";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Explore Koraput Destinations — Deomali, Duduma, Araku | Desiavally" },
      { name: "description", content: "Deomali Hill, Duduma Waterfall, Rani Duduma, Talamali, Kolab Dam, Araku Valley, Borra Caves and Gupteswar Temple." },
      { property: "og:title", content: "Explore Koraput Destinations | Desiavally" },
      { property: "og:description", content: "Hills, waterfalls, caves and temples across Koraput and Araku Valley." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Explore destinations" title="The unseen Koraput, place by place." />
      <section className="container-x grid gap-x-8 gap-y-14 py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-3">
        {destinations.map((d, i) => (
          <Link key={d.slug} to="/destinations/$slug" params={{ slug: d.slug }} className={`group ${i % 3 === 1 ? "lg:mt-16" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <DestinationImage src={d.image} name={d.name} className="transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-5 text-emerald">{d.kind}</p>
            <h2 className="mt-1 text-2xl font-extrabold text-forest-deep">{d.name}</h2>
            <p className="mt-2 text-muted-foreground">{d.blurb}</p>
          </Link>
        ))}
      </section>
    </>
  ),
});
