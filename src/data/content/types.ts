export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  color: string;
}

export interface HomeContent {
  heroTickerItems: string[];
  heroCards: { badge: string; title: string; subtitle: string }[];
  heroDescription: string;
  testimonials: { featured: Testimonial & { stats: { number: string; label: string; color: string }[] }; pair: (Testimonial & { tag: string; tagColor: string; accent?: boolean })[] };
  footerTagline: string;
  socialProofText: string;
}
