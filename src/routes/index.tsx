import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Navigation,
  Star,
  Leaf,
  Flame,
  Users,
  Clock,
  ArrowRight,
  Quote,
  Award,
} from "lucide-react";
import { BRAND, BRANCHES, IMAGES, whatsappLink } from "@/data/brand";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { BranchCard } from "@/components/site/BranchCard";
import { allBranchSchemas } from "@/lib/schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- LIVE ZOMATO COUNTER BADGE COMPONENT ---
export function ZomatoLiveBadge() {
  const [orderCount, setOrderCount] = useState(150000);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderCount((prevCount) => prevCount + Math.floor(Math.random() * 3) + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 border border-orange-500/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105">
      {/* Live Red Pulse Dot */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
      </span>

      {/* Counter Text */}
      <p className="text-sm sm:text-base font-semibold text-cream flex items-center gap-1.5">
        <span className="text-saffron font-bold tracking-tight transition-all duration-500">
          {orderCount.toLocaleString("en-IN")}+
        </span>
        <span>Orders Completed on <strong className="text-red-500 font-bold">Zomato</strong></span>
      </p>
    </div>
  );
}

// --- ROUTE CONFIGURATION ---
export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Kaka Ni Bhaji Pav | Best Pav Bhaji in Vadodara, Baroda",
      },
      {
        name: "description",
        content:
          "Ahmedabad's original bhaji pav, serving authentic taste since 1988 — now in Vadodara. Pure veg multi-cuisine dining at Karelibaug, Diwalipura and Waghodia Road. Order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Kaka Ni Bhaji Pav | Best Pav Bhaji in Vadodara, Since 1988",
      },
      {
        property: "og:description",
        content:
          "Vadodara's home for Ahmedabad's original bhaji pav — pure vegetarian since 1988, three Vadodara branches, loved by 2,700+ reviewers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: allBranchSchemas().map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  }),
});

const USPS = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    body: "Every kitchen, every branch. Jain preparations made without onion, garlic or root vegetables.",
  },
  {
    icon: Flame,
    title: "The Ahmedabad Recipe",
    body: "The same slow-mashed bhaji and butter-toasted pav that built the name, carried into Vadodara.",
  },
  {
    icon: Users,
    title: "Built for Families",
    body: "Everyday pricing, big tables and a menu that stretches from bhaji pav to Punjabi, Chinese and dosa.",
  },
  {
    icon: Clock,
    title: "Open Late, Every Night",
    body: "Dinner runs well past midnight at our flagship — because cravings don't keep office hours.",
  },
];

