import Contact from "./components/contact";
import ExpertiseTable from "./components/expertise-table";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/nav-bar";
import Projects from "./components/projects";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-w-fit font-sans">
        <nav className="sticky top-0 z-40 w-full">
          <Navbar />
        </nav>
        <main className="max-w-[1180px] mx-auto">
          <div className="pb-10 mx-auto px-6 md:px-10 xl:px-0 xl:max-w-[1380px]">
            <Hero />
            <Projects className="pt-28" />
            <ExpertiseTable className="pt-28" />
            <Contact className="pt-28" />
            <Footer />
          </div>
        </main>

        {/* <SpeedInsights />
          <Analytics /> */}
      </main>
    </ThemeProvider>
  );
}
