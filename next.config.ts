/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: '', // Important: no basePath for username.github.io
  assetPrefix: './',
  // basePath: '/frantisekmichalsebestyen.github.io', // Uncomment if you want to use basePath
}

export default nextConfig
