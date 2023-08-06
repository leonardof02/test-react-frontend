/** @type {import('next').NextConfig} */
const nextConfig = {
    
    // From Github Repo
    // assetPrefix: "/test-react-frontend",
    // basePath: "/test-react-frontend",

    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
    reactStrictMode: true
};

module.exports = nextConfig;
