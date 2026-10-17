// Set NEXT_PUBLIC_SITE_URL to the production domain so OG images, canonical URLs and the sitemap resolve correctly
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Damalla Yathin";
export const SITE_TITLE = "Damalla Yathin | AI Content Engineer & Short-Form Video Producer";
export const SITE_DESCRIPTION =
  "Portfolio of Damalla Yathin — AI content engineer and short-form video producer. 60+ AI healthcare videos for Influx Health, founder of the 30K+ @designpreneurss community.";
