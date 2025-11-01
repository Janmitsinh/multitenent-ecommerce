import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside/public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|media/|[\w-]+\.\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  // Extract the hostName (e.g. "krutarth.zapsell.com")
  const hostname = req.headers.get("host") || "";

  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "";

  // something.zapsell.com
  if (hostname.endsWith(`.${rootDomain}`)) {
    const tenantSlug = hostname.replace(`.${rootDomain}`, "");
    return NextResponse.rewrite(
      new URL(`/tenants/${tenantSlug}${url.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}
