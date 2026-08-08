import Image from 'next/image'
import { PRODUCTS, type Product } from '@/lib/site'

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl hover:shadow-black/40">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur">
          {product.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{product.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
          {product.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={product.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Buy on Etsy
          </a>
          <a
            href={product.ebayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-secondary"
          >
            Buy on eBay
          </a>
        </div>
      </div>
    </article>
  )
}

export function ProductGrid() {
  return (
    <section id="collection" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Collection
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Tees &amp; Hoodies
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
          Most pieces are limited-run and sold through our verified Etsy and eBay storefronts. Tap a
          product to buy where you shop.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
