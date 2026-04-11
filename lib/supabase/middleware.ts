import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Supabase integration is disabled - pass through all requests
  return NextResponse.next({
    request,
  })
}
