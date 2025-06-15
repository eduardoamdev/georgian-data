import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales: Array<string> = ["en", "ka"];

const defaultLocale: string = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameParts: string[] = pathname.split("/");

  const locale: string = pathnameParts[1];

  if (!supportedLocales.includes(locale)) {
    console.log("Locale not supported, redirecting to default");

    const newUrl = request.nextUrl.clone();

    newUrl.pathname = `/${defaultLocale}${pathname}`;

    return NextResponse.redirect(newUrl);
  }

  console.log(`Middleware running with locale: ${locale}`);

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
