// =============================================================================
// EDIT YOUR LINKS HERE
// Replace every "#" below with your real Etsy / eBay / social URLs.
// =============================================================================

export const BRAND_NAME = 'FLY OUI'

// Main storefront links (used in the hero + footer)
export const STORE_LINKS = {
  etsy: '#', // <-- paste your Etsy shop URL here
  ebay: '#', // <-- paste your eBay store URL here
}

// Social links (used in the footer)
export const SOCIAL_LINKS = {
  instagram: '#', // <-- paste your Instagram URL here
  tiktok: '#', // <-- paste your TikTok URL here
}

export type Product = {
  id: string
  title: string
  type: 'T-Shirt' | 'Hoodie'
  description: string
  image: string
  // Per-product buy links — replace "#" with the exact listing URLs.
  etsyUrl: string
  ebayUrl: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'midnight-tee',
    title: 'White Oversized Tee',
    type: 'T-Shirt',
    description:
      'Boxy, drop-shoulder cut in off-white heavyweight cotton. Baggy fit to feel the cool breeze in summer.',
    image: '/images/product-tee-1.png',
    etsyUrl: '#', // <-- Etsy listing
    ebayUrl: '#', // <-- eBay listing
  },
  {
    id: 'core-hoodie',
    title: 'Large Print Hoodie',
    type: 'Hoodie',
    description:
      '350gsm 100% Heavy cottom with a structured hood and matte drawcords. Built to outlast trends.',
    image: '/images/product-hoodie-1.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'static-tee',
    title: 'Static Graphic Tee',
    type: 'T-Shirt',
    description:
      'Dark grey cotton with large print black logo on chest. Vinyl pressed in small batches for a lived-in feel.',
    image: '/images/product-tee-2.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'eclipse-hoodie',
    title: 'White Zip Hoodie',
    type: 'Hoodie',
    description:
      'Cream-toned full-zip, front pockets, with a discrete pocket sized logo. Layer-ready year round.',
    image: '/images/product-hoodie-2.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'Strap-tee',
    title: 'Classic Imperfect Tee',
    type: 'T-Shirt',
    description:
      'Hand-finished. Intentionally flawed. No two alike. Made by hand, not by algorithm. Embrace the subtle flaws—thats where the character lives. This vinyl tee is raw, irregular, and entirely unique to you. Wear the discrepancy.  .',
    image: '/images/product-tee-3.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'shadow-hoodie',
    title: 'Shadow Pullover Hoodie',
    type: 'Hoodie',
    description:
      'Oversized black pullover with small discrete white logo. Heavyweight comfort 100% cotton.',
    image: '/images/product-hoodie-3.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
]
