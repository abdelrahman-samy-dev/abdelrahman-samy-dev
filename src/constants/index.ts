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
  nextjs,
  // Project images
  amazon,
  productBuilder,
  iphone,
  brainwave,
  taskts,
  alert,
  task,
  panel,
  clean,
  kasper,
  leon,
  taratil,
  shiftsouq,
} from "../assets";

// 📌 Navbar Links
export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
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
  { name: "Next JS", icon: nextjs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];

// 📌 Experiences
const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "VClasses (LMS Platform)",
    icon: web,
    iconBg: "#383E56",
    date: "Oct 2025 – Present",
    points: [
      "Developing and maintaining the Learning Management System (LMS) frontend using React.js.",
      "Building responsive, performant, and accessible UI components for the educational platform.",
      "Collaborating with cross-functional teams including backend developers and product designers.",
      "Implementing modern frontend practices with TypeScript and component-based architecture.",
      "Ensuring cross-browser compatibility and optimal user experience across devices.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    companyName: "Self-Employed",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Oct 2025",
    points: [
      "Developed responsive web applications using React.js and JavaScript.",
      "Converted design mockups from Figma into functional components.",
      "Collaborated with clients to gather requirements and deliver tailored solutions.",
      "Wrote clean, maintainable code following React best practices.",
      "Ensured cross-browser compatibility and mobile responsiveness.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    companyName: "Digitalize for Business Services",
    icon: web,
    iconBg: "#383E56",
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
    iconBg: "#E6DEDD",
    date: "Sep 2022 – Nov 2023",
    points: [
      "Provided technical support for internet connectivity and software issues.",
      "Resolved network configuration and performance troubleshooting problems.",
      "Achieved 95% customer satisfaction rating through effective problem-solving.",
      "Enhanced analytical thinking and technical communication skills.",
    ],
  },
];

// 📌 Testimonials (kept for potential future use)
const testimonials: TTestimonial[] = [];

// 📌 Project Categories for filter
export const projectCategories = ["all", "react", "pwa", "html-css"] as const;

// 📌 Projects — Featured projects first, then by technology
const projects: TProject[] = [
  // ⭐ Featured Projects
  {
    name: "Taratil — Islamic PWA",
    description:
      "A comprehensive Progressive Web App for Quran reading with HD pages, smart audio sync engine, daily reading tracker, premium Azkar with haptic feedback, and full offline support — all built with zero frameworks (Vanilla JS).",
    tags: [
      { name: "pwa", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: taratil,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/taratil-quran",
    liveDemo: "https://taratil-quran.vercel.app/",
    featured: true,
    category: "pwa",
  },
  {
    name: "ShiftSouq — Premium E-Commerce",
    description:
      "A premium fashion & lifestyle e-commerce store featuring category browsing, product pages, wishlist & cart functionality, user authentication, and a polished modern dark-themed UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "e-commerce", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: shiftsouq,
    sourceCodeLink: "",
    liveDemo: "https://shiftsouq.vercel.app/",
    featured: true,
    category: "react",
  },

  // React / TypeScript Projects
  {
    name: "Amazon Clone",
    description:
      "Full e-commerce clone of Amazon built with React and Redux, featuring product listings, cart functionality, and responsive UI.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: amazon,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/amazon-clone",
    liveDemo: "https://amazon-ecommerce-clone-one.vercel.app/",
    category: "react",
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
    image: productBuilder,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/product-builder",
    liveDemo: "https://advanced-product-builder.vercel.app/",
    category: "react",
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
    image: iphone,
    sourceCodeLink:
      "https://github.com/abdelrahman-samy-dev/iphone15-landing-page",
    liveDemo: "https://iphone15-landing-page-umber.vercel.app/",
    category: "react",
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
    image: brainwave,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/brainwave",
    liveDemo: "https://brainwave-xi-gray.vercel.app/",
    category: "react",
  },
  {
    name: "TaskMasterTS",
    description:
      "Task manager app built with React and TypeScript, focusing on type safety, clean architecture, and modular components.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
    ],
    image: taskts,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/TaskMasterTS",
    liveDemo: "https://advanced-task-master-tsi.vercel.app/",
    category: "react",
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
    image: alert,
    sourceCodeLink:
      "https://github.com/abdelrahman-samy-dev/simple-react-alerts",
    liveDemo: "https://simple-react-alerts.vercel.app/",
    category: "react",
  },

  // HTML / CSS / JS Projects
  {
    name: "TaskFlow (Modern To-Do App)",
    description:
      "Lightweight to-do list app built with pure HTML, CSS, and JavaScript with local storage support.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: task,
    sourceCodeLink:
      "https://github.com/abdelrahman-samy-dev/taskflow-modern-todo",
    liveDemo: "https://abdelrahman-samy-dev.github.io/taskflow-modern-todo/",
    category: "html-css",
  },
  {
    name: "Modern Dashboard Panel",
    description:
      "Responsive admin dashboard template built with pure HTML5 and CSS3 using Grid and Flexbox layouts.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: panel,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/modern-panel",
    liveDemo: "https://abdelrahman-samy-dev.github.io/modern-panel/",
    category: "html-css",
  },
  {
    name: "HTML CSS Clean Template",
    description:
      "Clean and lightweight multipurpose template created with semantic HTML and modern CSS.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: clean,
    sourceCodeLink:
      "https://github.com/abdelrahman-samy-dev/html-css-clean-template",
    liveDemo:
      "https://abdelrahman-samy-dev.github.io/html-css-clean-template/",
    category: "html-css",
  },
  {
    name: "Kasper Template",
    description:
      "Creative responsive template built with HTML5 and CSS3, inspired by modern portfolio designs.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: kasper,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/kasper",
    liveDemo: "https://abdelrahman-samy-dev.github.io/kasper/",
    category: "html-css",
  },
  {
    name: "Leon Template",
    description:
      "Elegant one-page template for startups and portfolios built with HTML and CSS.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: leon,
    sourceCodeLink: "https://github.com/abdelrahman-samy-dev/leon",
    liveDemo: "https://abdelrahman-samy-dev.github.io/leon/",
    category: "html-css",
  },
];

export { services, technologies, experiences, testimonials, projects };