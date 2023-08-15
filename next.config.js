/**
 * @type {import('next').NextConfig}
 */
const isDev = process.env.NODE_ENV !== 'production';
const nextConfig = {
  experimental: {
    appDir: false,
  },
  basePath: isDev ? '' : '/metaversus-app',
  assetPrefix: isDev ? '' : '/metaversus-app/',
};

module.exports = nextConfig;
