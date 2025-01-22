'use server';

import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function addToWaitlist(
  prevState: { message?: string; success?: boolean } | null,
  formData: FormData
) {
  const email = formData.get('email');

  const result = schema.safeParse({ email });

  if (!result.success) {
    return { message: 'Invalid email address', success: false };
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

    return { message: 'You have successfully joined the waitlist!', success: true };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      success: false,
    };
  }
}
