import { clerkMiddleware } from '@clerk/nextjs/server';

// Satellite domain configuration is handled entirely via environment variables:
// NEXT_PUBLIC_CLERK_IS_SATELLITE=true
// NEXT_PUBLIC_CLERK_SIGN_IN_URL=...
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=...
export default clerkMiddleware();

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
