import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ProjectsAndEvents from "./pages/ProjectsAndEvents";
import SkillsAndCertifications from "./pages/SkillsAndCertifications";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Others } from "./components";

// Helper component for the home page logic
const HomeContent = () => {
  const location = useLocation();

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
      {/* Background image only for navbar and hero */}
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      {/* Stars background for the whole page */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsCanvas />
      </div>
      {/* Main content */}
      <div className='relative z-20'>
        <About />
        <Experience />
        <Tech />
        <Others />
        <Contact />
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter basename="/Portfolio/">
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/projectsandevents" element={<ProjectsAndEvents />} />
      <Route path="/skillsandcertifications" element={<SkillsAndCertifications />} />
    </Routes>
  </BrowserRouter>
);

export default App;