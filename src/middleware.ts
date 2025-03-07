// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   const path = request.nextUrl.pathname;
  // Define public paths
  //   const isPublicPath = ["/auth/login", "/auth/signup", "/"].includes(path);
  // Get token from cookies
  //   const token = request.cookies.get("user_token")?.value || "";
  // Redirect logic
  //   if (isPublicPath) {
  //     return NextResponse.redirect(new URL("/events", request.url));
  //   }
  //   if (!isPublicPath) {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/events/:path*", "/auth/login", "/auth/signup", "/profile"],
};
