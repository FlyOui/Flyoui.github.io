import { BRAND_NAME, STORE_LINKS } from '@/lib/site'

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold uppercase tracking-[0.25em] text-foreground"
        >
          {BRAND_NAME}
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#collection" className="transition-colors hover:text-foreground">
            Collection
          </a>
          <a href="#story" className="transition-colors hover:text-foreground">
            Our Story
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={STORE_LINKS.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground sm:inline-block"
          >
            Etsy
          </a>
          <a
            href={STORE_LINKS.ebay}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Shop Now
          </a>
        </div>
      </nav>
    </header>
  )
}
