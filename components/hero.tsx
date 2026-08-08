import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { BRAND_NAME, STORE_LINKS } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Lifestyle background image */}
      <Image
        src="/images/hero.png"
        alt="Model wearing a premium charcoal hoodie in an urban setting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Legibility gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          Independent Apparel
        </span>

        <h1 className="max-w-4xl font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-balance text-foreground sm:text-7xl lg:text-8xl">
          {BRAND_NAME}
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          From custom prints to small-batch original designs. 
          Heavyweight apparel built for people who wear their identity on their sleeve
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={STORE_LINKS.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Shop on Etsy
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={STORE_LINKS.ebay}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-foreground"
          >
            Shop on eBay
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
