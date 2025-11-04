/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is now enabled by default in Next.js 15
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Turbopack configuration (replaces experimental.turbo)
  turbopack: {
    // Enable Turbopack for faster builds (optional)
  },
  
  // boshqa konfiguratsiyalar
};

export default nextConfig;
