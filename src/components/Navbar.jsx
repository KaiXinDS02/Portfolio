import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeDropdown, setResumeDropdown] = useState(false);
  const [translateDropdown, setTranslateDropdown] = useState(false);
  const [translateReady, setTranslateReady] = useState(false);
  const resumeDropdownRef = useRef(null);
  const translateDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Google Translate Widget
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "zh-CN",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  // Hide the Google Translate widget visually but keep it in the DOM
  useEffect(() => {
    const interval = setInterval(() => {
      const widget = document.querySelector("#google_translate_element");
      const select = document.querySelector("#google_translate_element select");
      if (widget) {
        widget.style.position = "absolute";
        widget.style.opacity = 0;
        widget.style.pointerEvents = "none";
        widget.style.height = 0;
        widget.style.width = 0;
      }
      if (select) {
        setTranslateReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        resumeDropdownRef.current &&
        !resumeDropdownRef.current.contains(event.target)
      ) {
        setResumeDropdown(false);
      }
      if (
        translateDropdownRef.current &&
        !translateDropdownRef.current.contains(event.target)
      ) {
        setTranslateDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to determine if a navLink is a section (about, work, contact, etc.)
  const isSectionLink = (id) =>
    ["about", "work", "contact", "experience", "feedbacks", "tech"].includes(id);

  // Function to trigger the Google Translate language change
  const handleTranslate = (lang) => {
    const select = document.querySelector("#google_translate_element select");
    if (select) {
      select.value = lang;
      const event = new Event("change", { bubbles: true });
      select.dispatchEvent(event);
      setTranslateDropdown(false);
    } else {
      alert("Translation widget is still loading. Please try again in a moment.");
    }
  };

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

        <div className="flex items-center gap-4">
          {/* Google Translate Widget (hidden) */}
          <div id="google_translate_element" />
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
            {/* Resume Dropdown */}
            <li className="relative" ref={resumeDropdownRef}>
              <button
                className="text-secondary hover:text-white text-[18px] font-medium flex items-center gap-1"
                onClick={() => setResumeDropdown((prev) => !prev)}
                type="button"
              >
                Resume
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${resumeDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resumeDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-[#23234d] rounded-lg shadow-lg z-50">
                  <a
                    href="./resume.pdf"
                    download
                    className="block px-4 py-2 text-white hover:bg-[#383E56] rounded-t-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeDropdown(false)}
                  >
                    English Resume
                  </a>
                  <a
                    href="./resume-chinese.pdf"
                    download
                    className="block px-4 py-2 text-white hover:bg-[#383E56] rounded-b-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeDropdown(false)}
                  >
                    中文简历
                  </a>
                </div>
              )}
            </li>
            {/* Translate Dropdown - placed after Resume */}
            <li className="relative" ref={translateDropdownRef}>
              <button
                className="text-secondary hover:text-white text-[18px] font-medium flex items-center gap-1"
                onClick={() => setTranslateDropdown((prev) => !prev)}
                type="button"
                disabled={!translateReady}
                style={{ opacity: translateReady ? 1 : 0.5, cursor: translateReady ? "pointer" : "not-allowed" }}
              >
                Translate
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${translateDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {translateDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-[#23234d] rounded-lg shadow-lg z-50">
                  <button
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#383E56] rounded-t-lg"
                    onClick={() => handleTranslate("zh-CN")}
                  >
                    中文 (Chinese)
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#383E56] rounded-b-lg"
                    onClick={() => handleTranslate("en")}
                  >
                    English
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>

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
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl
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
              {/* Resume Dropdown for Mobile */}
              <li className="relative">
                <button
                  className="text-secondary hover:text-white text-[16px] font-medium flex items-center gap-1"
                  onClick={() => setResumeDropdown((prev) => !prev)}
                  type="button"
                >
                  Resume
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${resumeDropdown ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {resumeDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#23234d] rounded-lg shadow-lg z-50">
                    <a
                      href="/resume.pdf"
                      download
                      className="block px-4 py-2 text-white hover:bg-[#383E56] rounded-t-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setResumeDropdown(false);
                        setToggle(false);
                      }}
                    >
                      English Resume
                    </a>
                    <a
                      href="/resume-chinese.pdf"
                      download
                      className="block px-4 py-2 text-white hover:bg-[#383E56] rounded-b-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setResumeDropdown(false);
                        setToggle(false);
                      }}
                    >
                      中文简历
                    </a>
                  </div>
                )}
              </li>
              {/* Translate Dropdown for Mobile */}
              <li className="relative" ref={translateDropdownRef}>
                <button
                  className="text-secondary hover:text-white text-[16px] font-medium flex items-center gap-1"
                  onClick={() => setTranslateDropdown((prev) => !prev)}
                  type="button"
                  disabled={!translateReady}
                  style={{ opacity: translateReady ? 1 : 0.5, cursor: translateReady ? "pointer" : "not-allowed" }}
                >
                  Translate
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${translateDropdown ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {translateDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#23234d] rounded-lg shadow-lg z-50">
                    <button
                      className="block w-full text-left px-4 py-2 text-white hover:bg-[#383E56] rounded-t-lg"
                      onClick={() => handleTranslate("zh-CN")}
                    >
                      中文 (Chinese)
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-white hover:bg-[#383E56] rounded-b-lg"
                      onClick={() => handleTranslate("en")}
                    >
                      English
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;