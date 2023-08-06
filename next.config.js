/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/test-react-frontend/",
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
    reactStrictMode: true
};

module.exports = nextConfig;
