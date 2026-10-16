import { createFileRoute } from "@tanstack/react-router";
import { packages } from "@/lib/site";
import { PackageCard } from "@/components/site/PackageCard";
import { PageHeader } from "@/components/site/chrome";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Koraput Tour Packages | Desiavally" },
      { name: "description", content: "Koraput Explorer (2D/1N) and Koraput & Araku Valley Adventure (3D/2N) group tours with pickup, stays and sightseeing." },
      { property: "og:title", content: "Koraput Tour Packages | Desiavally" },
      { property: "og:description", content: "Group tours through Deomali, Duduma, Kolab and Araku Valley." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Tour packages" title="Koraput tour packages." intro="Group journeys through hills, waterfalls and valleys — with pickup, stays and a local guide." />
      <section className="container-x grid gap-8 py-16 md:py-24">
        {packages.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
        <p className="text-center text-sm text-muted-foreground">Looking for a private or longer tour? <a href="/contact" className="font-semibold text-forest underline">Ask us</a> — we'll plan it with you.</p>
      </section>
    </>
  ),
});
