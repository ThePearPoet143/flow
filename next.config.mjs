/** @type {import('next').NextConfig} */

// Import next-pwa using ES module syntax
import nextPWA from '@ducanh2912/next-pwa';

const withPWA = nextPWA({
    dest: 'public',
    // Review the following options and update as needed
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,

    workboxOptions: {
        disableDevLogs: true,
    },
    // Don't disable on any environment
    disable: false,
});

const nextConfig = {
  };

// Wrap config with PWA
export default withPWA(nextConfig);
