import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
} from "../assets";

// 📌 Navbar Links
export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// 📌 Services
const services: TService[] = [
  { title: "Frontend Developer", icon: web },
  { title: "React & TypeScript", icon: mobile },
  { title: "UI/UX Implementation", icon: creator },
  { title: "Responsive & Modern Web Design", icon: backend },
];

// 📌 Technologies
const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];

// 📌 Experiences
const experiences: TExperience[] = [
  {
    title: "Freelance Frontend Developer",
    companyName: "Self-Employed",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 2024 – Present",
    points: [
      "Develop responsive web applications using React.js and JavaScript.",
      "Convert design mockups from Figma into functional components.",
      "Collaborate with clients to gather requirements and deliver tailored solutions.",
      "Write clean, maintainable code following React best practices.",
      "Ensure cross-browser compatibility and mobile responsiveness.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    companyName: "Digitalize for Business Services",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Mar 2024 – Aug 2024",
    points: [
      "Built web applications with React.js, JavaScript, HTML, and CSS.",
      "Collaborated with a 5-member development team using Agile methodologies.",
      "Participated in daily stand-ups, sprint planning, and code reviews.",
      "Implemented UI components and improved application functionality.",
      "Gained hands-on experience with modern frontend development practices.",
    ],
  },
  {
    title: "Digital Support Specialist",
    companyName: "Telecom Egypt (WE)",
    icon: backend,
    iconBg: "#383E56",
    date: "Sep 2022 – Nov 2023",
    points: [
      "Provided technical support for internet connectivity and software issues.",
      "Resolved network configuration and performance troubleshooting problems.",
      "Achieved 95% customer satisfaction rating through effective problem-solving.",
      "Enhanced analytical thinking and technical communication skills.",
    ],
  },
];

// 📌 Testimonials (Dummy)
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Abdelrahman created a beautiful, responsive website for our startup that perfectly captured our brand identity. His attention to detail and technical skills are impressive.",
    name: "Ahmed Hassan",
    designation: "Founder",
    company: "TechStart",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    testimonial:
      "Working with Abdelrahman was a pleasure. He delivered our e-commerce site ahead of schedule with all the features we requested and added thoughtful improvements we hadn't considered.",
    name: "Layla Ibrahim",
    designation: "Marketing Director",
    company: "ShopSmart",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    testimonial:
      "Abdelrahman's React components are clean, well-documented, and highly reusable. His code quality and modern approach to frontend development have significantly improved our project.",
    name: "Omar Farouk",
    designation: "Lead Developer",
    company: "WebSolutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

// 📌 Projects (11 Project with Live Demos)
const projects: TProject[] = [
  {
    name: "Amazon Clone",
    description:
      "Full e-commerce clone of Amazon built with React and Redux, featuring product listings, cart functionality, and responsive UI.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "/src/assets/amazon.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/amazon-clone",
    liveDemo: "https://amazon-ecommerce-clone-one.vercel.app/",
  },
  {
    name: "Advanced Product Builder",
    description:
      "Comprehensive product management system with CRUD, TypeScript, TailwindCSS, and Framer Motion animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/src/assets/product-builder.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/product-builder",
    liveDemo: "https://advanced-product-builder.vercel.app/",
  },
  {
    name: "iPhone 15 Showcase",
    description:
      "Apple-inspired landing page with React, animations, and smooth UI/UX interactions optimized for performance.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "/src/assets/iphone.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/iphone15-landing-page",
    liveDemo: "https://iphone15-landing-page-umber.vercel.app/",
  },
  {
    name: "Brainwave",
    description:
      "Modern SaaS landing page with React, Vite, and TailwindCSS showcasing advanced UI/UX and smooth animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
    ],
    image: "/src/assets/brainwave.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/brainwave",
    liveDemo: "https://brainwave-xi-gray.vercel.app/",
  },
  {
    name: "TaskMasterTS",
    description:
      "Task manager app built with React and TypeScript, focusing on type safety, clean architecture, and modular components.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
    ],
    image: "/src/assets/taskts.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/TaskMasterTS",
    liveDemo: "https://advanced-task-master-tsi.vercel.app/",
  },
  {
    name: "React Alert Component Library",
    description:
      "Reusable alert/notification system with TypeScript, multiple variants, auto-close, and smooth animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: "/src/assets/alert.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/simple-react-alerts",
    liveDemo: "https://simple-react-alerts.vercel.app/",
  },

  // --- HTML / CSS / JS projects ---
  {
    name: "TaskFlow (Modern To-Do App)",
    description:
      "Lightweight to-do list app built with pure HTML, CSS, and JavaScript with local storage support.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: "/src/assets/task.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/taskflow-modern-todo",
    liveDemo: "https://abdelrahman-samy-dev.github.io/taskflow-modern-todo/",
  },
  {
    name: "Modern Dashboard Panel",
    description:
      "Responsive admin dashboard template built with pure HTML5 and CSS3 using Grid and Flexbox layouts.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: "/src/assets/panel.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/modern-panel",
    liveDemo: "https://abdelrahman-samy-dev.github.io/modern-panel/",
  },
  {
    name: "HTML CSS Clean Template",
    description:
      "Clean and lightweight multipurpose template created with semantic HTML and modern CSS.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: "/src/assets/clean.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/html-css-clean-template",
    liveDemo: "https://abdelrahman-samy-dev.github.io/html-css-clean-template/",
  },
  {
    name: "Kasper Template",
    description:
      "Creative responsive template built with HTML5 and CSS3, inspired by modern portfolio designs.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: "/src/assets/kasper.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/kasper",
    liveDemo: "https://abdelrahman-samy-dev.github.io/kasper/",
  },
  {
    name: "Leon Template",
    description:
      "Elegant one-page template for startups and portfolios built with HTML and CSS.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: "/src/assets/leon.png",
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/leon",
    liveDemo: "https://abdelrahman-samy-dev.github.io/leon/",
  },
];

export { services, technologies, experiences, testimonials, projects };