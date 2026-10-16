import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/chrome";
import { business, waLink } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Cancellation | Desiavally" },
      { name: "description", content: "Terms and cancellation draft." },
      { property: "og:title", content: "Terms and Cancellation | Desiavally" },
      { property: "og:description", content: "Terms and cancellation draft." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Terms and Cancellation" title="Terms & Cancellation (draft)." intro="Terms and cancellation draft." />
      <section className="container-x py-16">
        <p className="max-w-xl text-muted-foreground">These terms are an unpublished draft awaiting approved text from the business.</p>
        <a href={waLink("Hi Desiavally, I'd like to know more.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">WhatsApp {business.phone}</a>
      </section>
    </>
  ),
});
