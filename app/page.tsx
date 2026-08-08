import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { BrandStory } from '@/components/brand-story'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <ProductGrid />
      <BrandStory />
      <SiteFooter />
    </main>
  )
}
