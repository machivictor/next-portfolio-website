import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/src/data/portfolio";
import { BASE_URL, SITE } from "@/src/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Machi Victor | Software Engineer & Product Builder",
    template: "%s | Machi Victor",
  },
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
    url: BASE_URL,
    siteName: SITE.name,
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
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: BASE_URL,
  sameAs: [
    "https://www.linkedin.com/in/machi-victor",
    "https://x.com/machi_mullata",
  ],
  image: profile.image?.src ?? "/headshot.png",
  jobTitle: profile.title,
  description:
    "Product-minded software engineer building practical web and mobile products for education, SMEs, and AI-powered workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/headshot.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://machivictor.vercel.app" />
        <meta name="theme-color" content="#0f172a" />
        <script
          key="ldjson-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-slate-950 font-sans">{children}</body>
    </html>
  );
}
