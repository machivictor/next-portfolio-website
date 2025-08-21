import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { socials } from "@/profile";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Machi Victor — Fullstack Developer",
  description: "Full-stack JavaScript developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />

        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Machi Victor",
              url: "https://machivictor.vercel.app",
              image: "https://machivictor.vercel.app/headshot.png",
              sameAs: socials.map((social) => social.url),
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
