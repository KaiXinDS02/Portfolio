import {
  mobile,
  backend,
  creator,
  web,
  aiss,
  smallGiant,
  np,
  carrent,
  jobit,
  tripguide,
} from "../assets";

// Project images
import smallgiantImg from "../assets/projects/smallgiant.png";
import busappImg from "../assets/projects/busapp.jpg";
import kitchenyumImg from "../assets/projects/kitchenyum.jpg";

// Event images
import familydayImg from "../assets/events/familyday.jpg";
import ictxploreImg from "../assets/events/ictxplore.jpg";
import openhouseImg from "../assets/events/openhouse.jpg";

// Tech icons
import canva from "../assets/tech/canva.png";
import css from "../assets/tech/css.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import jupyter from "../assets/tech/jupyter-notebook.png";
import microsoftOffice from "../assets/tech/microsoft-office.png";
import photoshop from "../assets/tech/photoshop.png";
import powerbi from "../assets/tech/power-bi.png";
import python from "../assets/tech/python.png";
import reactjs from "../assets/tech/reactjs.png";
import sap from "../assets/tech/sap.png";
import tableau from "../assets/tech/tableau.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import vscode from "../assets/tech/vscode.png";
import wordpress from "../assets/tech/wordpress.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "UI/UX Designer", icon: web },
  { title: "Web Developer", icon: mobile },
  { title: "Data Analyst", icon: backend },
  { title: "Deep Learning Engineer", icon: creator },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "GitHub", icon: github },
  { name: "Jupyter Notebook", icon: jupyter },
  { name: "Power BI", icon: powerbi },
  { name: "Tableau", icon: tableau },
  { name: "SAP", icon: sap },
  { name: "WordPress", icon: wordpress },
  { name: "VS Code", icon: vscode },
  { name: "Figma", icon: figma },
  { name: "Adobe Photoshop", icon: photoshop },
];

const experiences = [
  {
    title: "GCSE O-Levels",
    company_name: "Ahmad Ibrahim Secondary School",
    icon: aiss,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2022",
    points: [
      "Led Chinese Orchestra percussion (EXCO), guiding members to achieve SYF Distinction and two Accomplishments, while continuously training juniors.",
      "Showcased diverse interests with a Bronze in the Queen's Commonwealth Essay 2021 and participation in UOB Painting of the Year 2021.",
      "As Student Councillor, spearheaded school spirit initiatives, including event video editing, leading Sec 1 orientation, and developing a movie event website.",
      "Developed nuanced leadership, balancing discipline and camaraderie, understanding that strong leadership and team spirit are crucial for project success.",
    ],
  },
  {
    title: "Music Instructor",
    company_name: "SmallGiant Music",
    icon: smallGiant,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - July 2024",
    points: [
      "Co-created drumming syllabus",
      "Marketed the school’s lesson bundles in Not So Little Fair 2023.",
      "Instructed students of all ages in guitar, drums, ukulele, and piano.",
      "Collaborated with Touch to teach guitar and ukulele at ITE Central, West, and East.",
      "Adapted teaching methods to suit diverse learning needs and effectively planned lessons.",
      "Tracked and recorded student progress, providing regular updates to parents.",
    ],
  },
  {
    title: "Web Designer/Developer",
    company_name: "SmallGiant Music",
    icon: smallGiant,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Redesigned and enhanced the music school's website using HTML and WordPress.",
      "Created and animated mascot characters to enhance the school's branding.",
      "Liaised with client to discuss project progress and gather feedback for continuous improvement.",
      "Ensured the website was user-friendly and visually appealing, improving user experience.",
      "Implemented responsive design principles to ensure compatibility across devices.",
    ],
  },
  {
    title: "Diploma in Data Science (Minor in Applied Psychology)",
    company_name: "Ngee Ann Polytechnic School of InfoComm Technology",
    icon: np,
    iconBg: "#E6DEDD",
    date: "April 2023 - April 2026",
    points: [
      "Spearheaded data science projects, performing clustering and predictive modeling, and conducted an AI ethics case study.",
      "Designed the ArtSquare app (UX/UI) and rebuilt a personal portfolio, demonstrating strong front-end and web development skills.",
      "Engineered robust back-end systems with Docker and automated data integration workflows for real-time dashboards.",
      "Exercised leadership in diverse group projects, managing collaboration and driving successful pitches and presentations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
export const projects = [
  {
    name: "SmallGiant Music Website",
    description:
      "My journey as a music instructor led me to SmallGiant Music, where I was welcomed into their team and given the chance to redesign their website. This experience deepened my skills in HTML and UX/UI design while collaborating closely with the founder. Together, we created a website that truly represents SmallGiant Music and reflects our pride in the project.",
    image: smallgiantImg,
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "UX/UI", color: "pink-text-gradient" },
      { name: "WordPress", color: "green-text-gradient" },
      { name: "Branding", color: "orange-text-gradient" },
    ],
    link: "https://smallgiantmusic.com",
  },
  {
    name: "Singapore Bus App",
    description:
      "I transformed the LTA DataMall API for bus stops into valuable information that end-users can easily access! This project honed my skills in Alteryx Designer, Python, Folium, and Tkinter.",
    image: busappImg,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Alteryx", color: "green-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
      { name: "Data Visualization", color: "orange-text-gradient" },
    ],
  },
  {
    name: "Kitchen Yum Singapore App",
    description:
      "In 2024, I teamed up with brilliant students to create Kitchen Yum Singapore, an app for food lovers to discover restaurants and food info. It even made a temporary appearance on the Google Play Store!",
    image: kitchenyumImg,
    tags: [
      { name: "Mobile", color: "blue-text-gradient" },
      { name: "React Native", color: "green-text-gradient" },
      { name: "Teamwork", color: "pink-text-gradient" },
      { name: "UI/UX", color: "orange-text-gradient" },
    ],
  }
];

// Events (with hashtags)
export const events = [
  {
    name: "Family Day @ Kebun Baru CC",
    description:
      "On July 7th, my student group Orion and I set up a booth at Kebun Baru CC Family Day, showcasing AI projects and meeting Senior Minister Lee Hsien Loong and Mr Hian Chuan (Henry) Kwek.",
    image: familydayImg,
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "Showcase", color: "green-text-gradient" },
      { name: "Community", color: "pink-text-gradient" },
    ],
  },
  {
    name: "ICTXplore",
    description:
      "ICTXplore focused on student outreach for the School of ICT at NP. I led Data Science course development and created all learning materials. We had a guest lecture from Dr. Francis Goh.",
    image: ictxploreImg,
    tags: [
      { name: "Education", color: "blue-text-gradient" },
      { name: "Data Science", color: "green-text-gradient" },
      { name: "Leadership", color: "pink-text-gradient" },
    ],
  },
  {
    name: "School of ICT Open House",
    description:
      "At NP Open House 2025, I volunteered to share my Data Science experience and managed the Orion Photo Booth. It was a great chance to meet prospective students and explore campus activities.",
    image: openhouseImg,
    tags: [
      { name: "Open House", color: "blue-text-gradient" },
      { name: "Volunteering", color: "green-text-gradient" },
      { name: "Student Life", color: "pink-text-gradient" },
    ],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials
};