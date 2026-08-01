import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BRANCHES, IMAGES } from "@/data/brand";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery | Food & Ambience at Kaka Ni Bhaji Pav Vadodara" },
      {
        name: "description",
        content:
          "Photographs of our food and dining rooms — signature bhaji pav, dosa, Indo-Chinese plates and interiors at all three Vadodara branches.",
      },
      { property: "og:title", content: "Gallery | Kaka Ni Bhaji Pav" },
      {
        property: "og:description",
        content:
          "Food photography and branch ambience from Karelibaug, Diwalipura and Waghodia Road.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

type Shot = { src: string; alt: string; group: "food" | "ambience" };

const SHOTS: Shot[] = [
  {
    src: IMAGES.hero,
    alt: "Kaka Special Pav Bhaji with butter, pav, onions, lemon and green chillies",
    group: "food",
  },
  {
    src: IMAGES.dishes,
    alt: "Signature dishes — classic bhaji pav, green bhaji pav, dosa, manchurian, green pulav",
    group: "food",
  },
  ...BRANCHES.map((b): Shot => ({
    src: b.photo,
    alt: `${b.name} branch — facade, seating and kitchen`,
    group: "ambience",
  })),
  {
    src: IMAGES.locations,
    alt: "All three Kaka Ni Bhaji Pav branches in Vadodara",
    group: "ambience",
  },
  {
    src: IMAGES.testimonials,
    alt: "Customer reviews and testimonials for Kaka Ni Bhaji Pav",
    group: "ambience",
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "ambience", label: "Interiors & Ambience" },
] as const;

function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<Shot | null>(null);
  const shots = filter === "all" ? SHOTS : SHOTS.filter((s) => s.group === filter);

  return (
    <>
      <section className="ink-panel py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ornament text-saffron">Gallery</p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-cream sm:text-5xl">
              The food, and the rooms we serve it in
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="surface-grain py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  filter === f.id
                    ? "bg-ink text-cream"
                    : "border border-border text-muted-foreground hover:bg-secondary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {shots.map((shot, i) => (
              <Reveal key={shot.src + i} delay={(i % 4) * 80}>
                <button
                  type="button"
                  onClick={() => setLightbox(shot)}
                  className="card-lift group block w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-[var(--shadow-card)]"
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="block px-5 py-3 text-xs text-muted-foreground">{shot.alt}</span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <SectionHeading
              eyebrow="By Branch"
              title="Each dining room has its own character"
              subtitle="Open a branch below to see only that outlet's photographs."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {BRANCHES.map((branch, i) => (
              <Reveal key={branch.slug} delay={i * 90}>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox({
                      src: branch.photo,
                      alt: `${branch.name} branch photographs`,
                      group: "ambience",
                    })
                  }
                  className="card-lift group block w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-[var(--shadow-card)]"
                >
                  <img
                    src={branch.photo}
                    alt={`${branch.name} branch interior and facade`}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="block px-5 py-4 font-display text-lg font-semibold">
                    {branch.name}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          {lightbox ? (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full rounded-lg object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
