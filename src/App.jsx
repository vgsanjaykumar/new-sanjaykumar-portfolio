import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";
import CustomCursor from "./components/layout/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import WhatsAppWidget from "./sections/WhatsAppWidget";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-paper-50 dark:bg-ink-950 transition-colors duration-500">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Services />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppWidget />
      </div>
    </ThemeProvider>
  );
};

export default App;
