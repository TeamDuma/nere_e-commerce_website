import { NextRequest, NextResponse } from 'next/server';

const allowedPaths = ['/', '/contact-us', '/home', '/sustainability'];
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (allowedPaths.includes(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
  matcher: '/((?!api|_next|static|favicon.ico).*)',
};
