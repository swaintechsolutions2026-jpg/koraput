import talamali from "@/assets/talamali-group.png.asset.json";
import hanuman from "@/assets/hanuman-group.png.asset.json";
import waterfallGroup from "@/assets/waterfall-group.png.asset.json";
import raniDuduma from "@/assets/rani-duduma-entrance.png.asset.json";
import forestFall from "@/assets/forest-waterfall.png.asset.json";
import fields from "@/assets/koraput-fields.png.asset.json";
import deomali from "@/assets/deomali-mist.png.asset.json";
import logo from "@/assets/logo.png.asset.json";

export const img = {
  talamali: talamali.url,
  hanuman: hanuman.url,
  waterfallGroup: waterfallGroup.url,
  raniDuduma: raniDuduma.url,
  forestFall: forestFall.url,
  fields: fields.url,
  deomali: deomali.url,
  logo: logo.url,
};

export const business = {
  name: "Desiavally Hospitality Pvt. Ltd.",
  legalName: "DESIAVALLY HOSPITALITY PRIVATE LIMITED",
  tagline: "Travel Together, Create Memories",
  secondary: "Where Tribal Culture Meets Nature",
  phone: "+91 6372554410",
  phoneRaw: "916372554410",
  address: "Kunduli Market, Maliput, Pottangi, Koraput, Odisha – 764039",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${business.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type TourPackage = {
  slug: string;
  name: string;
  duration: string;
  priceLabel: string;
  priceNote: string;
  groupSize: string;
  image: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  itinerary: { day: string; title: string; detail: string }[] | null;
  itineraryNote?: string;
};

export const packages: TourPackage[] = [
  {
    slug: "koraput-explorer",
    name: "Koraput Explorer",
    duration: "2 Days / 1 Night",
    priceLabel: "From ₹2,999",
    priceNote: "per person",
    groupSize: "Minimum 7 travellers",
    image: img.talamali,
    summary:
      "A compact weekend through Koraput's hilltops, temples, waterfalls and the Kolab reservoir — made for friends and family groups.",
    highlights: [
      "Deomali Hill Top",
      "Talamali Hill Valley",
      "Damanjodi Township",
      "Kanta Baunsuni Temple",
      "Sai Temple",
      "108 Ft Hanuman Statue",
      "Duduma Waterfall",
      "Kolab Dam",
      "Tribal village and cultural exploration",
    ],
    inclusions: [
      "1-night hotel accommodation",
      "Railway station / bus stand pickup and drop",
      "Sightseeing vehicle",
      "Experienced guide",
      "Group photography assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Hills, temples & Deomali",
        detail:
          "Pickup and hotel check-in, Damanjodi, temple visits, the 108 ft Hanuman statue, Talamali and Deomali.",
      },
      {
        day: "Day 2",
        title: "Waterfalls & Kolab",
        detail:
          "Breakfast and checkout, Duduma Waterfall, Kolab Dam, local exploration and return transfer.",
      },
    ],
  },
  {
    slug: "koraput-araku-valley-adventure",
    name: "Koraput & Araku Valley Adventure",
    duration: "3 Days / 2 Nights",
    priceLabel: "Group pricing",
    priceNote: "contact us for a quote",
    groupSize: "Groups of 6 and above",
    image: img.raniDuduma,
    summary:
      "A cross-border journey from Koraput's waterfalls into Araku Valley's caves, coffee country and viewpoints — with bonfire evenings in between.",
    highlights: [
      "Deomali",
      "Talamali",
      "Duduma",
      "Rani Duduma",
      "Machkund Valley",
      "Borra Caves",
      "Araku Valley",
      "Galikonda Viewpoint",
      "Coffee Plantation",
      "Araku Tribal Museum",
      "Kolab Dam",
      "Local markets",
    ],
    inclusions: [
      "AC Bolero transportation",
      "2-night accommodation",
      "Vegetarian food",
      "Breakfast",
      "Bonfire and music",
      "Camping chair",
      "Sightseeing",
      "Trip coordinator",
    ],
    itinerary: null,
    itineraryNote:
      "The day-by-day route for this tour is being finalised. Request a quote and we'll share the confirmed itinerary for your dates.",
  },
];

export type Destination = {
  slug: string;
  name: string;
  kind: string;
  image: string | null;
  blurb: string;
  packages: string[];
};

export const destinations: Destination[] = [
  { slug: "deomali-hill", name: "Deomali Hill", kind: "Peak", image: img.deomali, blurb: "Odisha's highest peak, where clouds roll across grassy ridges in the monsoon and winter mornings.", packages: ["koraput-explorer", "koraput-araku-valley-adventure"] },
  { slug: "duduma-waterfall", name: "Duduma Waterfall", kind: "Waterfall", image: img.forestFall, blurb: "A tall cascade on the Machkund river along the Odisha–Andhra border, best seen after the rains.", packages: ["koraput-explorer", "koraput-araku-valley-adventure"] },
  { slug: "rani-duduma", name: "Rani Duduma", kind: "Waterfall", image: img.raniDuduma, blurb: "A forest-ringed falls and picnic spot near Duduma, entered through its carved wooden gate.", packages: ["koraput-araku-valley-adventure"] },
  { slug: "talamali-hill", name: "Talamali Hill", kind: "Valley", image: img.talamali, blurb: "Open green meadows and wide valley views, marked by the giant TALAMALI letters.", packages: ["koraput-explorer", "koraput-araku-valley-adventure"] },
  { slug: "kolab-dam", name: "Kolab Dam", kind: "Reservoir", image: null, blurb: "A large reservoir on the Kolab river, framed by hills — calm water and open evening skies.", packages: ["koraput-explorer", "koraput-araku-valley-adventure"] },
  { slug: "araku-valley", name: "Araku Valley", kind: "Valley", image: null, blurb: "A hill valley in the Eastern Ghats known for coffee estates, viewpoints and cool weather.", packages: ["koraput-araku-valley-adventure"] },
  { slug: "borra-caves", name: "Borra Caves", kind: "Caves", image: null, blurb: "Ancient limestone caves with dramatic formations, a highlight on the Araku route.", packages: ["koraput-araku-valley-adventure"] },
  { slug: "gupteswar-temple", name: "Gupteswar Temple", kind: "Temple", image: null, blurb: "A cave shrine to Lord Shiva set in forest above the Kolab river, a revered pilgrimage site.", packages: [] },
];

export const camping = [
  { id: "tent", label: "Tent arrangement", min: 400, max: 500, unit: "per person", perPerson: true },
  { id: "bonfire", label: "Bonfire", min: 200, max: 300, unit: "per bonfire", perPerson: false },
  { id: "chair", label: "Camping chair", min: 50, max: 50, unit: "per chair", perPerson: false, qty: true },
  { id: "sound", label: "Sound system", min: 500, max: 1000, unit: "per set", perPerson: false },
  { id: "stove", label: "Gas stove & utensils", min: 600, max: 1000, unit: "per set", perPerson: false },
  { id: "light", label: "Camping lighting", min: 100, max: 100, unit: "per set", perPerson: false },
  { id: "water", label: "Drinking water, 20 L", min: 100, max: 100, unit: "per can", perPerson: false, qty: true },
] as const;

export const gallery = [
  { src: img.talamali, alt: "Travel group seated in front of the TALAMALI sign on a green hilltop", place: "Talamali", tall: false },
  { src: img.hanuman, alt: "Group seated before the 108 ft Hanuman statue under blue skies", place: "Hanuman Statue", tall: true },
  { src: img.waterfallGroup, alt: "Travellers standing before a rocky forest waterfall", place: "Waterfalls", tall: true },
  { src: img.raniDuduma, alt: "Group at the carved wooden entrance of Rani Duduma", place: "Rani Duduma", tall: true },
  { src: img.forestFall, alt: "White waterfall tumbling through dense green forest", place: "Waterfalls", tall: false },
  { src: img.deomali, alt: "Traveller standing on a misty green ridge with clouds below", place: "Deomali", tall: false },
  { src: img.fields, alt: "Terraced green paddy fields below a forested hill", place: "Countryside", tall: false },
];

export const faqs = [
  { q: "Where do your tours start?", a: "Koraput tours include pickup and drop from the railway station or bus stand. Share your arrival point when you enquire." },
  { q: "Is the price per person?", a: "Koraput Explorer starts from ₹2,999 per person for groups of at least 7. Araku Valley group pricing depends on group size — request a quote." },
  { q: "Is my enquiry a confirmed booking?", a: "No. An enquiry starts the conversation. We confirm availability and the final quote with you directly before any booking." },
  { q: "Can you arrange camping on Deomali or Talamali?", a: "Yes. Tents, bonfire, chairs, lighting, cooking gear and water can be arranged. Prices shown are indicative and depend on location and group size." },
  { q: "When is the best time to visit Koraput?", a: "The monsoon and post-monsoon months bring full waterfalls and misty hills; winter brings clear, cool days for camping." },
];
