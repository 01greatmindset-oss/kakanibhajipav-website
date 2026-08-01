import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Instagram, MapPin, Navigation } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND, BRANCHES, FAQS, whatsappLink } from "@/data/brand";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & FAQ | Kaka Ni Bhaji Pav Vadodara" },
      {
        name: "description",
        content:
          "Reach Kaka Ni Bhaji Pav on WhatsApp at +91 96240 03108. Branch addresses, phone numbers, parking, Jain options, catering and weekend wait times.",
      },
      { property: "og:title", content: "Contact & FAQ | Kaka Ni Bhaji Pav" },
      {
        property: "og:description",
        content:
          "WhatsApp ordering, branch contact details and answers on Jain food, delivery, parking and catering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Contact() {
  return (
    <>
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">Contact</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl">
              Talk to us on WhatsApp
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Orders, large tables, Jain preparation, catering — one number handles all of it:{" "}
              {BRAND.whatsappNumber}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink("Hi, I'd like to order from Kaka Ni Bhaji Pav.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-saffron px-6 py-3.5 text-sm font-semibold text-ink hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
              <a
                href={whatsappLink(
                  "Hi, I'd like to reserve a table. Branch, time and number of people:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream hover:border-saffron hover:text-saffron"
              >
                Reserve via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="surface-grain py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Branch Details"
              title="Where to find us"
              subtitle="Identical details across every page — call the branch directly or send a pre-filled WhatsApp message."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.slug} delay={i * 100}>
                <div className="card-lift flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-2xl font-semibold">{b.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {b.tag}
                  </p>
                  <address className="mt-5 flex flex-1 gap-2 text-sm leading-relaxed text-muted-foreground not-italic">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-chili" />
                    {b.address}
                  </address>
                  <p className="mt-4 text-sm">
                    <a
                      href={`tel:${b.phoneDigits}`}
                      className="inline-flex items-center gap-2 font-medium hover:text-chili"
                    >
                      <Phone className="h-4 w-4 text-chili" />
                      {b.phoneDisplay}
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.hours}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <a
                      href={whatsappLink(b.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-chili px-3 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                    <a
                      href={b.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/25 px-3 py-2.5 text-sm font-semibold hover:bg-secondary"
                    >
                      <Navigation className="h-4 w-4" /> Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
            >
              <Instagram className="h-4 w-4 text-chili" /> Instagram
            </a>
            <a
              href={BRAND.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Swiggy — Karelibaug
            </a>
            <a
              href={BRAND.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Zomato — Diwalipura
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions we're asked most" />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
