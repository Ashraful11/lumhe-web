import type { HomeContent } from '../types';

export const homeContent: HomeContent = {
  heroTickerItems: [
    'Weddings',
    'Birthdays',
    'Engagements',
    'Kitty Parties',
    'Baby Showers',
    'Anniversaries',
    'Housewarming',
    'Farewell Parties',
    'Corporate Events',
    'Griha Pravesh',
  ],
  heroCards: [
    { badge: 'WEDDING', title: 'Mehendi + Sangeet + Reception', subtitle: '3 functions, 1 invite' },
    { badge: 'BIRTHDAY', title: 'Isha turns 25', subtitle: '42 guests confirmed' },
    { badge: 'KITTY PARTY', title: 'Saturday Brunch', subtitle: '12/12 confirmed' },
  ],
  heroDescription:
    'Upload your invitation in any format. Find and connect with guests by name, phone, or email. Track RSVPs per function, share Moments, and collect digital shagun — all in one place. Completely free.',
  testimonials: {
    featured: {
      name: 'Ananya Sharma',
      role: 'Wedding Host',
      quote:
        'Managing RSVPs for 5 different functions was a nightmare on WhatsApp. With Lumhe, I knew exactly who was coming to which function. The nudge reminders saved me dozens of follow-up calls.',
      avatar: 'A',
      color: '#FF8A80',
      stats: [
        { number: '5', label: 'functions managed', color: 'var(--color-primary)' },
        { number: '250+', label: 'guests tracked', color: '#8B5CF6' },
        { number: '0', label: 'follow-up calls', color: '#14B8A6' },
      ],
    },
    pair: [
      {
        name: 'Vikram Patel',
        role: 'Birthday Organiser',
        quote:
          'I uploaded my Canva-designed invite, found all my friends inside Lumhe, and had RSVPs within hours. The Moments feature meant all party photos were in one beautiful album.',
        avatar: 'V',
        color: '#3B82F6',
        tag: 'Moments',
        tagColor: 'rgba(59,130,246,0.06); color: #3B82F6',
      },
      {
        name: 'Meera Iyer',
        role: 'Kitty Party Host',
        quote:
          'Our kitty group uses Lumhe every month now. Upload the invite, everyone gets notified, RSVPs with one tap. Digital Lifafa made collecting contributions so easy — no cash tracking!',
        avatar: 'M',
        color: '#81C784',
        tag: 'Digital Lifafa',
        tagColor: 'rgba(255,255,255,0.15); color: white',
        accent: true,
      },
    ],
  },
  footerTagline: 'Made with \u2665 in India',
  socialProofText: 'Trusted by 2,500+ families & event hosts',
};
