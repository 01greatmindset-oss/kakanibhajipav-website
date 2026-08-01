import { createFileRoute, Link } from "@tanstack/react-router";
import { IMAGES } from "@/data/brand";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Our Story | Kaka Ni Bhaji Pav, Ahmedabad to Vadodara" },
      {
        name: "description",
        content:
          "How Kaka Ni Bhaji Pav carried Ahmedabad's original bhaji pav recipe to Vadodara — our heritage, mission and philosophy as a pure veg family restaurant.",
      },
      { property: "og:title", content: "Our Story | Kaka Ni Bhaji Pav" },
      {
        property: "og:description",
        content:
          "Ahmedabad heritage, Vadodara home. The story behind Kaka Ni Bhaji Pav and the Kaka Special Pav Bhaji.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="ink-panel py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">Our Story</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl md:text-6xl">
              From Ahmedabad's streets to Vadodara's family tables
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Enjoy the tastiest Bhaji Pav of Ahmedabad, now in Vadodara — the line that started it,
              and the promise we still keep three branches later.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-grain py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
              The Ahmedabad beginning
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Kaka Ni Bhaji Pav began the way the best food usually does — with one pan, one
                recipe and no shortcuts. In Ahmedabad, the name became shorthand for bhaji cooked
                patiently until it turned deep and glossy, and pav pressed into butter until the
                edges caught.
              </p>
              <p>
                Nothing about that method was clever. It was just done properly, every single
                evening, for years of trusted tradition. That consistency is what people remembered,
                and what they asked for when they moved cities.
              </p>
              <h3 className="pt-4 font-display text-2xl font-semibold text-foreground">
                Vadodara, without compromise
              </h3>
              <p>
                Our Vadodara kitchens are a direct extension of that legacy — the same spice
                balance, the same butter, the same refusal to rush a pan. What changed is the
                setting: air-conditioned family halls, outdoor seating, late hours and a menu that
                now runs from Punjabi gravies to dosa and Indo-Chinese, all pure vegetarian.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={IMAGES.hero}
              alt="Kaka Special Pav Bhaji plated with pav, onion, lemon and green chillies inside the restaurant"
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What We Stand For"
              title="Our mission, in plain words"
              subtitle="To serve Ahmedabad's original bhaji pav to every Vadodara family — pure vegetarian, honestly priced, and exactly the same on a quiet Monday as on a full Saturday night."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Consistency over novelty",
                body: "We would rather perfect the plate people already love than chase a trend. The bhaji tastes the same at all three branches.",
              },
              {
                title: "Pure veg, no exceptions",
                body: "Every kitchen is fully vegetarian, with Jain preparations made separately without onion, garlic or root vegetables.",
              },
              {
                title: "A table for everyone",
                body: "Accessible pricing, family seating and a wide menu — this is everyday dining, not an occasion restaurant.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="card-lift h-full rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <img
              src={IMAGES.dishes}
              alt="Signature dishes: classic bhaji pav, green bhaji pav, dosa, manchurian and green pulav"
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold sm:text-4xl">
              A heritage name that grew up well
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                {
                  h: "The original recipe, unchanged",
                  p: "The bhaji you get in Vadodara is the Ahmedabad preparation, not an adaptation.",
                },
                {
                  h: "One signature everyone orders",
                  p: "The Kaka Special Pav Bhaji — kaju, cheese and paneer — is the plate the brand is known for.",
                },
                {
                  h: "Multi-cuisine under one roof",
                  p: "Punjabi, Chinese, South Indian, tandoori and thali, so a mixed group never has to compromise.",
                },
                {
                  h: "Three branches, one standard",
                  p: "Karelibaug, Diwalipura and Waghodia Road are run to the same kitchen discipline.",
                },
              ].map((item) => (
                <li key={item.h} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-chili" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.h}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.p}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-chili px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Explore the menu
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
