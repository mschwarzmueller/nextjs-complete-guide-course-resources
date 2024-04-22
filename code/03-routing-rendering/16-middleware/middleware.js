import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

export const config = {
  matcher: '/news'
};