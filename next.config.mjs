/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // هذا الخيار سيسمح برفع الموقع حتى لو فيه أخطاء تحذيرية
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;