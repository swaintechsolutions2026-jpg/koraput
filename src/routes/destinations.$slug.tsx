import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { destinations, packages, img } from "@/lib/site";
import { PageHeader } from "@/components/site/chrome";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const d = destinations.find((x) => x.slug === params.slug);
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name}, Koraput — Travel Guide | Desiavally` },
          { name: "description", content: loaderData.blurb },
          { property: "og:title", content: `${loaderData.name} | Desiavally` },
          { property: "og:description", content: loaderData.blurb },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/destinations/${params.slug}` },
        ]
      : [{ title: "Destination unavailable | Desiavally" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
  }),
  component: DestinationPage,
});

function DestinationPage() {
  const d = Route.useLoaderData();
  const rel = packages.filter((p) => d.packages.includes(p.slug));
  return (
    <>
      <PageHeader eyebrow={d.kind} title={d.name} intro={d.blurb} image={d.image ?? img.fields} />
      <section className="container-x py-16 md:py-24">
        <h2 className="text-3xl font-extrabold text-forest-deep md:text-4xl">Visit {d.name} with us</h2>
        {rel.length ? (
          <div className="mt-10 grid gap-8">{rel.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}</div>
        ) : (
          <div className="mt-6 rounded-2xl bg-sand p-8">
            <p className="text-muted-foreground">We can add {d.name} to a custom trip. Tell us your dates and group size.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-forest">Plan a custom trip <ArrowRight className="h-4 w-4" /></Link>
          </div>
        )}
      </section>
    </>
  );
}
