export const BRAND = {
  name: "Kaka Ni Bhaji Pav",
  promise: "Vadodara's Home for Ahmedabad's Original Bhaji Pav",
  foundedYear: 1988,
  heritageLine: "Serving Authentic Taste Since 1988",
  whatsappNumber: "+91 96240 03108",
  whatsappDigits: "919624003108",
  instagram: "https://www.instagram.com/kaka_ni_bhajipav_vadodara",
  swiggy:
    "https://www.swiggy.com/restaurants/vadodara/karelibagh/kaka-ni-pavbhaji-fastfood-839351/dineout",
  zomato: "https://www.zomato.com/vadodara/kaka-ni-pav-bhaji-and-fast-food-diwalipura/order",
  costForTwo: "₹200–450 for two",
  ratingValue: "4.0",
  reviewCount: 2700,
};

export const IMAGES = {
  logo: "/images/logo.webp",
  hero: "/images/hero.webp",
  dishes: "/images/signature-dishes.webp",
  locations: "/images/three-locations.webp",
  malhar: "/images/branch-diwalipura.webp",
  waghodia: "/images/branch-waghodia.webp",
  karelibagh: "/images/branch-karelibaug.webp",
  testimonials: "/images/testimonials.webp",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${BRAND.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export type Branch = {
  slug: string;
  name: string;
  city: "Vadodara";
  tag: string;
  address: string;
  addressParts: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
  };
  phoneDisplay: string;
  phoneDigits: string;
  hours: string;
  rating: string;
  reviews: string;
  mapsUrl: string;
  mapEmbedQuery: string;
  photo: string;
  gallery: { src: string; caption: string }[];
  parking: string;
  whatsappMessage: string;
};

export const BRANCHES: Branch[] = [
  {
    slug: "karelibaug",
    name: "Karelibaug",
    city: "Vadodara",
    tag: "Amit Nagar Circle, Sama Savli Road",
    address:
      "Shop 30-32/31, Krishna Valley Complex, Char Rasta, Amita Nagar, Opp. Ambe School, Near Amit Nagar Circle, Sama Savli Road, Karelibaug, Vadodara, Gujarat 390022",
    addressParts: {
      street:
        "Shop 30-32/31, Krishna Valley Complex, Char Rasta, Amita Nagar, Opp. Ambe School, Near Amit Nagar Circle, Sama Savli Road",
      locality: "Karelibaug, Vadodara",
      region: "Gujarat",
      postalCode: "390022",
    },
    phoneDisplay: "096240 03108",
    phoneDigits: "+919624003108",
    hours: "11:00 AM – 12:00 AM daily",
    rating: "4.0",
    reviews: "2,594 reviews",
    mapsUrl: "https://share.google/aCXLEwYEIkNFthI93",
    mapEmbedQuery: "Kaka Ni Bhaji Pav, Amit Nagar Circle, Karelibaug, Vadodara, Gujarat",
    photo: IMAGES.karelibagh,
    gallery: [
      {
        src: IMAGES.karelibagh,
        caption: "Karelibaug flagship — signage, dining hall, live kitchen",
      },
    ],
    parking: "Open street parking around Amit Nagar Circle; busiest after 8 PM.",
    whatsappMessage: "Hi, I'd like to order from the Karelibaug branch.",
  },
  {
    slug: "diwalipura",
    name: "Diwalipura",
    city: "Vadodara",
    tag: "Malhar Point, Old Padra Road",
    address:
      "1/2, Ground Floor, Soho Complex, Punit Nagar, Near Malhar Point, Old Padra Road, Diwalipura, Vadodara, Gujarat 390007",
    addressParts: {
      street: "1/2, Ground Floor, Soho Complex, Punit Nagar, Near Malhar Point, Old Padra Road",
      locality: "Diwalipura, Vadodara",
      region: "Gujarat",
      postalCode: "390007",
    },
    phoneDisplay: "099253 82895",
    phoneDigits: "+919925382895",
    hours: "Open till 12:00 AM",
    rating: "3.9",
    reviews: "538 reviews",
    mapsUrl: "https://share.google/w81i7u7rUf98140HK",
    mapEmbedQuery: "Kaka Ni Bhaji Pav, Soho Complex, Old Padra Road, Diwalipura, Vadodara, Gujarat",
    photo: IMAGES.malhar,
    gallery: [
      {
        src: IMAGES.malhar,
        caption: "Diwalipura — facade, outdoor seating, indoor hall, kitchen",
      },
    ],
    parking: "Complex parking at Soho Complex plus Old Padra Road side parking.",
    whatsappMessage: "Hi, I'd like to order from the Diwalipura branch.",
  },
  {
    slug: "waghodia-road",
    name: "Waghodia Road",
    city: "Vadodara",
    tag: "Near Parivar Char Rasta",
    address:
      "1st Floor, Anugrah Complex, 3, Opposite Swami Vivekanand School, Near Parivar Char Rasta, Waghodia Road, Vadodara, Gujarat 390025",
    addressParts: {
      street:
        "1st Floor, Anugrah Complex, 3, Opposite Swami Vivekanand School, Near Parivar Char Rasta",
      locality: "Waghodia Road, Vadodara",
      region: "Gujarat",
      postalCode: "390025",
    },
    phoneDisplay: "099253 82895",
    phoneDigits: "+919925382895",
    hours: "Open till 11:30 PM",
    rating: "3.6",
    reviews: "115 reviews",
    mapsUrl: "https://share.google/u7ADEiUaPJ5w2vm7n",
    mapEmbedQuery: "Kaka Ni Bhaji Pav, Anugrah Complex, Waghodia Road, Vadodara, Gujarat",
    photo: IMAGES.waghodia,
    gallery: [
      {
        src: IMAGES.waghodia,
        caption: "Waghodia Road — facade, dining hall, terrace seating, counter",
      },
    ],
    parking: "Roadside and complex parking near Parivar Char Rasta.",
    whatsappMessage: "Hi, I'd like to order from the Waghodia Road branch.",
  },
];

export function mapEmbedSrc(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

// Outlets outside Vadodara, run under the Kaka Ni Bhaji Pav name across Gujarat.
// These are independently signed outlets — name, area and directions only, sourced
// from the official branch directory. Contact and hour details are not published
// for these locations, so those fields are simply omitted from their cards.
export type OtherOutlet = {
  slug: string;
  name: string;
  area: string;
  city: "Ahmedabad" | "Surat";
  mapsUrl: string;
};

export const OTHER_BRANCHES: OtherOutlet[] = [
  {
    slug: "ahmedabad-ognaj",
    name: "Kaka Ni Bhajipav & Fastfood",
    area: "Ognaj",
    city: "Ahmedabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kaka+Ni+Bhajipav+%26+Fastfood+Ognaj+Ahmedabad",
  },
  {
    slug: "ahmedabad-nikol",
    name: "Kaka Ni Bhaji Pav & Fast Food",
    area: "Nikol",
    city: "Ahmedabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=KaKa+Ni+Bhaji+Pav+Nikol+Ahmedabad",
  },
  {
    slug: "ahmedabad-nana-chiloda",
    name: "Kaka Ni Bhajipav & Fastfood",
    area: "Nana Chiloda",
    city: "Ahmedabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kaka+ni+Bhajipav+Nana+Chiloda+Ahmedabad",
  },
  {
    slug: "ahmedabad-rajendra-park",
    name: "Kaka Ni Bhaji Pav Fast Food & Punjabi Restaurant",
    area: "Rajendra Park",
    city: "Ahmedabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kakani+Bhaji+Pav+Rajendra+Park+Ahmedabad",
  },
  {
    slug: "ahmedabad-odhav",
    name: "Kaka Ni Bhajipav Fast Food & Punjabi Restaurant",
    area: "Odhav",
    city: "Ahmedabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaka+Ni+Bhajipav+Odhav+Ahmedabad",
  },
  {
    slug: "ahmedabad-maninagar",
    name: "New Kaka Ni Bhajipav & Fastfood Center",
    area: "Maninagar",
    city: "Ahmedabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=New+Kaka+ni+Bhajipav+Maninagar+Ahmedabad",
  },
  {
    slug: "ahmedabad-naroda",
    name: "Kaka Ni Pavbhaji Multicuisine & Garden Restaurant",
    area: "Naroda",
    city: "Ahmedabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kaka+ni+Pavbhaji+Multicuisine+Naroda+Ahmedabad",
  },
  {
    slug: "ahmedabad-bhaijipura",
    name: "Kaka Ni Bhaji Pav",
    area: "Bhaijipura",
    city: "Ahmedabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kaka+ni+Bhaji+Pav+Bhaijipura+Ahmedabad",
  },
  {
    slug: "surat-dindoli",
    name: "Kaka Ni Bhajipav & Fast Food",
    area: "Dindoli",
    city: "Surat",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaka+Ni+Bhajipav+Dindoli+Surat",
  },
  {
    slug: "surat-nana-varachha",
    name: "Kaka Ni Bhajipav & Fast Food",
    area: "Nana Varachha",
    city: "Surat",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaka+Ni+Bhajipav+Nana+Varachha+Surat",
  },
];

export type MenuSection = {
  id: string;
  title: string;
  blurb: string;
  items: { name: string; note?: string; price?: string }[];
};

export const MENU: MenuSection[] = [
  {
    id: "pav-bhaji",
    title: "Pav Bhaji Range",
    blurb: "The heart of the house — slow-mashed bhaji, butter-toasted pav.",
    items: [
      { name: "Regular Bhaji", note: "The everyday classic, generously buttered" },
      { name: "Cheese Pav Bhaji", note: "Molten cheese folded through the bhaji" },
      {
        name: "Kaka Special Pav Bhaji",
        note: "Our signature — loaded with kaju, cheese and paneer",
      },
      { name: "Jain Pav Bhaji", note: "No onion, no garlic, no root vegetables" },
      { name: "Lasaniya Pav Bhaji", note: "Bold garlic-forward Kathiyawadi style" },
      { name: "Cheese Lasaniya Pav Bhaji", note: "Garlic heat with a cheese finish" },
    ],
  },
  {
    id: "masala-pav",
    title: "Masala Pav Range",
    blurb: "Griddled pav tossed in masala butter — the Ahmedabad street original.",
    items: [
      { name: "Masala Pav" },
      { name: "Tukda Masala Pav" },
      { name: "Cheese Masala Pav" },
      { name: "Special Cheese Masala Tukda" },
    ],
  },
  {
    id: "pulao",
    title: "Bhaji Pulao & Rice",
    blurb: "Fragrant rice plates built for sharing.",
    items: [
      { name: "Bhaji Pulao" },
      { name: "Green Pulav", note: "Herb-infused rice with fresh vegetables" },
      { name: "Jeera Rice" },
    ],
  },
  {
    id: "punjabi",
    title: "Punjabi",
    blurb: "Rich North Indian gravies with tandoori breads.",
    items: [
      { name: "Paneer Butter Masala" },
      { name: "Kaju Curry" },
      { name: "Dal Fry & Dal Tadka" },
      { name: "Veg Kolhapuri" },
      { name: "Malai Kofta" },
    ],
  },
  {
    id: "chinese",
    title: "Chinese",
    blurb: "Indo-Chinese, wok-fired and unapologetically spiced.",
    items: [
      { name: "Veg Manchurian", note: "Tossed in a bold Indo-Chinese sauce" },
      { name: "Hakka Noodles" },
      { name: "Schezwan Fried Rice" },
      { name: "Chilli Paneer" },
      { name: "Crispy Veg" },
    ],
  },
  {
    id: "south-indian",
    title: "South Indian",
    blurb: "Crisp dosas with coconut chutney, spicy chutney and sambar.",
    items: [
      { name: "Plain Dosa", price: "₹160" },
      { name: "Masala Dosa", price: "₹175" },
      { name: "Cheese Dosa", price: "₹195" },
      { name: "Mysore Masala Dosa", price: "₹210" },
      { name: "Idli Sambar" },
      { name: "Uttapam" },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori & Starters",
    blurb: "Clay-oven starters, pure vegetarian throughout.",
    items: [
      { name: "Paneer Tikka" },
      { name: "Tandoori Aloo" },
      { name: "Veg Seekh" },
      { name: "Assorted Tandoori Platter" },
    ],
  },
  {
    id: "thali",
    title: "Thali",
    blurb: "A full plate — sabzi, dal, rice, rotli, salad and sweet.",
    items: [
      { name: "Kaka Special Thali" },
      { name: "Punjabi Thali" },
      { name: "Jain Thali", note: "Prepared without onion and garlic" },
    ],
  },
];

export const FAQS = [
  {
    q: "Do you serve Jain food?",
    a: "Yes. Jain Pav Bhaji and a Jain Thali are prepared without onion, garlic or root vegetables. Mention Jain when you order on WhatsApp or at the counter and the kitchen will prepare it separately.",
  },
  {
    q: "Is everything pure vegetarian?",
    a: "Every branch is 100% pure vegetarian. There is no non-vegetarian preparation anywhere in our kitchens.",
  },
  {
    q: "Which delivery platforms can I order from?",
    a: "Swiggy serves the Karelibaug branch and Zomato serves Diwalipura. For the fastest response — including takeaway and large orders — message us on WhatsApp at +91 96240 03108.",
  },
  {
    q: "Is parking available?",
    a: "Karelibaug has open street parking around Amit Nagar Circle. Diwalipura has complex parking at Soho Complex plus Old Padra Road side parking. Waghodia Road has roadside and complex parking near Parivar Char Rasta.",
  },
  {
    q: "Do you take catering and party orders?",
    a: "Yes. We handle bulk bhaji pav counters, family functions and office orders. Send us the date, headcount and branch on WhatsApp and we'll confirm availability.",
  },
  {
    q: "How long is the weekend wait?",
    a: "Friday to Sunday evenings between 8 PM and 10 PM are our busiest hours and a short wait is common. Message us on WhatsApp before you leave and we'll advise on the current wait, or come earlier in the evening.",
  },
  {
    q: "Can I reserve a table?",
    a: "We don't run a formal booking system. Message us on WhatsApp with your branch, time and headcount and we'll do our best to hold a table for you.",
  },
];
