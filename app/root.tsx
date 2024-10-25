import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import Contact from "~/components/Contact";
import ExpertiseTable from "~/components/ExpertiseTable";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import NavBar from "~/components/Navbar";
import Work from "~/components/Projects";

import globalStyles from "./globals.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Preahvihear&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Machi Victor" },
    {
      name: "description",
      content: "Machi Victor's personal portfolio website.",
    },
  ];
};

export function Layout({}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-w-fit font-sans">
        <nav className="sticky top-0 z-40 w-full">
          <NavBar />
        </nav>
        <main className="max-w-[1180px] mx-auto">
          <div className="pb-10 mx-auto px-6 md:px-10 xl:px-0 xl:max-w-[1380px]">
            <Hero />
            <Work className="pt-8" />
            <ExpertiseTable className="pt-28" />
            <Contact className="pt-28" />
            <Footer />
          </div>
        </main>

        <ScrollRestoration />
        <Scripts />

        {/* Vercel */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return null;
}