const REVIEW_HIGHLIGHTS = [
  {
    text: "Loved by 2,700+ reviewers across Justdial, Zomato and Google",
    label: "Aggregate standing",
  },
  {
    text: "4.0 average rating at our Karelibaug flagship across 2,594 reviews",
    label: "Karelibaug",
  },
  {
    text: "3.9 rating from 538 reviewers at Diwalipura, Old Padra Road",
    label: "Diwalipura",
  },
  {
    text: "Three Vadodara branches serving one Ahmedabad recipe",
    label: "Waghodia Road",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[84vh] items-end overflow-hidden bg-ink">
        <img
          src={IMAGES.hero}
          alt="Kaka Special Pav Bhaji served with butter-toasted pav, onions, lemon and green chillies"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pb-20">
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="heritage-badge">
                <Award className="h-3.5 w-3.5" />
                Serving Authentic Taste Since 1988
              </span>
            </div>

            {/* ZOMATO LIVE BADGE */}
            <div className="my-4 flex justify-start">
              <ZomatoLiveBadge />
            </div>

            <p className="eyebrow mt-5 text-saffron">Ahmedabad Heritage · Vadodara Home</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance text-cream sm:text-6xl lg:text-7xl">
              Vadodara's Home for Ahmedabad's Original Bhaji Pav
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Pure vegetarian, made with the recipe that made the name — and served across three
              Vadodara branches with the Kaka Special Pav Bhaji at the heart of it all.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappLink(BRANCHES[0]!.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-chili px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
              <a
                href={BRANCHES[0]!.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cream/35 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-saffron hover:text-saffron"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-[0.18em] text-cream/60 uppercase">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-saffron text-saffron" />
                4.0 · 2,700+ reviews
              </span>
              <span>100% Pure Veg</span>
              <span>{BRAND.costForTwo}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERITAGE TEASER */}
      <section className="surface-grain bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our Heritage · Since 1988</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl md:text-5xl">
              It started on the streets of Ahmedabad in 1988.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Kaka Ni Bhaji Pav earned its name one plate at a time in Ahmedabad — a pan of bhaji
                worked slowly until it turned glossy, pav split and pressed into butter, and a queue
                that never seemed to shorten. Nearly four decades on, the same recipe is still the
                whole point.
              </p>
              <p>
                Vadodara is a direct extension of that legacy. Same recipe, same proportions, same
                insistence that the bhaji is never rushed. Only the dining rooms are bigger, the
                menu is wider, and the family table is easier to find.
              </p>
              <p className="font-display text-xl text-foreground italic">
                "Enjoy the tastiest Bhaji Pav of Ahmedabad, now in Vadodara."
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-chili hover:gap-3"
            >
              Read our full story <ArrowRight className="h-4 w-4 transition-all" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={IMAGES.dishes}
              alt="Signature dishes at Kaka Ni Bhaji Pav — classic bhaji pav, green bhaji pav, dosa, manchurian and green pulav"
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE SPOTLIGHT */}
      <section className="ink-panel py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <img
              src={IMAGES.hero}
              alt="Kaka Special Pav Bhaji topped with butter, served with pav, onion and lemon"
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="eyebrow text-saffron">The Signature</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance text-cream sm:text-4xl md:text-5xl">
              Kaka Special Pav Bhaji
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Our most-ordered plate and the reason people drive across the city. A deep, buttery
              bhaji loaded with kaju, cheese and paneer — rich enough to be a celebration, familiar
              enough to be a Tuesday.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/80">
              {[
                "Fresh item folded in at the finish",
                "Cheese melted through, not just on top",
                "Served with pav toasted in generous butter",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-md bg-saffron px-6 py-3.5 text-sm font-semibold text-ink hover:opacity-90"
              >
                View the Menu
              </Link>
              <a
                href={whatsappLink("Hi, I'd like to order the Kaka Special Pav Bhaji.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream hover:border-saffron hover:text-saffron"
              >
                Order this dish
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USPS */}
      <section className="surface-grain py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Why People Come Back"
              title="A neighbourhood institution, properly run"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USPS.map((usp, i) => (
              <Reveal key={usp.title} delay={i * 90}>
                <div className="card-lift h-full rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <usp.icon className="h-7 w-7 text-chili" />
                  <h3 className="mt-5 font-display text-xl font-semibold">{usp.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{usp.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAND */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Trusted Across Vadodara</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Loved by 2,700+ reviewers across Vadodara
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              An aggregate standing of roughly 4.0 out of 5 across Justdial, Zomato and Google —
              earned branch by branch, plate by plate.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {BRANCHES.map((b) => (
                <div key={b.slug} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-display text-2xl font-semibold">{b.rating}★</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {b.name} · {b.reviews}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/reviews"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-chili hover:gap-3"
            >
              See our review standing <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={IMAGES.locations}
                alt="Google ratings and locations for Kaka Ni Bhaji Pav branches in Vadodara"
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="px-5 py-3 text-xs text-muted-foreground">
                Live ratings across our three Vadodara branches.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Vadodara Locations"
              title="Three branches. One taste."
              subtitle="Karelibaug, Diwalipura and Waghodia Road — each with its own dining room, and the same bhaji. The Kaka Ni Bhaji Pav name now serves 13 outlets across Gujarat."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {BRANCHES.map((branch, i) => (
              <Reveal key={branch.slug} delay={i * 100} className="h-full">
                <BranchCard branch={branch} index={i} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-6 py-3.5 text-sm font-semibold hover:bg-secondary"
            >
              View all locations with maps <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEW CAROUSEL */}
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What the Numbers Say"
              title="A record built in public"
              tone="dark"
            />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Carousel opts={{ loop: true }} className="px-10">
              <CarouselContent>
                {REVIEW_HIGHLIGHTS.map((item) => (
                  <CarouselItem key={item.text}>
                    <div className="rounded-lg border border-cream/15 p-8 text-center sm:p-12">
                      <Quote className="mx-auto h-7 w-7 text-saffron" />
                      <p className="mt-6 font-display text-xl leading-snug text-balance text-cream sm:text-2xl">
                        {item.text}
                      </p>
                      <p className="mt-5 text-xs tracking-[0.24em] text-cream/50 uppercase">
                        {item.label}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:text-saffron" />
              <CarouselNext className="border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:text-saffron" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* BRAND AT A GLANCE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Brand at a Glance"
              title="A heritage name, professionally operated"
              subtitle="For franchise partners, investors and media evaluating Kaka Ni Bhaji Pav as a brand."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "1988",
                label: "Serving since",
                body: "Nearly four decades of the same recipe, starting on the streets of Ahmedabad.",
              },
              {
                stat: "13",
                label: "Outlets across Gujarat",
                body: "3 in Vadodara, 8 in Ahmedabad and 2 in Surat — one consistent kitchen standard.",
              },
              {
                stat: "2,700+",
                label: "Public reviews",
                body: "Across Justdial, Zomato and Google, averaging roughly 4.0 out of 5 in Vadodara.",
              },
              {
                stat: "6+",
                label: "Cuisine categories",
                body: "Bhaji pav, masala pav, Punjabi, Chinese, South Indian, tandoori and thali.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 90}>
                <div className="card-lift h-full rounded-lg border border-gold/40 bg-card p-7 shadow-[var(--shadow-card)]">
                  <p className="font-display text-3xl font-semibold text-chili">{item.stat}</p>
                  <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 text-center">
            <a
              href={whatsappLink(
                "Hi, I'd like to discuss a business or franchise enquiry with Kaka Ni Bhaji Pav."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-cream hover:opacity-90"
            >
              Business & partnership enquiries
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
