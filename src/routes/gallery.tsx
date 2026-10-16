import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/chrome";
import { business, waLink } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Desiavally" },
      { name: "description", content: "Real travel memories from Koraput." },
      { property: "og:title", content: "Gallery | Desiavally" },
      { property: "og:description", content: "Real travel memories from Koraput." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Gallery" title="Real travel memories." intro="Real travel memories from Koraput." />
      <section className="container-x py-16">
        <p className="max-w-xl text-muted-foreground">Our full photo gallery is coming soon.</p>
        <a href={waLink("Hi Desiavally, I'd like to know more.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">WhatsApp {business.phone}</a>
      </section>
    </>
  ),
});
