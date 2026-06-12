import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://machivictor.vercel.app"),
  title: "Machi Victor | Software Engineer & Product Builder",
  description:
    "Software engineer building mobile-first products for education, SMEs, and AI-powered experiences across React, Next.js, React Native, and TypeScript.",
  authors: [{ name: "Machi Victor", url: "https://machivictor.vercel.app" }],
  keywords: [
    "Machi Victor",
    "Victor Machi Mullata",
    "software engineer Kenya",
    "React Native developer",
    "Next.js developer",
    "frontend developer",
    "product engineer",
    "EdTech",
    "SME digitization",
  ],
  openGraph: {
    title: "Machi Victor | Software Engineer",
    description:
      "Product-minded software engineer building practical web and mobile products for education, SMEs, and AI-powered workflows.",
    url: "https://machivictor.vercel.app",
    siteName: "Machi Victor Portfolio",
    images: [
      {
        url: "/headshot.png",
        width: 540,
        height: 540,
        alt: "Machi Victor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@machi_victor",
    title: "Machi Victor | Software Engineer",
    description:
      "Software engineer building mobile-first products for education, SMEs, and AI-powered experiences.",
    images: ["/headshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-slate-950 font-sans">{children}</body>
    </html>
  );
}
