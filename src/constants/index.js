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
  threejs,
  amachon,
  darra,
  django,
  nextjs,
  vuejs,
  rails,
  ruby,
  sit,
  shapay,
  algaddaf,
  thrive,
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
    title: "Developer",
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
  {
    title: "Software Engineer",
    company_name: "Algadaff Technology",
    icon: algaddaf,
    iconBg: "#383E56",
    date: "2023 - Till date",
    points: [
      "Designing and building scalable web applications using React, Next.js, and TypeScript.",
      "Developing backend services and RESTful APIs to support enterprise technology solutions.",
      "Collaborating with design and product teams to deliver high-quality digital products.",
      "Ensuring code quality through reviews, testing, and adherence to best practices.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Thrive Library",
    icon: thrive,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Building and maintaining the Thrive school library management platform using Ruby on Rails.",
      "Implementing CI/CD pipelines and automated security scanning with Brakeman to ensure production-ready code.",
      "Writing comprehensive test suites with RSpec to maintain high code coverage and reliability.",
      "Collaborating with the team to streamline library operations including inventory and circulation workflows.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Solution Innovation and Training (SIT)",
    icon: sit,
    iconBg: "#383E56",
    date: "2025 - Till date",
    points: [
      "Building and maintaining full-stack web applications using modern JavaScript and TypeScript frameworks.",
      "Designing and developing RESTful APIs and backend services to support educational and enterprise platforms.",
      "Collaborating with cross-functional teams to deliver scalable software solutions for training and innovation programs.",
      "Participating in code reviews and mentoring junior developers on best practices.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Shapay",
    icon: shapay,
    iconBg: "#E6DEDD",
    date: "2025 - Till date",
    points: [
      "Developing responsive and performant frontend interfaces for a fintech payment platform.",
      "Implementing secure and seamless user flows for financial transactions and account management.",
      "Collaborating with product and backend teams to integrate payment APIs and ensure a smooth user experience.",
      "Optimizing UI performance and ensuring cross-browser compatibility across all supported devices.",
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
    icon: reactjs,
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
    icon: javascript,
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
    icon: django,
    source_code_link: "https://github.com/Pheebemi/lake-view-college",
  },
  {
    name: "Raddai LMS",
    description:
      "An enterprise-grade Learning Management System for Raddai Metropolitan School, pairing a Next.js/TypeScript frontend with a Django REST backend. Multi-role auth (Admin, Staff, Student, Parent) backs course management, enrollment, progress tracking, and financial management.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "django-rest", color: "green-text-gradient" },
      { name: "jwt-auth", color: "pink-text-gradient" },
    ],
    icon: nextjs,
    source_code_link: "https://github.com/Pheebemi/raddai-lms",
  },
  {
    name: "Darra",
    description:
      "A mobile-first cross-platform application built with Expo and TypeScript, backed by a polyglot backend combining TypeScript microservices and Python APIs. File-based routing with Expo Router, deployable on iOS, Android, and web.",
    tags: [
      { name: "expo", color: "blue-text-gradient" },
      { name: "react-native", color: "green-text-gradient" },
      { name: "microservices", color: "pink-text-gradient" },
    ],
    icon: native,
    source_code_link: "https://github.com/Pheebemi/darra-app",
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
    icon: django,
    source_code_link: "https://github.com/Pheebemi/lms_backend_sit",
  },
  {
    name: "Election Portal — Taraba",
    description:
      "A Next.js election portal backed by a Django REST API for mission-critical election data management — geographic hierarchies (LGAs, Wards, Polling Units), real-time result aggregation, and role-based clerk access.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/election-backend",
  },
  {
    name: "Jhaytermax E-commerce",
    description:
      "A full-stack e-commerce platform with a Next.js storefront and a Django REST backend — product management, order tracking, Flutterwave payment integration, and location-based delivery fee calculation.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "flutterwave", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/jhaytermax-backend",
  },
  {
    name: "Dannys Wellness Clinic",
    description:
      "A healthcare clinic management system with a Next.js/TypeScript frontend and a Django REST backend supporting multi-role auth (Doctor, Nurse, Pharmacist, Lab Tech), patient management, and appointment scheduling.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "healthcare", color: "pink-text-gradient" },
    ],
    icon: django,
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
    icon: reactjs,
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
    icon: rails,
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
    icon: typescript,
    source_code_link: "https://github.com/Pheebemi/fly-drone",
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
    icon: nextjs,
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
    icon: nextjs,
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
    icon: reactjs,
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
    icon: django,
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
    icon: javascript,
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
    icon: javascript,
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
    icon: typescript,
    source_code_link: "https://github.com/Flysmartt/Front-end",
  },
  {
    name: "AgriScan",
    description:
      "An AI-powered crop scanning and diagnostic platform. A farmer photographs a leaf and gets instant crop identification, disease diagnosis, severity grading, and a treatment plan — via a chained AI pipeline (Gemini, PlantNet, Hugging Face) that falls back to a keyless heuristic when no API key is set.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "django-rest", color: "green-text-gradient" },
      { name: "ai-diagnostics", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/agri-backend",
  },
  {
    name: "Weather & Farmland",
    description:
      "A weather and farmland intelligence platform for Northern Nigeria, pairing a Django REST API with a Next.js client. A cascading State → LGA → Ward selector surfaces NASA POWER climate data and ESA WorldCover-derived cropland flags for any ward.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "geo-data", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/weather-backend",
  },
  {
    name: "Bulk SMS Platform",
    description:
      "A bulk SMS marketing platform with a Django REST backend and Next.js dashboard. Handles campaigns, contact lists, sender-ID management, and a wallet funded via Flutterwave, routing messages through Termii, Sendchamp, and KudiSMS.",
    tags: [
      { name: "django-rest", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "flutterwave", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/bulk-backend",
  },
  {
    name: "Jenjo AI",
    description:
      "An AI-powered language-learning app for Jenjo, the language of the Dza people of Taraba State, Nigeria. Built with Next.js and a Django + Gemini backend trained on a custom Jenjo dataset, it teaches vocabulary, grammar, and phrases through interactive, conversational lessons.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "gemini-ai", color: "green-text-gradient" },
      { name: "language-preservation", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/dza-backend",
  },
  {
    name: "Document Scan & Data Entry",
    description:
      "An AI-powered document scanning system built to digitize thousands of physical employment forms. Operators snap a photo, AI extracts the structured data for review, and records save to a Django REST + PostgreSQL backend with Excel export.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "django-rest", color: "green-text-gradient" },
      { name: "ai-ocr", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/scan-backend",
  },
  {
    name: "Taraba Agent Tracker",
    description:
      "A field agent registration and tracking platform covering Taraba State's full LGA → Ward → Polling Unit hierarchy. A Gemini-powered batch scanner extracts agent names, phone numbers, and passport photos from sheet scans in a single pass.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "gemini-ai", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/agent-backend",
  },
  {
    name: "Jamaa",
    description:
      "An open-source, offline-first case management and emergency response platform for humanitarian field workers in West Africa. The Expo/React Native app syncs case data once connectivity returns, with a Django REST backend running AI case analysis via Gemini.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "offline-first", color: "green-text-gradient" },
      { name: "django-rest", color: "pink-text-gradient" },
    ],
    icon: native,
    source_code_link: "https://github.com/Pheebemi/jamaa-mobile",
  },
  {
    name: "Watermark Tool",
    description:
      "A bulk photo watermarking tool with an Astro frontend and Django backend — upload a batch of photos, apply a logo watermark, and download the results.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "astro", color: "green-text-gradient" },
      { name: "image-processing", color: "pink-text-gradient" },
    ],
    icon: django,
    source_code_link: "https://github.com/Pheebemi/watermark-backend",
  },
];

export { services, technologies, experiences, testimonials, projects };
