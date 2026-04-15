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
  nodejs,
  mongodb,
  wordpress,
  excel,
  git,
  native,
  py,
  sql,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  chatroom,
  gptclone,
  threejs,
  amachon,
  darra,
  jala,
  shopdesk,
  django,
  nextjs,
  vuejs,
  rails,
  ruby,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Native",
    icon: native,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Amachon Group of Companies",
    icon: amachon,
    iconBg: "#383E56",
    date: "March 2021 - Till date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " Developer",
    company_name: "Darra",
    icon: darra,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Till date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

const projects = [
  {
    name: "Jalingo Local Government Website",
    description:
      "The official website for Jalingo Local Government, Nigeria — built with React and Tailwind CSS for a modern, accessible civic platform.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
    ],
    image: jala,
    source_code_link: "https://jalingolga.tr.gov.ng/",
  },
  {
    name: "ShopDesk",
    description:
      "A JavaScript-based point-of-sale and retail management system. Demonstrates expertise in business applications, responsive design, and retail domain knowledge.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "pos-system", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: shopdesk,
    source_code_link: "https://github.com/Pheebemi/shopDesk",
  },
  {
    name: "Lake View College Management System",
    description:
      "A modern web-based college management system with role-based access, course registration, Paystack payment processing, and real-time academic records.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "paystack", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/Pheebemi/lake-view-college",
  },
  {
    name: "Raddai LMS",
    description:
      "An enterprise-grade Learning Management System built with Next.js and TypeScript featuring course management, student enrollment, progress tracking, and assessment tools.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "lms", color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: "https://github.com/Pheebemi/raddai-lms",
  },
  {
    name: "Raddai Backend",
    description:
      "A robust Django REST API powering the Raddai Metropolitan School system with multi-role auth (Admin, Staff, Student, Parent), JWT security, and financial management modules.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "jwt-auth", color: "green-text-gradient" },
      { name: "rest-api", color: "pink-text-gradient" },
    ],
    image: backend,
    source_code_link: "https://github.com/Pheebemi/raddai-backend",
  },
  {
    name: "Darra App",
    description:
      "A mobile-first cross-platform application built with Expo and TypeScript, featuring file-based routing with Expo Router and deployable on iOS, Android, and web.",
    tags: [
      { name: "expo", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "react-native", color: "pink-text-gradient" },
    ],
    image: mobile,
    source_code_link: "https://github.com/Pheebemi/darra-app",
  },
  {
    name: "Darra Backend",
    description:
      "A polyglot backend combining TypeScript microservices and Python APIs with Next.js frontend integration, showcasing cross-language and scalable API design expertise.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "microservices", color: "pink-text-gradient" },
    ],
    image: backend,
    source_code_link: "https://github.com/Pheebemi/darra-backend",
  },
  {
    name: "SIT Technologies LMS",
    description:
      "A full-stack Learning Management System with a Django REST Framework backend (Student, Tutor, Admin roles) paired with a Next.js TypeScript frontend for seamless academic workflows.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "jwt-auth", color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: "https://github.com/Pheebemi/lms_backend_sit",
  },
  {
    name: "Election Backend — Taraba Portal",
    description:
      "A Django REST API for mission-critical election data management with geographic hierarchies (LGAs, Wards, Polling Units), real-time result aggregation, and role-based clerk access.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "data-aggregation", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Pheebemi/election-backend",
  },
  {
    name: "Jhaytermax E-commerce Backend",
    description:
      "A comprehensive Django REST e-commerce backend with advanced product management, order tracking, Flutterwave payment integration, and location-based delivery fee calculation.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "flutterwave", color: "green-text-gradient" },
      { name: "e-commerce", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Pheebemi/jhaytermax-backend",
  },
  {
    name: "Dannys Wellness Clinic",
    description:
      "A healthcare clinic management system with a Django REST backend supporting multi-role auth (Doctor, Nurse, Pharmacist, Lab Tech), patient management, and appointment scheduling.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "healthcare", color: "green-text-gradient" },
      { name: "multi-role", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Pheebemi/dannys-backend",
  },
  {
    name: "Menopause Blog Platform",
    description:
      "A health and wellness content platform built with React, TypeScript, and Vite featuring Sanity CMS integration for dynamic real-time content management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "sanity-cms", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: gptclone,
    source_code_link: "https://github.com/Pheebemi/menopause",
  },
  {
    name: "Thrive Library",
    description:
      "A school library management platform built with Ruby on Rails featuring inventory management, circulation tracking, RSpec testing, Brakeman security scanning, and CI/CD pipelines.",
    tags: [
      { name: "rails-8", color: "blue-text-gradient" },
      { name: "rspec", color: "green-text-gradient" },
      { name: "ci-cd", color: "pink-text-gradient" },
    ],
    image: chatroom,
    source_code_link: "https://github.com/chrisehlee/thrive-library",
  },
  {
    name: "Fly Drone",
    description:
      "A TypeScript application for drone management and control systems demonstrating hardware-software integration, real-time data handling, and IoT expertise.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "real-time", color: "pink-text-gradient" },
    ],
    image: mobile,
    source_code_link: "https://github.com/Pheebemi/fly-drone",
  },
  {
    name: "Dannys Wellness Clinic App",
    description:
      "The frontend for Dannys Wellness Clinic built with Next.js and TypeScript, providing healthcare professionals intuitive tools for patient management and clinic operations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "healthcare-ux", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Pheebemi/dannys-app",
  },
  {
    name: "Coastj",
    description:
      "A TypeScript-powered Next.js web application showcasing clean code architecture, modern React patterns, and a focus on type safety and scalability.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "modern-arch", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/Pheebemi/coastj",
  },
  {
    name: "Algadaff",
    description:
      "A Next.js and TypeScript web application showcasing strong understanding of React hooks, server components, and the TypeScript type system with clean maintainable architecture.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "react-patterns", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Pheebemi/algadaff",
  },
  {
    name: "Algaddaftech",
    description:
      "A React + TypeScript + Vite application with a modern, performant UI demonstrating component-based architecture and contemporary frontend tooling with HMR.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Pheebemi/algaddaftech",
  },
  {
    name: "Lake View College Pro",
    description:
      "An enhanced iteration of the Lake View College Management System with improved student and staff portals, enhanced Paystack payment processing, and better responsive design.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "paystack", color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: "https://github.com/Pheebemi/lake-view-college-pro",
  },
  {
    name: "Sam Blog",
    description:
      "A full-featured blogging platform built with HTML5, JavaScript, and a Python backend demonstrating CMS expertise, dynamic content loading, and responsive blog design.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "html5", color: "pink-text-gradient" },
    ],
    image: gptclone,
    source_code_link: "https://github.com/Pheebemi/sam-blog",
  },
  {
    name: "Hausa Dev",
    description:
      "A specialized JavaScript project focused on language localization and development for the Hausa community, demonstrating i18n expertise and inclusive technology solutions.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "i18n", color: "green-text-gradient" },
      { name: "localization", color: "pink-text-gradient" },
    ],
    image: chatroom,
    source_code_link: "https://github.com/Pheebemi/hausa-dev",
  },
  {
    name: "Flysmartt Frontend",
    description:
      "A TypeScript-powered frontend for the Flysmartt platform demonstrating mastery of modern web technologies, component architecture, and type-safe scalable application design.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "component-arch", color: "green-text-gradient" },
      { name: "ux-focused", color: "pink-text-gradient" },
    ],
    image: backend,
    source_code_link: "https://github.com/Flysmartt/Front-end",
  },
];

export { services, technologies, experiences, testimonials, projects };
