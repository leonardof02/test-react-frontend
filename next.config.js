/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: "/test-react-frontend",
    basePath: "/test-react-frontend",
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
    reactStrictMode: true
};

module.exports = nextConfig;
