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
    title: 'Midnight Oversized Tee',
    type: 'T-Shirt',
    description:
      'Boxy, drop-shoulder cut in off-white heavyweight cotton. Understated by day, statement by night.',
    image: '/images/product-tee-1.png',
    etsyUrl: '#', // <-- Etsy listing
    ebayUrl: '#', // <-- eBay listing
  },
  {
    id: 'core-hoodie',
    title: 'Core Heavyweight Hoodie',
    type: 'Hoodie',
    description:
      'Our signature 450gsm brushed fleece with a structured hood and matte drawcords. Built to outlast trends.',
    image: '/images/product-hoodie-1.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'static-tee',
    title: 'Static Graphic Tee',
    type: 'T-Shirt',
    description:
      'Deep black cotton with a hand-drawn red chest mark. Screen printed in small batches for a lived-in feel.',
    image: '/images/product-tee-2.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'eclipse-hoodie',
    title: 'Eclipse Zip Hoodie',
    type: 'Hoodie',
    description:
      'Cream-toned full-zip with a garment-dyed finish and antique metal hardware. Layer-ready year round.',
    image: '/images/product-hoodie-2.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'faded-tee',
    title: 'Faded Wash Tee',
    type: 'T-Shirt',
    description:
      'Stone-washed grey with a vintage back print. Every piece fades a little differently — that is the point.',
    image: '/images/product-tee-3.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
  {
    id: 'shadow-hoodie',
    title: 'Shadow Pullover Hoodie',
    type: 'Hoodie',
    description:
      'Oversized black pullover with a tonal red embroidered logo. Heavyweight comfort with a sharp silhouette.',
    image: '/images/product-hoodie-3.png',
    etsyUrl: '#',
    ebayUrl: '#',
  },
]
