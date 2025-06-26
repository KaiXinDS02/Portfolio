import React from "react";
import { Navbar, StarsCanvas } from "../components";
import { styles } from "../styles";

const Hobbies = () => (
  <div className='relative z-0 bg-primary min-h-screen overflow-hidden'>
    <div className='absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center z-0' />
    <div className="absolute inset-0 z-10 pointer-events-none">
      <StarsCanvas />
    </div>
    <div className='relative z-20'>
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className={`${styles.heroHeadText} text-white`}>
          My <span className="text-[#915EFF]">Hobbies</span>
        </h1>
        {/* Add more hobby content or cards here */}
      </div>
    </div>
  </div>
);

export default Hobbies;