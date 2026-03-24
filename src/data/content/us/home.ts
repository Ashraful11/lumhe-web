import type { HomeContent } from '../types';

export const homeContent: HomeContent = {
  heroTickerItems: [
    'Weddings',
    'Birthdays',
    'Engagements',
    'Baby Showers',
    'Bridal Showers',
    'Graduations',
    'Thanksgiving Dinners',
    'Corporate Events',
    'Retirement Parties',
    'Celebrations',
  ],
  heroCards: [
    { badge: 'WEDDING', title: 'Rehearsal + Ceremony + Reception', subtitle: '3 events, 1 invite' },
    { badge: 'BIRTHDAY', title: 'Jake turns 30', subtitle: '52 guests confirmed' },
    { badge: 'GRADUATION', title: 'Class of 2026', subtitle: '28/30 confirmed' },
  ],
  heroDescription:
    'Upload your invitation in any format. Find and connect with guests by name, phone, or email. Track RSVPs per event, share Moments, and send digital gifts — all in one place. Completely free.',
  testimonials: {
    featured: {
      name: 'Sarah Mitchell',
      role: 'Wedding Host',
      quote:
        'Managing RSVPs for the rehearsal dinner, ceremony, and reception was overwhelming before Lumhe. Now I know exactly who is coming to which event. The reminders saved me hours.',
      avatar: 'S',
      color: '#FF8A80',
      stats: [
        { number: '3', label: 'events managed', color: 'var(--color-primary)' },
        { number: '180+', label: 'guests tracked', color: '#8B5CF6' },
        { number: '0', label: 'follow-up texts', color: '#14B8A6' },
      ],
    },
    pair: [
      {
        name: 'Marcus Johnson',
        role: 'Birthday Host',
        quote:
          "Uploaded my invite, found everyone on Lumhe, and had RSVPs within hours. The Moments feature meant all party photos ended up in one gorgeous album — not scattered across texts.",
        avatar: 'M',
        color: '#3B82F6',
        tag: 'Moments',
        tagColor: 'rgba(59,130,246,0.06); color: #3B82F6',
      },
      {
        name: 'Emily Rodriguez',
        role: 'Event Coordinator',
        quote:
          'We use Lumhe for every client event now. Send the invite, track RSVPs, collect digital gifts — all in one platform. Our clients love the experience!',
        avatar: 'E',
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
