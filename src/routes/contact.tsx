import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/chrome";
import { business, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip | Desiavally" },
      { name: "description", content: "Contact Desiavally to plan a Koraput trip." },
      { property: "og:title", content: "Plan Your Trip | Desiavally" },
      { property: "og:description", content: "Contact Desiavally to plan a Koraput trip." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Plan Your Trip" title="Plan your trip." intro="Contact Desiavally to plan a Koraput trip." />
      <section className="container-x py-16">
        <p className="max-w-xl text-muted-foreground">Kunduli Market, Maliput, Pottangi, Koraput, Odisha – 764039. Message us your dates, group size and pickup point.</p>
        <a href={waLink("Hi Desiavally, I'd like to know more.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">WhatsApp {business.phone}</a>
      </section>
    </>
  ),
});
