// src/App.jsx
import { NavbarHeader, FooterFlow } from "./components";
import {
  About,
  ContactUs,
  Faqs,
  Fixtures,
  Hero,
  Players,
  ResultSummary,
  Sponsors,
  Teams,
} from "./pages";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <NavbarHeader />
        <div className="flex-grow container mx-auto py-5">
          {/* Your page content */}
          <Hero />
          <About />
          <Teams />
          <Players />
          <Fixtures />
          <ResultSummary />
          <ContactUs />
          <Faqs />
          <div className="mb-0">
            {" "}
            <Sponsors />
          </div>
        </div>
        <FooterFlow />
      </div>
    </ThemeProvider>
  );
}

export default App;
