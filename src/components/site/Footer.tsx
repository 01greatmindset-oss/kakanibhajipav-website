import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { BRAND, BRANCHES, IMAGES, whatsappLink } from "@/data/brand";

export function Footer() {
  return (
    <footer className="ink-panel mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <img
              src={IMAGES.logo}
              alt="Kaka Ni Bhaji Pav logo"
              width={72}
              height={72}
              loading="lazy"
              className="h-18 w-18 rounded-full object-cover ring-1 ring-gold/40"
            />
            <h2 className="mt-5 font-display text-2xl font-semibold text-cream">
              Kaka Ni Bhaji Pav
            </h2>
            <p className="mt-2 text-xs tracking-[0.2em] text-gold uppercase">
              Serving Authentic Taste Since 1988
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/65">
              Enjoy the tastiest Bhaji Pav of Ahmedabad, now in Vadodara. Pure vegetarian,
              multi-cuisine, and made the way families have loved it for years — now 13 outlets
              strong across Gujarat.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hi, I'd like to order from Kaka Ni Bhaji Pav.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-saffron px-4 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Order on WhatsApp
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/20 text-cream transition-colors hover:border-saffron hover:text-saffron"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={BRAND.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 underline-offset-4 hover:text-saffron hover:underline"
              >
                Order on Swiggy (Karelibaug)
              </a>
              <a
                href={BRAND.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 underline-offset-4 hover:text-saffron hover:underline"
              >
                Order on Zomato (Diwalipura)
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {BRANCHES.map((branch) => (
              <div key={branch.slug}>
                <h3 className="font-display text-base font-semibold text-saffron">{branch.name}</h3>
                <p className="mt-3 flex gap-2 text-sm leading-relaxed text-cream/65">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{branch.address}</span>
                </p>
                <a
                  href={`tel:${branch.phoneDigits}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-saffron"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {branch.phoneDisplay}
                </a>
              </div>
            ))}

            <div>
              <h3 className="font-display text-base font-semibold text-saffron">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm text-cream/70">
                {[
                  { to: "/menu", label: "Menu" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/locations", label: "Locations" },
                  { to: "/reviews", label: "Reviews" },
                  { to: "/contact", label: "Contact & FAQ" },
                  { to: "/about", label: "Our Story" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-saffron">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/12 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kaka Ni Bhaji Pav, Vadodara. All rights reserved.</p>
          <p>100% Pure Vegetarian · Serving Authentic Taste Since 1988</p>
        </div>
      </div>
    </footer>
  );
}
