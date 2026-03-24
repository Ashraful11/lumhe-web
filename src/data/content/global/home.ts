import type { HomeContent } from '../types';

export const homeContent: HomeContent = {
  heroTickerItems: [
    'Weddings',
    'Birthdays',
    'Engagements',
    'Baby Showers',
    'Anniversaries',
    'Housewarmings',
    'Graduations',
    'Farewell Parties',
    'Corporate Events',
    'Celebrations',
  ],
  heroCards: [
    { badge: 'WEDDING', title: 'Sarah & James', subtitle: '120 guests confirmed' },
    { badge: 'BIRTHDAY', title: 'Emma turns 30', subtitle: '45 guests confirmed' },
    { badge: 'CELEBRATION', title: 'Annual Gala', subtitle: '8/10 confirmed' },
  ],
  heroDescription:
    'Upload your invitation in any format. Find and connect with guests by name, phone, or email. Track RSVPs per event, share Moments, and send digital gifts — all in one place. Completely free.',
  testimonials: {
    featured: {
      name: 'Sarah Chen',
      role: 'Wedding Host',
      quote:
        'Managing RSVPs for multiple wedding events was chaos before Lumhe. Now I know exactly who is coming to which event. The reminders saved me hours of follow-up calls.',
      avatar: 'S',
      color: '#FF8A80',
      stats: [
        { number: '4', label: 'events managed', color: 'var(--color-primary)' },
        { number: '200+', label: 'guests tracked', color: '#8B5CF6' },
        { number: '0', label: 'follow-up calls', color: '#14B8A6' },
      ],
    },
    pair: [
      {
        name: 'James Okafor',
        role: 'Birthday Organiser',
        quote:
          'I uploaded my custom invite, found all my friends inside Lumhe, and had RSVPs within hours. The Moments feature meant all party photos were in one beautiful album.',
        avatar: 'J',
        color: '#3B82F6',
        tag: 'Moments',
        tagColor: 'rgba(59,130,246,0.06); color: #3B82F6',
      },
      {
        name: 'Maria Santos',
        role: 'Event Planner',
        quote:
          'We use Lumhe for every client event now. Upload the invite, everyone gets notified, RSVPs with one tap. Digital Lifafa made collecting gifts so easy — completely seamless!',
        avatar: 'M',
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
