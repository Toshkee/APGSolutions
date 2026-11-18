import { NextResponse, type NextRequest } from "next/server";

// Every page lives in app/[lang]. English keeps the plain addresses ("/about") and is served from "/en/about"
// behind the scenes; Spanish is at "/es/about". Visitors are never sent to a language automatically: they pick
// it with the switch in the nav.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/es" || pathname.startsWith("/es/")) return;

  // "/en/..." would be a second copy of every English page, so it goes to the plain address
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js internals and real files (images, video, fonts, robots.txt, sitemap.xml, icons). Other addresses with
  // a dot, like "/wp-login.php", still go through so they get the site's own 404 page.
  matcher: [
    "/((?!_next|__nextjs|.*\\.(?:avif|css|gif|ico|jpe?g|js|json|map|mp3|mp4|pdf|png|svg|txt|webm|webmanifest|webp|woff2?|xml)$).*)",
  ],
};
