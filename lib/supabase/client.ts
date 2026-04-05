import { createBrowserClient } from '@supabase/ssr'

/**
 * Creates a Supabase browser client if credentials are available.
 * Returns null if Supabase is not configured.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return null if Supabase is not configured
  if (!url || !anonKey) {
    return null
  }

  return createBrowserClient(url, anonKey)
}
