import { LayoutDashboard, CalendarPlus, Share2, Users, Send, TabletSmartphone } from 'lucide-react';

export const quickFeatures = [
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
    description: 'Invite sign-ups using a single link.',
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
    title: 'Email Notifications',
    description: 'Automatic email updates for admins and participants about sign-ups and changes.',
    icon: Send,
  },
  {
    title: 'Mobile-Friendly Design',
    description: 'Clean, intuitive interface optimized for all devices.',
    icon: TabletSmartphone,
  },
];

export const useCases = [
  {
    title: 'Nonprofits',
    icon: 'HeartHandshake',
  },
  {
    title: 'Schools',
    icon: 'School',
  },
  {
    title: 'Communities',
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
    title: 'Offices',
    icon: 'Briefcase',
  },
];

export const plans = [
  {
    title: 'Free',
    price: 0,
    features: ['1 Admin', '3 Events', '15 Sign-up Slots', 'Basic Notifications'],
  },
  {
    title: 'Individuals',
    price: 5,
    features: ['1 Admin', 'Unlimited Events', 'Unlimited Sign-ups', 'Advanced Notifications'],
  },
  {
    title: 'Organizations',
    price: 25,
    features: [
      '3 Admins',
      'Unlimited Events',
      'Unlimited Sign-ups',
      'Advanced Notifications',
      'Custom Branding',
      'Export Sign-ups as a CSV',
    ],
  },
];
