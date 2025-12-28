// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import githubLogo from './assets/tech_logo/github.png';
import gitLogo from './assets/tech_logo/gitLogo.png';
import dockerLogo from './assets/tech_logo/dockerLogo.png';
dockerLogo

import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import hb from './assets/company_logo/hb.jpg'
import nursaryLogo from './assets/tech_logo/npm.png';
import fitnessAiMicroservices from './assets/tech_logo/fitnessAiMicroservices.png';
import kafkaLogo from './assets/tech_logo/kafkaLogo.png';
// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import spring from './assets/tech_logo/spring.png';
import hibernate from './assets/tech_logo/hibernate.png';
import intelliJ from './assets/tech_logo/intelliJ.png';
import aws from './assets/tech_logo/aws.png';
import fbApi from './assets/tech_logo/fbApi.jpg';
import cricbuzz from './assets/tech_logo/cricbuzz.png';
import hms from './assets/tech_logo/hms.png';
import ems from './assets/tech_logo/ems.png';
import se from './assets/tech_logo/se.png';


export const SkillsInfo = [
  {
    title: "Backend",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springbootLogo },
      { name: "Spring Framework", logo: spring },
      { name: "Hibernate / JPA", logo: hibernate },
      { name: "Apache Kafka", logo: kafkaLogo }, // strongly recommended
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "AWS", logo: aws },
    ],
  },

  {
    title: "Frontend (Integration)",
    skills: [
      { name: "React.js", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo }
    ],
  },

  {
    title: "Tools & DevOps",
    skills: [
      { name: "IntelliJ IDEA", logo: intelliJ },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Docker", logo: dockerLogo }, // add if you use it
      { name: "VS Code", logo: vscodeLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: hb, // HostBooks logo
    role: "Software Developer (Backend)",
    company: "HostBooks Limited",
    date: "January 2023 – Present | Gurugram, Haryana",
    desc: 
      "Working as a Backend Software Developer on enterprise-grade financial applications. Responsible for designing and developing scalable RESTful APIs using Java and Spring Boot, implementing microservices architecture, and integrating asynchronous communication using Apache Kafka. Actively involved in performance optimization, secure API design, database interactions, and collaborative agile development including sprint planning, code reviews, and production support.",
    skills: [
      // Backend
      "Java",
      "Spring Boot",
      "Microservices Architecture",
      "RESTful APIs",
      "Apache Kafka",

      // Database
      "MySQL",
      "SQLite",
      "Firebase",

      // Frontend (Basic / Integration)
      "React.js",
      "HTML",
      "CSS",

      // Tools & DevOps
      "AWS",
      "Git",
      "Agile / Scrum"
    ],
  },
];


export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Masai School, Banglore",
    date: "Feb 2022 - Nov 2022",
    grade: "7.81 CGPA",
    desc: "I completed an intensive Full-Stack Web Development course at Masai School, Bangalore, where I gained hands-on experience in building scalable web applications. The curriculum focused on industry-relevant skills including Java,Springboot, JavaScript, React and data structures & algorithms. I worked on multiple real-world projects, participated in hackathons, and collaborated in team environments, which strengthened my problem-solving, coding, and communication skills.",
    degree: "Fullstack Webdevlopment Course",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Shri Ramswaroop Memorial Group of Professional College, Lucknow",
    date: "Aug 2017 - Aug 2021",
    grade: "76%",
    desc: "I completed my Bachelor of Technology (B.Tech) from Shri Ramswaroop Memorial Group of Professional Colleges, Lucknow. I developed a strong interest in programming and software development during my academic journey. I gained hands-on experience with languages like Java, Springboot, and explored foundational subjects such as Data Structures, Algorithms, Object-Oriented Programming, and Database Management. Through self-learning, academic projects, and technical workshops, I built a solid base in software development that motivated my transition into the tech field.",
    degree: "Bachelor of Technology - B.Tech "
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Modern Public Inter College",
    date: "Apr 2016 - March 2017",
    grade: "89%",
    desc: "I completed my class 12 education from Modern Public Inter College, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "UP Board(XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Modern Public Inter College",
    date: "Apr 2014 - March 2015",
    grade: "85%",
    desc: "I completed my class 10 education from Modern Public Inter College, under the UP board, where I studied Science with Computer.",
    degree: "UP Board(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Fitness AI Microservices",
    description:
      "A full-stack AI-powered fitness platform built using Spring Boot microservices with event-driven communication via Apache Kafka. It manages users and activity tracking while generating intelligent fitness recommendations using AI integration. The backend follows database-per-service architecture using MySQL and MongoDB, demonstrating scalable, production-ready microservices with clean separation of concerns.",
    image: fitnessAiMicroservices,
    tags: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "AI Integration",
      "MongoDB",
      "MySQL",
      "Event-Driven Architecture"
    ],
    github: "https://github.com/TheAftabAlam/fitness-ai-microservices"
  },

  {
    id: 1,
    title: "Social Media API (Kafka-based)",
    description:
      "A microservices-based messaging system built using Spring Boot and Apache Kafka. This project demonstrates real-time data streaming through Kafka producers and consumers, enabling asynchronous communication between services with fault tolerance, logging, and error handling. Designed for scalable, event-driven backend systems.",
    image: fbApi,
    tags: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Microservices",
      "Event-Driven",
      "Messaging Systems"
    ],
    github: "https://github.com/TheAftabAlam/FaceBook-API"
  },

  {
    id: 2,
    title: "ShopEase - E-commerce Platform",
    description:
      "A full-stack e-commerce application with a strong backend built using Java, Spring Boot, Hibernate, and MySQL. It provides secure RESTful APIs for authentication, product management, cart handling, and order processing, along with role-based access control. Designed for scalable backend data handling and clean API architecture.",
    image: se,
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST API",
      "Authentication",
      "Role-Based Access"
    ],
    github: "https://github.com/TheAftabAlam/e-commerce"
  },

  {
    id: 3,
    title: "Nursery Plant API",
    description:
      "A backend RESTful API developed using Spring Boot, Hibernate, and MySQL for managing plant inventory, categories, customer orders, and authentication. The system exposes scalable CRUD endpoints with secure data persistence, following clean layered architecture principles.",
    image: nursaryLogo,
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST API",
      "Backend Development"
    ],
    github: "https://github.com/TheAftabAlam/Nursary-Plant-Api"
  },

  {
    id: 4,
    title: "Employee Management System",
    description:
      "A backend-driven employee management system built using Spring Boot and MySQL, exposing RESTful APIs for employee CRUD operations. Integrated with an Angular frontend to demonstrate secure API communication, MVC architecture, and enterprise-level backend practices.",
    image: ems,
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Angular Integration"
    ],
    github: "https://github.com/TheAftabAlam/EmployeeManagement-Springboot-Angular-"
  },

  {
    id: 5,
    title: "Hospital Management System",
    description:
      "A backend-focused hospital management system built using Spring Boot and MySQL. The application exposes secure REST APIs for managing patients, staff, and appointments, following MVC architecture with strong validation and backend security.",
    image: hms,
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Backend Architecture"
    ],
    github: "https://github.com/TheAftabAlam/healthcare-management-system"
  },

  {
    id: 6,
    title: "CricBuzz Clone",
    description:
      "A frontend clone of the CricBuzz platform built using HTML, CSS, and JavaScript to replicate live scores, match schedules, and responsive layouts. This project demonstrates UI structuring and DOM manipulation skills.",
    image: cricbuzz,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],
    github: "https://github.com/VijaySingh8650/cricbuzz"
  }
];


