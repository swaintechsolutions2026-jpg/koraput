import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/chrome";
import { business, waLink } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Desiavally" },
      { name: "description", content: "Privacy policy draft." },
      { property: "og:title", content: "Privacy Policy | Desiavally" },
      { property: "og:description", content: "Privacy policy draft." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Privacy Policy" title="Privacy Policy (draft)." intro="Privacy policy draft." />
      <section className="container-x py-16">
        <p className="max-w-xl text-muted-foreground">This policy is an unpublished draft awaiting approved text from the business.</p>
        <a href={waLink("Hi Desiavally, I'd like to know more.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">WhatsApp {business.phone}</a>
      </section>
    </>
  ),
});
