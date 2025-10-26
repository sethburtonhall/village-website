import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  website: z.string().max(0, 'Bot detected'), // Honeypot field - should be empty
});
