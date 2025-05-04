/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '*.supabase.co',
      port: ''
    }]
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
