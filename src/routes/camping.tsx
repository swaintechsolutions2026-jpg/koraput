import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/chrome";
import { business, waLink } from "@/lib/site";

export const Route = createFileRoute("/camping")({
  head: () => ({
    meta: [
      { title: "Camping Experiences | Desiavally" },
      { name: "description", content: "Indicative camping prices on Deomali and Talamali hills." },
      { property: "og:title", content: "Camping Experiences | Desiavally" },
      { property: "og:description", content: "Indicative camping prices on Deomali and Talamali hills." },
      { property: "og:url", content: "/camping" },
    ],
    links: [{ rel: "canonical", href: "/camping" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Camping Experiences" title="Sleep under the stars. Wake up above the clouds." intro="Indicative camping prices on Deomali and Talamali hills." />
      <section className="container-x py-16">
        <p className="max-w-xl text-muted-foreground">Tents from ₹400–₹500 per person, bonfire ₹200–₹300, chairs ₹50 each. Prices are indicative and depend on location and group size.</p>
        <a href={waLink("Hi Desiavally, I'd like to know more.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">WhatsApp {business.phone}</a>
      </section>
    </>
  ),
});
