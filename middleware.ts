import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/dashboard")) {
    const isAuthed = request.cookies.get("admin_auth")?.value === "1";
    if (!isAuthed) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
