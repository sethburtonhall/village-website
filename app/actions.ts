'use server';

import { headers } from 'next/headers';
import { waitlistSchema } from '@/lib/schemas';
import { mailingListIds } from '@/lib/constants';

interface LoopsResponse {
  success: boolean;
  message?: string;
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string, maxAttempts: number = 3, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxAttempts) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60000);

export async function addToWaitlist(
  email: string,
  website: string = '',
  timestamp?: number
) {
  // Get IP address for rate limiting
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';
  
  // Rate limiting - 3 attempts per minute per IP
  if (!checkRateLimit(ip)) {
    console.log('Rate limit exceeded:', { ip, email });
    return {
      success: false,
      message: 'Too many attempts. Please try again later.',
    };
  }

  // Validate the input
  const result = waitlistSchema.safeParse({ email, website });
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }

  // Honeypot check - if website field is filled, it's a bot
  if (website && website.trim() !== '') {
    console.log('Honeypot triggered:', { ip, email, website });
    return {
      success: false,
      message: 'Invalid submission',
    };
  }

  // Time-based validation - reject submissions faster than 2 seconds
  if (timestamp) {
    const submissionTime = Date.now() - timestamp;
    if (submissionTime < 2000) {
      console.log('Submission too fast:', { ip, email, submissionTime });
      return {
        success: false,
        message: 'Please slow down and try again.',
      };
    }
  }

  // Loops
  const formBody = `email=${encodeURIComponent(email)}&mailingLists=${encodeURIComponent(mailingListIds)}`;

  try {
    console.log('Valid submission to Loops:', { ip, email, mailingListIds });

    const response = await fetch(
      'https://app.loops.so/api/newsletter-form/cm6ae3ywd00sv655eyr9ub70g',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      }
    );

    const data = (await response.json()) as LoopsResponse;
    console.log('Loops response:', {
      status: response.status,
      statusText: response.statusText,
      data,
      headers: Object.fromEntries(response.headers.entries()),
    });

    if (!data.success) {
      console.log('Loops error:', data);
      return {
        success: false,
        message: data.message || 'Unable to join waitlist. Please try again.',
      };
    }

    return {
      success: true,
      message: "You're on the list! We'll keep you updated on Village's progress.",
    };
  } catch (error) {
    console.error('Waitlist error:', error);
    return {
      success: false,
      message: 'Unable to join waitlist. Please try again later.',
    };
  }
}
