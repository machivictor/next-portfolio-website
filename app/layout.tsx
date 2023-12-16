import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/Navbar";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
  ],
});

const preahvihear = localFont({
  variable: "--font-preahvihear",
  src: "../public/fonts/Preahvihear-Regular.ttf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Machi Victor",
  description: "Machi Victor's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-w-fit ${poppins.variable} ${preahvihear.variable} font-sans`}
      >
        <nav className="sticky top-0 z-40 w-full">
          <NavBar />
        </nav>
        <main className="max-w-[1180px] mx-auto">{children}</main>
        <footer className="mt-12 mb-10 flex justify-center">
          <p className=" text-white md:text-sm">
            Designed and built by{" "}
            <Link
              href="#"
              className="font-bold text-amber hover:underline hover:decoration-amber"
            >
              {"  "}Machi Victor
            </Link>
          </p>
        </footer>

        {/* Vercel */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
