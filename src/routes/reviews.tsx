import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";
import { BRAND, BRANCHES, IMAGES } from "@/data/brand";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
  head: () => ({
    meta: [
      { title: "Reviews & Ratings | Kaka Ni Bhaji Pav Vadodara" },
      {
        name: "description",
        content:
          "Loved by 2,700+ reviewers across Justdial, Zomato and Google with an aggregate rating around 4.0/5. See ratings for each Vadodara branch.",
      },
      { property: "og:title", content: "Reviews & Ratings | Kaka Ni Bhaji Pav" },
      {
        property: "og:description",
        content: "An aggregate standing of roughly 4.0/5 across 2,700+ public reviews in Vadodara.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: BRAND.name,
          servesCuisine: ["Indian", "Punjabi", "Chinese", "South Indian"],
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vadodara",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BRAND.ratingValue,
            reviewCount: String(BRAND.reviewCount),
            bestRating: "5",
          },
        }),
      },
    ],
  }),
});

const PLATFORMS = [
  { name: "Google", href: BRANCHES[0]!.mapsUrl, note: "Ratings across all three branches" },
  { name: "Zomato", href: BRAND.zomato, note: "Order and reviews for Diwalipura" },
  { name: "Swiggy", href: BRAND.swiggy, note: "Dineout and delivery for Karelibaug" },
];

function Reviews() {
  return (
    <>
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">Reviews & Trust</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl">
              Loved by 2,700+ reviewers across Vadodara
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              An aggregate standing of roughly 4.0 out of 5 across Justdial, Zomato and Google — the
              numbers are public, and we'd rather point you to them than quote ourselves.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-saffron/50 px-5 py-3">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-5 w-5 fill-saffron text-saffron" />
              ))}
              <Star className="h-5 w-5 text-saffron/40" />
              <span className="ml-2 font-display text-xl font-semibold text-cream">4.0 / 5</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="surface-grain py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={IMAGES.locations}
                alt="Google ratings for Kaka Ni Bhaji Pav branches in Vadodara"
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="px-5 py-3 text-xs text-muted-foreground">
                Live Google ratings, branch by branch.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Branch Standing"
              title="Rated individually, run to one standard"
            />
            <div className="mt-8 space-y-4">
              {BRANCHES.map((b) => (
                <div
                  key={b.slug}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold">{b.name}</h3>
                    <p className="text-xs text-muted-foreground">{b.tag}</p>
                  </div>
                  <div className="text-right">
                    <p className="inline-flex items-center gap-1.5 font-display text-xl font-semibold">
                      <Star className="h-4 w-4 fill-saffron text-saffron" />
                      {b.rating}
                    </p>
                    <p className="text-xs text-muted-foreground">{b.reviews}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What Our Customers Say"
              title="Real reviews, real experiences"
              subtitle="A snapshot of what Google reviewers across our branches are saying."
            />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={IMAGES.testimonials}
                alt="Google reviews from customers of Kaka Ni Bhaji Pav Vadodara"
                loading="lazy"
                className="w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Read Them Yourself"
              title="Our listings on the platforms that matter"
              subtitle="We link out rather than reproduce review text, so you always see the current picture."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift flex h-full flex-col justify-between rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-chili">
                    Open listing <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12 text-center">
            <p className="inline-flex items-center gap-2 rounded-md border border-gold/50 bg-card px-5 py-3 text-sm font-semibold">
              <span className="inline-block h-4 w-4 rounded-sm border-2 border-[oklch(0.55_0.15_150)] p-0.5">
                <span className="block h-full w-full rounded-full bg-[oklch(0.55_0.15_150)]" />
              </span>
              Certified 100% Pure Vegetarian
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
