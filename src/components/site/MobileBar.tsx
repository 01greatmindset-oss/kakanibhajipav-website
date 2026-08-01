import { Phone, MessageCircle, Navigation } from "lucide-react";
import { BRANCHES, whatsappLink } from "@/data/brand";

const flagship = BRANCHES[0]!;

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${flagship.phoneDigits}`}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-foreground"
        >
          <Phone className="h-5 w-5 text-chili" />
          Call
        </a>
        <a
          href={whatsappLink(flagship.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-chili py-3 text-xs font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={flagship.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-foreground"
        >
          <Navigation className="h-5 w-5 text-chili" />
          Directions
        </a>
      </div>
    </div>
  );
}
