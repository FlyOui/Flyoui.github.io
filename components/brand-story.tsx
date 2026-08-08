import Image from 'next/image'

export function BrandStory() {
  return (
    <section id="story" className="scroll-mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
        {/* Studio image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border lg:aspect-square">
          <Image
            src="/images/studio.png"
            alt="Behind-the-scenes look at the design studio and folded garments"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Text block */}
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
            Made in small batches, meant to last
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
            <p>
              We started with a simple frustration: modern apparel overrun by non-breathable, stretchy synthetics. 
              So we built the opposite. Heavyweight, garment-dyed premium cotton apparel that breathes naturally, 
              meticulously crafted using hands-on vinyl printing, cutting, weeding, and pressing.
              No two pieces are identical because every piece is finished by hand 
              and labeled with its exact production number.
            </p>
            <p>
              Every design begins with a simple idea and ends as a limited run. No mass
              production, no filler, no throwaway drops. Just considered pieces we&apos;d proudly
              wear ourselves. Not mass-produced. Not symmetrical. Not sorry. Each piece carries its own unique marks 
              from the making process, making your shirt truly one-of-a-kind. Raw, irregular, and entirely unique to you.
               Wear the discrepancy. The slight variations aren't mistakes, they're the signature.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Fabric</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">280 - 450gsm</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Batches</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">Limited</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Finish</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">By hand</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )

}
