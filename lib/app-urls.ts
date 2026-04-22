/**
 * Utility functions for handling app URLs across different environments
 */

/**
 * Get the base app URL for the current environment
 */
export function getAppUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.usevillage.app';
}

/**
 * Get the sign-up URL for the current environment
 */
export function getSignUpUrl(): string {
  return process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? `${getAppUrl()}/register`;
}

/**
 * Get the sign-in URL for the current environment
 */
export function getSignInUrl(): string {
  return process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? `${getAppUrl()}/login`;
}

/**
 * Get the account URL for the current environment
 */
export function getAccountUrl(): string {
  return `${getAppUrl()}/account`;
}
