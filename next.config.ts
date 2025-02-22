import type { NextConfig } from "next";
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    ...i18n,
    localeDetection: false,  // Ensure it's explicitly set to false
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
  images: {
    domains: ['cv-library.co.uk'],
  },
};

export default nextConfig;
