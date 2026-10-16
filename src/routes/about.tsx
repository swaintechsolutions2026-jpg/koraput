import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/chrome";
import { business, waLink } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Desiavally | Desiavally" },
      { name: "description", content: "A Koraput-based travel and hospitality company." },
      { property: "og:title", content: "About Desiavally | Desiavally" },
      { property: "og:description", content: "A Koraput-based travel and hospitality company." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="About Desiavally" title="Travel together, create memories." intro="A Koraput-based travel and hospitality company." />
      <section className="container-x py-16">
        <p className="max-w-xl text-muted-foreground">Desiavally Hospitality Pvt. Ltd. runs group tours and hilltop camping across Koraput and Araku Valley.</p>
        <a href={waLink("Hi Desiavally, I'd like to know more.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">WhatsApp {business.phone}</a>
      </section>
    </>
  ),
});
