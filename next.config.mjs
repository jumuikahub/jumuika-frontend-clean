// next.config.mjs

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const ENV = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;

// Define disabled modules per environment
const disabledModulesByEnv = {
  development: ["internlink-temp", "institutions-temp"], // disable in dev
  staging: ["internlink-temp"],                         // only disable internlink in staging
  production: [],                                       // enable all in prod
};

const disabledModules = disabledModulesByEnv[ENV] || [];

console.log(`⚙️ Running in ${ENV} mode — Disabled modules:`, disabledModules);

export default {
  ...baseConfig,
  env: {
    DISABLED_MODULES: disabledModules.join(","), // available in client & server
  },
};
