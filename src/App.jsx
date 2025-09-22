import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ProjectsAndEvents from "./pages/ProjectsAndEvents";
import SkillsAndCertifications from "./pages/SkillsAndCertifications";
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas, Others } from "./components";

// Helper to detect mobile/tablet
const isMobileDevice = () =>
  typeof navigator !== "undefined" &&
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const HomeContent = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='relative z-0 bg-primary min-h-screen overflow-hidden'>
      {/* Stars background for the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsCanvas isMobile={isMobile} />
      </div>
      {/* Navbar OUTSIDE of z-10 container */}
      <Navbar />
      {/* Background image only for hero */}
      <div className='relative z-10 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero isMobile={isMobile} />
      </div>
      {/* Main content */}
      <div className='relative z-20'>
        <About isMobile={isMobile} />
        <Experience isMobile={isMobile} />
        <Tech isMobile={isMobile} />
        <Others isMobile={isMobile} />
        <Contact isMobile={isMobile} />
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/projectsandevents" element={<ProjectsAndEvents />} />
      <Route path="/skillsandcertifications" element={<SkillsAndCertifications />} />
    </Routes>
  </BrowserRouter>
);

export default App;