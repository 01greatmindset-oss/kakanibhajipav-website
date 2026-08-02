import { BRAND, BRANCHES, OTHER_BRANCHES, mapEmbedSrc } from "@/data/brand";

export function restaurantSchema(branch: (typeof BRANCHES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `${BRAND.name} — ${branch.name}`,
    image: branch.photo,
    servesCuisine: ["Indian", "Gujarati Street Food", "Punjabi", "Chinese", "South Indian"],
    priceRange: "₹₹",
    telephone: branch.phoneDigits,
    url: `/locations`,
    hasMap: branch.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.addressParts.street,
      addressLocality: branch.addressParts.locality,
      addressRegion: branch.addressParts.region,
      postalCode: branch.addressParts.postalCode,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: branch.rating,
      reviewCount: branch.reviews.replace(/[^0-9]/g, ""),
      bestRating: "5",
    },
    openingHours: branch.hours,
    hasMenu: "/menu",
    isAccessibleForFree: false,
    additionalType: "https://schema.org/LocalBusiness",
  };
}

// Outlets outside Vadodara only have a name, area and Google Maps link — no
// verified phone, hours or rating data — so their schema stays minimal and
// omits fields we can't source from the official directory.
export function outletSchema(outlet: (typeof OTHER_BRANCHES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: outlet.name,
    servesCuisine: ["Indian", "Gujarati Street Food"],
    priceRange: "₹₹",
    url: `/locations`,
    hasMap: outlet.mapsUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: `${outlet.area}, ${outlet.city}`,
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    isAccessibleForFree: false,
  };
}

export const allBranchSchemas = () => [
  ...BRANCHES.map(restaurantSchema),
  ...OTHER_BRANCHES.map(outletSchema),
];

export { mapEmbedSrc };
