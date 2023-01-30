/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAIN_API_ENDPOINT: process.env.MAIN_API_ENDPOINT,
    MAIN_DOMAIN: process.env.MAIN_DOMAIN,
    USER_API_ENDPOINT: process.env.USER_API_ENDPOINT,
    OFFER_API_ENDPOINT: process.env.OFFER_API_ENDPOINT,
    CHAT_API_ENDPOINT: process.env.CHAT_API_ENDPOINT,
    CRYPTOCURRENCY_API_ENDPOINT: process.env.CRYPTOCURRENCY_API_ENDPOINT,
    FIAT_API_ENDPOINT: process.env.FIAT_API_ENDPOINT,
    TRADE_API_ENDPOINT: process.env.TRADE_API_ENDPOINT,
    WEB3_ETHEREUM_HTTP_PROVIDER: process.env.WEB3_ETHEREUM_HTTP_PROVIDER,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
