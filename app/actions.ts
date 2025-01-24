'use server';

import { waitlistSchema } from '@/lib/schemas';
import { mailingListIds } from '@/lib/constants';

interface LoopsResponse {
  success: boolean;
  message?: string;
}

export async function addToWaitlist(email: string) {
  // Validate the input
  const result = waitlistSchema.safeParse({ email });
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }

  // Loops
  const formBody = `email=${encodeURIComponent(email)}&mailingLists=${encodeURIComponent(mailingListIds)}`;

  try {
    console.log('Sending request to Loops:', { email, mailingListIds });

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
