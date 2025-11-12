/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/MatsyaSurfschool",
  assetPrefix: "/MatsyaSurfschool/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,   // <-- IMPORTANT FOR GITHUB PAGES
}

export default nextConfig