export const certificates = [
  {
    title: "Heroes of HostBooks",
    issuer: "HostBooks Limited",
    date: "2024",
    description:
      "Awarded as a Shining Performer for exceptional contribution, ownership, and impact in delivering high-quality backend solutions for enterprise financial applications.",
    link: "https://drive.google.com/file/d/1mf2bLgn9AIAqvwrlCuBr-2gIv1nLkyto/view", // replace with actual link
  },
  {
    title: "Certificate of Appreciation",
    issuer: "HostBooks Limited",
    date: "2024",
    description:
      "Recognized for outstanding contribution in designing and maintaining the backend architecture of a POS application.",
    link: "https://drive.google.com/file/d/15qerB256LoaG5DBwB9KqQZPAaYpCAfMm/view?usp=drive_link",
  },
  {
    title: "Java Backend Development",
    issuer: "Udemy",
    date: "2022",
    description:
      "Completed a comprehensive specialization in backend development using Java, Spring Boot, and MySQL.",
    link: "https://www.udemy.com/certificate/UC-338ca492-ddea-418c-b06d-6d06f0650e8b/",
  },
  {
    title: "Java",
    issuer: "HackerRank",
    date: "2022",
    description:
      "Certified for strong foundational knowledge and practical skills in Java programming.",
    link: "https://www.hackerrank.com/certificates/ebcaaeb3aba0",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "2022",
    description:
      "Certified for logical reasoning, data structures, and algorithmic problem-solving skills.",
    link: "https://www.hackerrank.com/certificates/0e54e9bd678e",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "2022",
    description:
      "Certified in SQL fundamentals including complex queries, joins, and efficient data handling.",
    link: "https://www.hackerrank.com/certificates/1d861790a3fa",
  },
];


export const menuItems = [
  { id: "about", label: "About" },          // Who you are, quick intro
  { id: "skills", label: "Skills" },        // What you know (tech stack)
  { id: "experience", label: "Experience" },// Your work history
  { id: "work", label: "Projects" },        // Showcase of real work
  { id: "certificates", label: "Certificates" }, // Extra proof of skills
  { id: "education", label: "Education" },  // Academic background
  { id: "contact", label: "Contact" },      // Call to action at end
];