import { LayoutDashboard, CalendarPlus, Share2, Users, Send, Sparkles } from 'lucide-react';

export const steps = [
  {
    title: 'Create a free account',
    description: 'Start your community journey today.',
  },
  {
    title: 'Create your first event',
    description: 'Easily create and manage your events.',
  },
  {
    title: 'Share a link',
    description: 'Invite sign-ups using a link.',
  },
];

export const features = [
  {
    title: 'Admin Dashboard',
    description: 'Create an account to manage your events and group sign-ups in one place.',
    icon: LayoutDashboard,
  },
  {
    title: 'Event Creation',
    description: 'Set up events with customizable slots for tasks, items, or time blocks.',
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
    title: 'Notifications',
    description: 'Automatic updates for admins and participants about sign-ups and changes.',
    icon: Send,
  },
  {
    title: 'Premium Features',
    description:
      'Advanced analytics, role permissions, brand customization, priority support, and more.',
    icon: Sparkles,
  },
];

export const communities = [
  {
    title: 'Nonprofits',
    icon: 'HeartHandshake',
  },
  {
    title: 'Schools',
    icon: 'School',
  },
  {
    title: 'Volunteers',
    icon: 'Users',
  },
  {
    title: 'Teams',
    icon: 'Trophy',
  },
  {
    title: 'Churches',
    icon: 'Church',
  },
  {
    title: 'Neighborhoods',
    icon: 'MapPin',
  },
  {
    title: 'Offices',
    icon: 'Briefcase',
  },
  {
    title: 'Pot Lucks',
    icon: 'CookingPot',
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
      '3 Total Events',
      '15 Slots per Event',
      'Email Notifications',
      'Standard Support',
    ],
  },
  {
    title: 'Individual',
    outsetaUrl: 'https://village.outseta.com/auth?widgetMode=register&planUid=jW74MZmq#o-anonymous',
    price: 7,
    subheader: 'Best for small teams and clubs',
    features: [
      '3 Seats',
      '1 Admin & 2 Team Members',
      'Unlimited Events',
      '250 Slots',
      'Email and SMS Notifications',
      'Event Analytics',
      'Basic Theme Customization',
      'Priority Support',
    ],
    disclaimer: 'More Analytics Coming Soon!',
  },
  {
    title: 'Organization',
    outsetaUrl: 'https://village.outseta.com/auth?widgetMode=register&planUid=EWB46bQr#o-anonymous',
    price: 25,
    subheader: 'Best for schools, nonprofits, and orgs',
    features: [
      'Unlimited Seats',
      'Unlimited Events',
      'Unlimited Slots',
      'Email and SMS Notifications',
      'Event Analytics',
      'Full Custom Branding',
      'Priority Support',
      'Export Sign-ups as a CSV',
    ],
    disclaimer: 'Granular Role Permissions & Advanced Analytics Coming Soon!',
  },
];
