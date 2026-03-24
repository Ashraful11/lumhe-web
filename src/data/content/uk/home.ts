import type { HomeContent } from '../types';

export const homeContent: HomeContent = {
  heroTickerItems: [
    'Weddings',
    'Birthdays',
    'Engagements',
    'Christenings',
    'Baby Showers',
    'Anniversaries',
    'Garden Parties',
    'Corporate Events',
    'Hen & Stag Dos',
    'Celebrations',
  ],
  heroCards: [
    { badge: 'WEDDING', title: 'Ceremony + Breakfast + Evening Do', subtitle: '3 events, 1 invite' },
    { badge: 'BIRTHDAY', title: 'Oliver turns 40', subtitle: '38 guests confirmed' },
    { badge: 'CHRISTENING', title: 'Baby Archie', subtitle: '24/25 confirmed' },
  ],
  heroDescription:
    'Upload your invitation in any format. Find and connect with guests by name, phone, or email. Track RSVPs per event, share Moments, and send digital gifts — all in one place. Completely free.',
  testimonials: {
    featured: {
      name: 'Emma Clarke',
      role: 'Wedding Host',
      quote:
        'Coordinating RSVPs for the church service, wedding breakfast, and evening reception was a headache. Lumhe made it effortless — I knew exactly who was attending what.',
      avatar: 'E',
      color: '#FF8A80',
      stats: [
        { number: '3', label: 'events managed', color: 'var(--color-primary)' },
        { number: '150+', label: 'guests tracked', color: '#8B5CF6' },
        { number: '0', label: 'chasing texts', color: '#14B8A6' },
      ],
    },
    pair: [
      {
        name: 'Oliver Singh',
        role: 'Birthday Host',
        quote:
          "Designed my invite, uploaded it to Lumhe, and had RSVPs sorted within the day. The Moments album means I've got everyone's photos from the night — brilliant.",
        avatar: 'O',
        color: '#3B82F6',
        tag: 'Moments',
        tagColor: 'rgba(59,130,246,0.06); color: #3B82F6',
      },
      {
        name: 'Sophie Bennett',
        role: 'Garden Party Host',
        quote:
          "Our annual summer garden party runs through Lumhe now. One invite, instant RSVPs, and guests can send digital gifts too. Couldn't be simpler!",
        avatar: 'S',
        color: '#81C784',
        tag: 'Digital Lifafa',
        tagColor: 'rgba(255,255,255,0.15); color: white',
        accent: true,
      },
    ],
  },
  footerTagline: 'Made with \u2665 by Lumhe',
  socialProofText: 'Trusted by 2,500+ families & event hosts',
};
