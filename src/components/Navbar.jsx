import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine if a navLink is a section (about, work, contact, etc.)
  const isSectionLink = (id) =>
    ["about", "work", "contact", "experience", "feedbacks", "tech"].includes(id);

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0 left-0
        bg-primary bg-opacity-90 border-b border-gray-700
        backdrop-blur z-50
      `}
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Mak Kai Xin &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {isSectionLink(nav.id) ? (
                <Link to="/" state={{ scrollTo: nav.id }}>
                  {nav.title}
                </Link>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/projectsandevents"
              className="text-secondary hover:text-white text-[18px] font-medium"
              onClick={() => setActive("Projects & Events")}
            >
              Projects & Events
            </Link>
          </li>
          <li>
            <Link
              to="/skillsandcertifications"
              className="text-secondary hover:text-white text-[18px] font-medium"
              onClick={() => setActive("Skills & Certifications")}
            >
              Skills & Certifications
            </Link>
          </li>
          {/* Resume Download Link */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-secondary hover:text-white text-[18px] font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
              ${!toggle ? "hidden" : "flex"}
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
            `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {isSectionLink(nav.id) ? (
                    <Link to="/" state={{ scrollTo: nav.id }}>
                      {nav.title}
                    </Link>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/projectsandevents"
                  className="text-secondary hover:text-white text-[16px] font-medium"
                  onClick={() => {
                    setToggle(false);
                    setActive("Projects & Events");
                  }}
                >
                  Projects & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/skillsandcertifications"
                  className="text-secondary hover:text-white text-[16px] font-medium"
                  onClick={() => {
                    setToggle(false);
                    setActive("Skills & Certifications");
                  }}
                >
                  Skills & Certifications
                </Link>
              </li>
              {/* Resume Download Link */}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-secondary hover:text-white text-[16px] font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;