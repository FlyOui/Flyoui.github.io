/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Keeps your current TypeScript setting
  },
  images: {
    unoptimized: true, // Keeps your current Image setting (required for GitHub)
  },
  output: 'export', // Required: Tells Next.js to generate flat HTML files for GitHub
  devIndicators: false, // Required: Completely disables the Dev Tools UI indicator
};

export default nextConfig;
