import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

// Sections for "Others" page (Hobbies removed)
const othersSections = [
  {
    name: "Projects & Events",
    description: "See my projects and event highlights.",
    image: "src/assets/images/projectsandevents.jpg",
    link: "/projectsandevents",
    tags: [
      { name: "projects", color: "text-purple-400" },
      { name: "events", color: "text-blue-400" },
    ],
  },
  {
    name: "Skills & Certifications",
    description: "View my skills and certifications.",
    image: "src/assets/images/skillsandcertifications.jpg",
    link: "/skillsandcertifications",
    tags: [
      { name: "skills", color: "text-yellow-400" },
      { name: "certifications", color: "text-green-400" },
    ],
  },
];

const OthersCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => navigate(link)}
      className="cursor-pointer flex-1 min-w-[320px] max-w-[500px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full hover:shadow-lg transition flex flex-col'
      >
        <div className='relative w-full h-[260px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Others = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>More About Me</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Explore other aspects of myself: projects and certificates. Click on any card to learn more!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {othersSections.map((section, index) => (
          <OthersCard key={`others-section-${index}`} index={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Others, "");