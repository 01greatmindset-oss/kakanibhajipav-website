import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { BRANCHES, OTHER_BRANCHES, mapEmbedSrc, whatsappLink } from "@/data/brand";
import { Reveal } from "@/components/site/Reveal";
import { BranchCard } from "@/components/site/BranchCard";
import { OutletCard } from "@/components/site/OutletCard";
import { allBranchSchemas } from "@/lib/schema";

export const Route = createFileRoute("/locations")({
  component: Locations,
  head: () => ({
    meta: [
      {
        title: "Locations | Kaka Ni Bhaji Pav — Vadodara, Ahmedabad & Surat",
      },
      {
        name: "description",
        content:
          "Every Kaka Ni Bhaji Pav outlet across Gujarat — Vadodara, Ahmedabad and Surat — with maps, hours and directions. Serving authentic taste since 1988.",
      },
      { property: "og:title", content: "Our Locations Across Gujarat | Kaka Ni Bhaji Pav" },
      {
        property: "og:description",
        content:
          "Vadodara, Ahmedabad and Surat — one taste, one legacy since 1988. Live maps and directions for every outlet.",
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

const CITY_FILTERS = ["Vadodara", "Ahmedabad", "Surat", "All Locations"] as const;
type CityFilter = (typeof CITY_FILTERS)[number];

function Locations() {
  const [filter, setFilter] = useState<CityFilter>("Vadodara");

  const otherOutletsByCity = useMemo(
    () => ({
      Ahmedabad: OTHER_BRANCHES.filter((o) => o.city === "Ahmedabad"),
      Surat: OTHER_BRANCHES.filter((o) => o.city === "Surat"),
    }),
    [],
  );

  const showVadodara = filter === "Vadodara" || filter === "All Locations";
  const showAhmedabad = filter === "Ahmedabad" || filter === "All Locations";
  const showSurat = filter === "Surat" || filter === "All Locations";

  return (
    <>
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">Our Locations Across Gujarat</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl">
              One taste, since 1988. Now across Vadodara, Ahmedabad and Surat.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Vadodara is where our family tables live — Karelibaug, Diwalipura and Waghodia Road,
              each with maps, hours and direct WhatsApp ordering. The Kaka Ni Bhaji Pav name now
              serves 13 outlets across Gujarat.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-9 flex flex-wrap justify-center gap-2.5">
            {CITY_FILTERS.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setFilter(city)}
                aria-pressed={filter === city}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === city
                    ? "border-saffron bg-saffron text-ink"
                    : "border-cream/25 text-cream/80 hover:border-saffron hover:text-saffron"
                }`}
              >
                {city}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {showVadodara && (
        <>
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              {filter === "All Locations" && (
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">Vadodara</h2>
                </Reveal>
              )}
              <div className="mt-6 grid gap-8 lg:grid-cols-3">
                {BRANCHES.map((branch, i) => (
                  <Reveal key={branch.slug} delay={i * 100} className="h-full">
                    <BranchCard branch={branch} index={i} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="surface-grain pb-24">
            <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
              {BRANCHES.map((branch, i) => (
                <Reveal key={branch.slug} as="article" delay={40}>
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                        {branch.name}
                      </h2>
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
      )}

      {filter === "Vadodara" && (
        <section className="pb-24 text-center">
          <Reveal>
            <button
              type="button"
              onClick={() => setFilter("All Locations")}
              className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-6 py-3.5 text-sm font-semibold hover:bg-secondary"
            >
              Explore Other Gujarat Outlets
              <ChevronDown className="h-4 w-4" />
            </button>
          </Reveal>
        </section>
      )}

      {(showAhmedabad || showSurat) && (
        <section className={`pb-24 ${showVadodara ? "surface-grain pt-4" : "pt-4"}`}>
          <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6">
            {showAhmedabad && (
              <div>
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                    Ahmedabad Outlets
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Independently run outlets under the Kaka Ni Bhaji Pav name across Ahmedabad.
                  </p>
                </Reveal>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {otherOutletsByCity.Ahmedabad.map((outlet, i) => (
                    <Reveal key={outlet.slug} delay={i * 60} className="h-full">
                      <OutletCard outlet={outlet} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {showSurat && (
              <div>
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">Surat Outlets</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Independently run outlets under the Kaka Ni Bhaji Pav name across Surat.
                  </p>
                </Reveal>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {otherOutletsByCity.Surat.map((outlet, i) => (
                    <Reveal key={outlet.slug} delay={i * 60} className="h-full">
                      <OutletCard outlet={outlet} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
