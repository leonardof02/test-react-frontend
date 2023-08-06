/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: "/",
    basePath: "/",
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
    reactStrictMode: true
};

module.exports = nextConfig;
