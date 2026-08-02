import { MapPin, Navigation } from "lucide-react";
import type { OtherOutlet } from "@/data/brand";

export function OutletCard({ outlet }: { outlet: OtherOutlet }) {
  return (
    <article className="card-lift flex h-full flex-col justify-between rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div>
        <h3 className="flex items-start gap-2 font-display text-lg font-semibold">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-chili" />
          {outlet.name}
        </h3>
        <p className="mt-1.5 pl-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {outlet.area}, {outlet.city}
        </p>
      </div>
      <a
        href={outlet.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-ink/25 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        <Navigation className="h-4 w-4" />
        Get Directions
      </a>
    </article>
  );
}
