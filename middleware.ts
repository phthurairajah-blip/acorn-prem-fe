import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthed = request.cookies.get("admin_auth")?.value === "1";

  if (pathname.startsWith("/admin/dashboard")) {
    if (!isAuthed) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  if (
    pathname === "/admin" ||
    pathname.startsWith("/admin/forgot-password") ||
    pathname.startsWith("/admin/reset-password")
  ) {
    if (isAuthed) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/dashboard";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/forgot-password",
    "/admin/reset-password",
    "/admin/dashboard/:path*",
  ],
};
