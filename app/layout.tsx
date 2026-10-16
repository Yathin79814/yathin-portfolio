import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { SocialDock } from "@/components/SocialDock";
import { Navbar } from "@/components/Navbar";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "AI content creator",
    "short-form video",
    "AI video production",
    "Higgsfield",
    "HeyGen",
    "UGC videos",
    "Instagram reels",
    "Damalla Yathin",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] text-[#FFFCF2] antialiased`}>
        <div className="noise-bg" />
        <Navbar />
        <CursorGlow />
        <SocialDock />
        {children}
      </body>
    </html>
  );
}
