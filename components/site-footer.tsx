import { BRAND_NAME, SOCIAL_LINKS, STORE_LINKS } from '@/lib/site'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.1-2.82h-3.2v11.9a2.35 2.35 0 0 1-2.35 2.35 2.35 2.35 0 1 1 .66-4.6V9.4a5.56 5.56 0 0 0-.66-.04 5.55 5.55 0 1 0 5.55 5.55V8.9a7.5 7.5 0 0 0 4.35 1.39V7.1a4.28 4.28 0 0 1-3.25-1.28z" />
    </svg>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="font-display text-xl font-bold uppercase tracking-[0.25em] text-foreground">
              {BRAND_NAME}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              Independent apparel, made in small batches. Available exclusively through our Etsy and
              eBay storefronts.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Shop
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={STORE_LINKS.etsy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Etsy Storefront
                </a>
              </li>
              <li>
                <a
                  href={STORE_LINKS.ebay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  eBay Store
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Follow
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-secondary"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-secondary"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {BRAND_NAME}. All rights reserved.
          </p>
          <p>Designed independently. Sold on Etsy &amp; eBay.</p>
        </div>
      </div>
    </footer>
  )
}
