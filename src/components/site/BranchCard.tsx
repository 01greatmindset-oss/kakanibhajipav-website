import { useState } from "react";
import { MapPin, Navigation, Star, Store, Phone, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Branch } from "@/data/brand";

export function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="relative aspect-16/10 overflow-hidden bg-ink">
        <img
          src={branch.photo}
          alt={`Kaka Ni Bhaji Pav ${branch.name} branch`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded border border-gold/60 bg-ink/80 px-2 py-1 font-display text-xs font-semibold text-saffron">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
          <MapPin className="h-5 w-5 text-chili" />
          {branch.name}
        </h3>
        <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
          {branch.tag}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-1.5 font-semibold">
            <Star className="h-4 w-4 fill-saffron text-saffron" />
            {branch.rating}
            <span className="font-normal text-muted-foreground">({branch.reviews})</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-4 w-4" />
            {branch.hours}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {branch.address}
        </p>

        <a
          href={`tel:${branch.phoneDigits}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-chili"
        >
          <Phone className="h-4 w-4 text-chili" />
          {branch.phoneDisplay}
        </a>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-saffron px-3 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/25 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <Store className="h-4 w-4" />
            View Branch
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[88vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {branch.name} — {branch.tag}
            </DialogTitle>
            <DialogDescription>
              {branch.address} · {branch.phoneDisplay} · {branch.rating}★ ({branch.reviews})
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {branch.gallery.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-lg border border-border">
                <img
                  src={shot.src}
                  alt={`${branch.name} branch — ${shot.caption}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="bg-secondary px-4 py-2.5 text-xs text-muted-foreground">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-chili px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={`tel:${branch.phoneDigits}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> Call {branch.phoneDisplay}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
