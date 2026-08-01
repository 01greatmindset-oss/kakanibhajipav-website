import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { BRANCHES, mapEmbedSrc, whatsappLink } from "@/data/brand";
import { Reveal } from "@/components/site/Reveal";
import { BranchCard } from "@/components/site/BranchCard";
import { allBranchSchemas } from "@/lib/schema";

export const Route = createFileRoute("/locations")({
  component: Locations,
  head: () => ({
    meta: [
      {
        title: "Locations | Kaka Ni Bhaji Pav Karelibaug, Diwalipura, Waghodia",
      },
      {
        name: "description",
        content:
          "Find Kaka Ni Bhaji Pav in Vadodara — Karelibaug flagship, Diwalipura (Malhar Point, Old Padra Road) and Waghodia Road. Maps, hours and direct call links.",
      },
      { property: "og:title", content: "Our 3 Vadodara Locations | Kaka Ni Bhaji Pav" },
      {
        property: "og:description",
        content:
          "Three outlets, one taste. Karelibaug, Diwalipura and Waghodia Road with live maps and directions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
    scripts: allBranchSchemas().map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  }),
});

function Locations() {
  return (
    <>
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">Our 3 Locations</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl">
              Three outlets. One taste. Always Kaka Ni Bhaji Pav.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Karelibaug is our flagship. Diwalipura sits by Malhar Point on Old Padra Road, and
              Waghodia Road serves the east of the city.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
          {BRANCHES.map((branch, i) => (
            <Reveal key={branch.slug} delay={i * 100} className="h-full">
              <BranchCard branch={branch} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-grain pb-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
          {BRANCHES.map((branch, i) => (
            <Reveal key={branch.slug} as="article" delay={40}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="font-display text-3xl font-semibold sm:text-4xl">{branch.name}</h2>
                  <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {branch.tag}
                  </p>
                  <address className="mt-5 text-base leading-relaxed text-muted-foreground not-italic">
                    {branch.address}
                  </address>
                  <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Phone
                      </dt>
                      <dd className="mt-1 font-medium">
                        <a href={`tel:${branch.phoneDigits}`} className="hover:text-chili">
                          {branch.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Hours
                      </dt>
                      <dd className="mt-1 font-medium">{branch.hours}</dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Rating
                      </dt>
                      <dd className="mt-1 font-medium">
                        {branch.rating}★ · {branch.reviews}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                        Parking
                      </dt>
                      <dd className="mt-1 font-medium">{branch.parking}</dd>
                    </div>
                  </dl>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={whatsappLink(branch.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-chili px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Order / Reserve on WhatsApp
                    </a>
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-5 py-3 text-sm font-semibold hover:bg-secondary"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
                    <iframe
                      title={`Map of Kaka Ni Bhaji Pav ${branch.name}`}
                      src={mapEmbedSrc(branch.mapEmbedQuery)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-80 w-full border-0"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
