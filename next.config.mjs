/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL ?? `https://simple-next-app-gjrt.vercel.app`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
      `https://simple-next-app-gjrt.vercel.app`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ??
      `https://simple-next-app-gjrt.vercel.app/profile`,
  },
};

export default nextConfig;
