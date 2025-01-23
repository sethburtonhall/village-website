'use server';

import { createClient } from '@supabase/supabase-js';
import { waitlistSchema } from '@/lib/schemas';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function addToWaitlist(formData: FormData) {
  const email = formData.get('email');

  // Validate the input
  const result = waitlistSchema.safeParse({ email });
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }

  try {
    const { error } = await supabase.from('waitlist').insert([{ email: result.data.email }]);

    if (error) {
      if (error.code === '23505') {
        return {
          message: 'This email is already on the waitlist. Please try again.',
          success: false,
        };
      }
      return {
        message: 'Something went wrong. Please try again.',
        success: false,
      };
    }

    return {
      success: true,
      message: 'You have successfully joined the waitlist!',
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
    };
  }
}
