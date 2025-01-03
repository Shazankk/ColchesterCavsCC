import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./components";
import SectionWrapper from "./hoc/SectionWrapper"; // Import the updated SectionWrapper HOC

// Lazy-load each section component
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Fixtures = lazy(() => import("./pages/Fixtures"));
const MatchResults = lazy(() => import("./pages/MatchResults"));
const Players = lazy(() => import("./pages/Players"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

// Wrap components using SectionWrapper HOC
const AboutSection = SectionWrapper(About, "about");
const FixturesSection = SectionWrapper(Fixtures, "fixtures");
const MatchResultsSection = SectionWrapper(MatchResults, "match-results");
const PlayersSection = SectionWrapper(Players, "players");
const FaqsSection = SectionWrapper(Faqs, "faqs");
const SponsorsSection = SectionWrapper(Sponsors, "sponsors");
const ContactUsSection = SectionWrapper(ContactUs, "contact");

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Sticky Navbar */}
        <Navbar />
        <Hero />
        {/* Use Suspense with fallback for lazy-loaded components */}
        <Suspense fallback={<div>Loading sections...</div>}>
          {/* Render all the wrapped sections */}
          <AboutSection />
          <FixturesSection />
          <MatchResultsSection />
          <PlayersSection />
          <FaqsSection />
          <SponsorsSection />
          <ContactUsSection />
        </Suspense>

        {/* Footer component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
