import type {NextRequest} from "next/server";

import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  console.log("1 token mid:", token);

  const isAuth = !!token;

  console.log("2 isAuth:", isAuth);

  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  console.log("3 isAuthPage:", isAuthPage);
  console.log("4 req.url:", req.url);

  if (!isAuth && !isAuthPage) {
    console.log("7 solucion?");

    return NextResponse.redirect(new URL(`/login`, req.url));
  }

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    console.log("5 problema!");

    return null;
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL(`/login`, req.url));
    // return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url));
  }
}

export const config = {
  matcher: ["/", "/login", "/post/:path*", "/auth"],
};
