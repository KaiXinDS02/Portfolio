import React, { useEffect } from "react";
import Projects from "../components/Projects";
import Events from "../components/Events";
import { Navbar, StarsCanvas } from "../components";
import { styles } from "../styles";

const ProjectsAndEvents = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-0 bg-primary min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsCanvas />
      </div>
      <div className="relative z-20">
        <Navbar />
        <div className={`w-full ${styles.paddingX} pt-32 pb-16 max-w-7xl mx-auto`}>
          {/* Projects Section */}
          <div className="mb-10">
            <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects</h2>
          </div>
          <Projects />

          {/* Events Section */}
          <div className="mb-10 mt-20">
            <p className={styles.sectionSubText}>My Involvement</p>
            <h2 className={styles.sectionHeadText}>Events</h2>
          </div>
          <Events />
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndEvents;