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
    description: 'Start your community journey today.',
  },
  {
    title: 'Create your first event',
    description: 'Easily create & manage your events.',
  },
  {
    title: 'Share a link',
    description: 'Invite sign-ups using a link.',
  },
];

export const coreFeatures = [
  {
    title: 'Event Creation',
    description: 'Start with simple event creation.',
    icon: CalendarPlus,
  },
  {
    title: 'Sharable Event Link',
    description: 'Generate a unique link to share with your community members.',
    icon: Share2,
  },
  {
    title: 'No-Account Sign-ups',
    description:
      'Participants can sign up directly through the shared link without creating an account.',
    icon: Users,
  },
  {
    title: 'Notifications & Reminders',
    description: 'Automatic email notifications & reminders for event updates.',
    icon: MailCheck,
  },
  {
    title: 'Realtime Updates',
    description: 'Watch your event come to life as sign-ups happen in real-time.',
    icon: ClockCheck,
  },
  {
    title: 'More Features',
    description:
      'Timezone-aware events, Calendar integration, Admin signup management, & Favorite events.',
    icon: Sparkles,
  },
];

export const premiumFeatures = [
  {
    title: 'Advanced templates',
    description: 'Create custom events with advanced templates.',
    icon: Form,
  },
  {
    title: 'Event duplication',
    description: 'Duplicate events to save time and effort.',
    icon: Copy,
  },
  {
    title: 'Check-in mode',
    description: 'Track attendance with in-person check-in.',
    icon: ListTodo,
  },
  {
    title: 'Export sign-ups as CSV',
    description: 'Download sign-up data for your records.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Group messaging',
    description: 'Send messages to all participants at once.',
    icon: Mails,
  },
  {
    title: 'Realtime dashboard',
    description: 'Event activity & analytics in real-time.',
    icon: LayoutDashboard,
  },
  {
    title: 'White-label branding',
    description: 'Customize event pages with your own branding.',
    icon: Palette,
  },
  {
    title: 'Priority support',
    description: 'Get help faster with priority support.',
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
    outsetaUrl: 'https://village.outseta.com/auth?widgetMode=register&planUid=xmeJOPQV#o-anonymous',
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
    outsetaUrl: 'https://village.outseta.com/auth?widgetMode=register&planUid=jW74MZmq#o-anonymous',
    price: 7,
    subheader: 'Best for small teams & clubs',
    features: [
      '1 Admin',
      'Unlimited events',
      '50 slots per event',
      'All Free features +',
      'Advanced templates',
      'Real-time dashboard',
      'Basic analytics',
      'Group messaging',
      'Priority support',
    ],
    comingSoon: 'Team Members, SMS Notifications',
  },
  {
    title: 'Organization',
    outsetaUrl: 'https://village.outseta.com/auth?widgetMode=register&planUid=EWB46bQr#o-anonymous',
    price: 15,
    subheader: 'Best for schools, nonprofits, & orgs',
    features: [
      '1 Admin',
      'Unlimited events',
      'Unlimited slots',
      'All Individual features +',
      'Event duplication',
      'Check-in mode',
      'Export sign-ups as CSV',
      'White-label branding',
      'Priority support',
    ],
    comingSoon: 'Team Management, SMS Notifications, Advanced Analytics',
  },
];
