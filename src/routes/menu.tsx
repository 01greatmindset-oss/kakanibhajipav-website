import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Leaf } from "lucide-react";
import { BRAND, MENU, whatsappLink } from "@/data/brand";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu | Pav Bhaji, Punjabi, Chinese & Dosa in Vadodara" },
      {
        name: "description",
        content:
          "The Kaka Ni Bhaji Pav menu: Kaka Special Pav Bhaji, Jain and Lasaniya bhaji, masala pav, bhaji pulao, Punjabi, Chinese, South Indian, tandoori and thali.",
      },
      { property: "og:title", content: "Menu | Kaka Ni Bhaji Pav, Vadodara" },
      {
        property: "og:description",
        content:
          "Pure vegetarian multi-cuisine menu across pav bhaji, masala pav, Punjabi, Chinese, South Indian, tandoori and thali.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Kaka Ni Bhaji Pav Menu",
          hasMenuSection: MENU.map((section) => ({
            "@type": "MenuSection",
            name: section.title,
            description: section.blurb,
            hasMenuItem: section.items.map((item) => ({
              "@type": "MenuItem",
              name: item.name,
              description: item.note,
              suitableForDiet: "https://schema.org/VegetarianDiet",
            })),
          })),
        }),
      },
    ],
  }),
});

function MenuPage() {
  const [active, setActive] = useState<string>("all");
  const sections = active === "all" ? MENU : MENU.filter((s) => s.id === active);

  return (
    <>
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">The Menu</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl">
              Pure vegetarian, cooked across four kitchens
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Bhaji pav is the heart of it. Around it sit Punjabi gravies, Indo-Chinese wok plates,
              crisp South Indian dosas, tandoori starters and full thalis.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-md border border-cream/20 px-4 py-2 text-xs tracking-[0.16em] text-cream/70 uppercase">
              <Leaf className="h-4 w-4 text-saffron" />
              100% Pure Veg · Jain options available
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-18 z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {[{ id: "all", title: "All" }, ...MENU].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "shrink-0 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                active === tab.id
                  ? "bg-ink text-cream"
                  : "border border-border text-muted-foreground hover:bg-secondary",
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </section>

      <section className="surface-grain py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-lg border border-gold/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">On pricing:</strong> Prices available
            in-restaurant or on WhatsApp. Our South Indian dosa range is ₹160–₹210, and typical cost
            for two across the menu is {BRAND.costForTwo}.
          </div>

          <div className="mt-14 space-y-16">
            {sections.map((section) => (
              <Reveal key={section.id} as="section">
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">{section.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{section.blurb}</p>
                <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-4 bg-card p-5 transition-colors hover:bg-secondary"
                    >
                      <div>
                        <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                        {item.note ? (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.note}
                          </p>
                        ) : null}
                      </div>
                      {item.price ? (
                        <span className="shrink-0 font-display text-lg font-semibold text-chili">
                          {item.price}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <SectionHeading
              title="Ready to order?"
              subtitle="Send us your order on WhatsApp and we'll confirm prices, timing and Jain preparation."
            />
            <a
              href={whatsappLink("Hi, I'd like to place an order and check prices.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-chili px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
