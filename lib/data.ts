import {
  LayoutDashboard,
  CalendarPlus,
  Share2,
  Users,
  Palette,
  Sparkles,
  Form,
  Copy,
  MailCheck,
  FileSpreadsheet,
  HeartHandshake,
  School,
  Trophy,
  Church,
  Briefcase,
  MapPin,
  CookingPot,
  ListTodo,
  UserCog,
  ClockCheck,
  Mails,
} from 'lucide-react';

export const steps = [
  {
    title: 'Create a free account',
    description: 'Up and running in seconds. No credit card, no commitment.',
  },
  {
    title: 'Create your first event',
    description: "Set up your event in minutes. Add details, set slot limits, and you're ready.",
  },
  {
    title: 'Share a link',
    description:
      'Send a clean, simple link. Participants sign up in seconds — no account needed on their end.',
  },
];

export const coreFeatures = [
  {
    title: 'Event Creation',
    description:
      "Create an event in minutes. Set your date, add time slots, and you're done — no manual required.",
    icon: CalendarPlus,
  },
  {
    title: 'Sharable Event Link',
    description:
      "Every event gets its own clean, shareable link — something you'll actually want to send.",
    icon: Share2,
  },
  {
    title: 'No-Account Sign-ups',
    description:
      'Participants just click and sign up. No account, no password, no reason to bail halfway through.',
    icon: Users,
  },
  {
    title: 'Notifications & Reminders',
    description:
      'Reliable notifications andreminders go out automatically — so participants actually show up.',
    icon: MailCheck,
  },
  {
    title: 'Realtime Updates',
    description:
      "See sign-ups the moment they happen. No refreshing, no guessing — just a live view of who's in.",
    icon: ClockCheck,
  },
  {
    title: 'More Features',
    description:
      'Plus timezone-aware scheduling, calendar sync, admin controls, and saved favorites — the details that make organizing smoother.',
    icon: Sparkles,
  },
];

export const premiumFeatures = [
  {
    title: 'Advanced templates',
    description:
      "Build events faster with templates designed for your community's most common needs.",
    icon: Form,
  },
  {
    title: 'Event duplication',
    description:
      'Running recurring events? Duplicate any event in one click instead of rebuilding from scratch every time.',
    icon: Copy,
  },
  {
    title: 'Check-in mode',
    description:
      'Mark attendees present right from your phone as they walk in. No clipboard needed.',
    icon: ListTodo,
  },
  {
    title: 'Export sign-ups as CSV',
    description:
      'Export your full sign-up list to a spreadsheet anytime — your data, your format, your control.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Group messaging',
    description:
      'Need to send a last-minute update? Message every participant in one go, right from the event.',
    icon: Mails,
  },
  {
    title: 'Realtime dashboard',
    description:
      'See exactly how your events are performing — sign-up trends, activity, and insights updated live.',
    icon: LayoutDashboard,
  },
  {
    title: 'White-label branding',
    description:
      "Put your organization's name and logo on every event page — so it looks like you, not a third-party tool.",
    icon: Palette,
  },
  {
    title: 'Priority support',
    description:
      'Skip the queue. Priority support means a real response when something needs sorting.',
    icon: UserCog,
  },
];

export const communities = [
  {
    title: 'Nonprofits',
    icon: HeartHandshake,
  },
  {
    title: 'Schools',
    icon: School,
  },
  {
    title: 'Volunteers',
    icon: Users,
  },
  {
    title: 'Teams',
    icon: Trophy,
  },
  {
    title: 'Churches',
    icon: Church,
  },
  {
    title: 'Neighborhoods',
    icon: MapPin,
  },
  {
    title: 'Offices',
    icon: Briefcase,
  },
  {
    title: 'Pot Lucks',
    icon: CookingPot,
  },
];

export const plans = [
  {
    title: 'Free',
    price: 0,
    subheader: 'Best for casual event organizers',
    features: [
      '1 Admin',
      '3 active events',
      '15 slots per event',
      'All Core features +',
      'Standard support',
    ],
  },
  {
    title: 'Individual',
    price: 7,
    subheader: 'Best for small teams & clubs',
    features: [
      '1 Admin',
      '1 Member',
      'Unlimited events',
      '50 slots per event',
      'All Free features +',
      'Advanced templates',
      'Real-time dashboard',
      'Basic analytics',
      'Group messaging',
      'White-label branding',
      'Priority support',
    ],
  },
  {
    title: 'Organization',
    price: 15,
    subheader: 'Best for schools, nonprofits, & orgs',
    features: [
      '1 Admin',
      '10 Members',
      'Unlimited events',
      'Unlimited slots',
      'All Individual features +',
      'Advanced Analytics',
      'Event duplication',
      'Check-in mode',
      'Export sign-ups as CSV',
      'Priority support',
    ],
  },
];
