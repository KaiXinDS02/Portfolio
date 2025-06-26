import React, { useEffect, useState, useRef } from "react";
import { Navbar, StarsCanvas, Tech } from "../components";
import { styles } from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import cert1 from "../assets/images/certifications/Alteryx Designer Core.png";
import cert2 from "../assets/images/certifications/Alteryx Foundational Micro-Credential.png";
import cert3 from "../assets/images/certifications/Artificial Intelligence Foundations Neural Networks.png";
import cert4 from "../assets/images/certifications/Google AI Essentials V1.png";
import cert5 from "../assets/images/certifications/IBM Enterprise Thinking Practitioner.png";
import cert6 from "../assets/images/certifications/NVIDIA Deep Learning.png";
import cert7 from "../assets/images/certifications/Professional Scrum Master 1.png";

const certificates = [
  { img: cert1, desc: "Alteryx Designer Core" },
  { img: cert2, desc: "Alteryx Foundational Micro-Credential" },
  { img: cert3, desc: "Artificial Intelligence Foundations Neural Networks" },
  { img: cert4, desc: "Google AI Essentials V1" },
  { img: cert5, desc: "IBM Enterprise Thinking Practitioner" },
  { img: cert6, desc: "NVIDIA Deep Learning" },
  { img: cert7, desc: "Professional Scrum Master 1" },
];

// Bigger modern arrow SVG
const ArrowIcon = ({ direction }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    stroke="#915EFF"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: direction === "left" ? "rotate(180deg)" : "none",
      display: "block",
    }}
  >
    <polyline points="22 16 46 32 22 48" />
  </svg>
);

const SkillsAndCertifications = () => {
  const [zoomImg, setZoomImg] = useState(null);
  const swiperRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-0 bg-primary min-h-screen overflow-hidden">
      <style>
        {`
        .custom-swiper-arrow {
          background: transparent;
          border: none;
          outline: none;
          position: absolute;
          top: 40%;
          z-index: 10;
          transform: translateY(-50%);
          cursor: pointer;
          user-select: none;
          padding: 0;
          transition: background 0.2s;
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-swiper-arrow.left {
          left: -90px;
        }
        .custom-swiper-arrow.right {
          right: -90px;
        }
        .custom-swiper-arrow:hover svg polyline {
          stroke: #fff;
          filter: drop-shadow(0 0 10px #915EFF);
        }
        .swiper-pagination {
          position: static !important;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-pagination-bullet {
          background: rgba(145, 94, 255, 0.2);
          border: 2px solid #915EFF;
          width: 18px;
          height: 18px;
          opacity: 1;
          margin: 0 6px !important;
          transition: background 0.2s, border 0.2s;
        }
        .swiper-pagination-bullet-active {
          background: #915EFF;
          border: 2px solid #fff;
        }
        `}
      </style>
      {/* Animated stars overlay only */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsCanvas />
      </div>
      <div className="relative z-20">
        <Navbar />
        <div className={`w-full ${styles.paddingX} pt-32 pb-16 max-w-7xl mx-auto`}>
          {/* Skills Section */}
          <div className="mb-10">
            <p className={styles.sectionSubText}>What I Know</p>
            <h2 className={styles.sectionHeadText}>Skills</h2>
          </div>
          <Tech />

          {/* Certifications Section */}
          <div className="mb-10 mt-20">
            <p className={styles.sectionSubText}>My Achievements</p>
            <h2 className={styles.sectionHeadText}>Certifications</h2>
          </div>
          {/* Add extra padding here */}
          <div className="mb-20"></div>
          <div className="relative flex items-center h-[38rem] w-full max-w-3xl mx-auto">
            {/* Custom Modern Arrows */}
            <button
              className="custom-swiper-arrow left"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={0}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full"
              style={{ paddingBottom: "3.5rem" }}
              onSwiper={swiper => (swiperRef.current = swiper)}
            >
              {certificates.map((cert, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center">
                    <img
                      src={cert.img}
                      alt={`Certificate ${idx + 1}`}
                      className="rounded-lg shadow-lg cursor-zoom-in h-[38rem] w-auto max-w-full object-contain"
                      onClick={() => setZoomImg(cert.img)}
                    />
                    <p className="mt-4 text-center text-white">{cert.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="custom-swiper-arrow right"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              type="button"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          {/* Zoom Modal */}
          {zoomImg && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setZoomImg(null)}
            >
              <img
                src={zoomImg}
                alt="Zoomed Certificate"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndCertifications;