import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Damalla Yathin — AI content creator, short-form video producer and UI/UX designer.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
