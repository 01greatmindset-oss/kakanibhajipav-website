import { BRAND, BRANCHES, mapEmbedSrc } from "@/data/brand";

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

export const allBranchSchemas = () => BRANCHES.map(restaurantSchema);

export { mapEmbedSrc };
