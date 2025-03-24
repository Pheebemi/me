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
  jalingo,
  shopdesk,

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
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Jalingo Local goverment website",
    description:
      "the offical website for jalingo local government nigeria",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jalingo,
    source_code_link: "https://jalingolga.tr.gov.ng/",
  },
  {
    name: "ShopDesk Frontend",
    description:
      "ShopDesk is a web-based platform for inventory management, sales tracking, and customer relationship management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sqllite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopdesk,
    source_code_link: "https://shopdesk.vercel.app/",
  },
  {
    name: "ChatGPT Clone",
    description:
      "Web-based platform using react and vite , integrated with OpenAI API. this AI-powered chatbot mimics human-like conversation88.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gptclone,
    source_code_link: "https://github.com/pheebemi",
  },
  {
    name: "Chatroom",
    description:
      "Web application that enables users to chat in room and communicate and interacte online ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "socket io",
        color: "pink-text-gradient",
      },
    ],
    image: chatroom,
    source_code_link: "https://github.com/pheebemi",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
