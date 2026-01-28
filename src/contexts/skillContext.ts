import {
  FaBolt,
  FaBookOpen,
  FaBrain,
  FaChartLine,
  FaCircle,
  FaCloud,
  FaCode,
  FaCompass,
  FaDatabase,
  FaDesktop,
  FaEnvelope,
  FaGamepad,
  FaLayerGroup,
  FaLightbulb,
  FaMagnifyingGlass,
  FaPeopleGroup,
  FaRocket,
  FaSeedling,
  FaServer,
  FaSitemap,
  FaStar,
  FaUserGear,
} from "react-icons/fa6";
import createPageContext from "./pageContext";
import type { ContextPageBase, Header, Heading, Stat } from "./pageContext";

export type Skill = Heading & { skills: string[] };

export type SkillContent = ContextPageBase & {
  header: Header;
  stats: Stat[];
  overview: { heading: Heading; items: Heading[] };
  stacks: { heading: Heading; items: Skill[] };
  competency: { heading: Heading; items: (Heading & { stat: Stat })[] };
  evolution: { heading: Heading; items: (Heading & { stack: string[] })[] };
  learning: { heading: Heading; items: Heading[] };
  contact: { heading: Heading; items: Heading[] };
};

export const skillContent = {
  pageTitle: "Core Skills",
  header: {
    tag: { icon: FaCode, text: "Technical Expertise" },
    title: "Core Skills",
    statement: [
      [
        { text: "A comprehensive toolkit built through " },
        {
          text: "20+ years",
          style: "font-bold text-(--color-statement-1)",
        },
        {
          text: " of hands-on engineering, product development, and technical leadership",
        },
      ],
    ],
  },
  stats: [
    { icon: FaLayerGroup, amount: "5", unit: "Categories" },
    { icon: FaStar, amount: "30+", unit: "Technologies" },
  ],
  overview: {
    heading: {
      title: "Skills at a Glance",
      desc: "From frontend to backend, from games to cloud infrastructure",
    },
    items: [
      {
        tag: { icon: FaDesktop },
        title: "Frontend",
        desc: "React, Redux, Tailwind CSS, and modern UI frameworks",
      },
      {
        tag: { icon: FaServer },
        title: "Backend",
        desc: "Node.js, Express, REST APIs, and database management",
      },
      {
        tag: { icon: FaCloud },
        title: "Game Dev",
        desc: "Unity3D, Phaser, gameplay architecture, and multiplayer systems",
      },
      {
        tag: { icon: FaGamepad },
        title: "Cloud & DevOps",
        desc: "AWS services, Docker, CI/CD, and infrastructure automation",
      },
    ],
  },
  stacks: {
    heading: {
      title: "Technical Proficiencies",
      desc: "A detailed breakdown of my technical skill set across multiple domains",
    },
    items: [
      {
        tag: { icon: FaLayerGroup },
        title: "Full-Stack Engineering",
        desc: "Modern web development with React ecosystem and Node.js backend",
        skills: [
          "React.js",
          "Redux",
          "Node.js",
          "Express.js",
          "REST API",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        tag: { icon: FaDatabase },
        title: "Databases",
        desc: "SQL and NoSQL database design, optimization, and management",
        skills: ["MongoDB", "MySQL", "DynamoDB"],
      },
      {
        tag: { icon: FaGamepad },
        title: "Game Development",
        desc: "Cross-platform game engines, multiplayer systems, and gameplay architecture",
        skills: [
          "Unity3D",
          "C#",
          "Gameplay Architecture",
          "Phaser",
          "Egret Engine",
          "TypeScript",
          "WebSocket",
          "Lua",
        ],
      },
      {
        tag: { icon: FaLayerGroup },
        title: "Cloud & DevOps",
        desc: "Cloud infrastructure, containerization, and deployment automation",
        skills: [
          "AWS (EC2, Lambda, S3, DynamoDB)",
          "Docker",
          "GitHub Actions",
          "Linux Servers",
        ],
      },
      {
        tag: { icon: FaUserGear },
        title: "Professional Skills",
        desc: "Leadership, project management, and cross-functional collaboration",
        skills: [
          "Agile",
          "Scrum",
          "Project Management",
          "System Design",
          "Stakeholder Communication",
          "Team Leadership",
          "Mentoring",
          "Analytics-driven decision making",
        ],
      },
    ],
  },
  competency: {
    heading: {
      title: "Core Competencies",
      desc: "Key areas where I excel and deliver the most value",
    },
    items: [
      {
        tag: { icon: FaSitemap },
        title: "System Architecture",
        desc: "Designing scalable, maintainable systems that grow with business needs. From monoliths to microservices, I've built architectures that last.",
        stat: { amount: "90%", unit: "Proficiency-Expert" },
      },
      {
        tag: { icon: FaBolt },
        title: "Real-Time Systems",
        desc: "Building multiplayer games and live applications with WebSocket, real-time data sync, and low-latency communication protocols.",
        stat: { amount: "95%", unit: "Proficiency-Expert" },
      },
      {
        tag: { icon: FaDesktop },
        title: "Modern Frontend",
        desc: "Creating responsive, performant UIs with React, state management, and modern CSS frameworks. User experience is always top priority.",
        stat: { amount: "88%", unit: "Proficiency-Advanced" },
      },
      {
        tag: { icon: FaPeopleGroup },
        title: "Technical Leadership",
        desc: "Leading cross-functional teams, mentoring engineers, and driving technical decisions that align with business goals.",
        stat: { amount: "90%", unit: "Proficiency-Expert" },
      },
    ],
  },
  evolution: {
    heading: {
      title: "Skill Evolution",
      desc: "How my technical expertise has grown and adapted over the years",
    },
    items: [
      {
        tag: { icon: FaSeedling },
        title: "Early Years (2002-2010)",
        desc: "Started with interactive media, VR, and 3D graphics. Built foundations in design tools, animation, and early game engines.",
        stack: ["VR", "Maya", "After Effects", "Flash", "ActionScript"],
      },
      {
        tag: { icon: FaChartLine },
        title: "Growth Phase (2010-2021)",
        desc: "Deep dive into game development with Unity3D, multiplayer systems, and cross-platform engineering. Transitioned into product management.",
        stack: [
          "Unity3D",
          "C#",
          "WebSocket",
          "Egret Engine",
          "TypeScript",
          "Phaser",
          "MongoDB",
        ],
      },
      {
        tag: { icon: FaRocket },
        title: "Modern Era (2021-Present)",
        desc: "Embraced modern full-stack development, cloud computing, and technical leadership. Teaching and mentoring the next generation.",
        stack: [
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "AWS",
          "Docker",
          "CI/CD",
        ],
      },
    ],
  },
  learning: {
    heading: {
      tag: { icon: FaBrain },
      title: "Continuous Learning",
      desc: "Technology evolves rapidly, and so do I. Every project is an opportunity to learn something new, whether it's a framework, a pattern, or a better way to solve problems.",
    },
    items: [
      {
        tag: { icon: FaBookOpen },
        title: "Currently Exploring",
        desc: "Advanced AWS architectures, serverless patterns, and modern CI/CD practices",
      },
      {
        tag: { icon: FaCompass },
        title: "Next on List",
        desc: "Kubernetes, and AI/ML integration in web applications",
      },
      {
        tag: { icon: FaLightbulb },
        title: "Learning Approach",
        desc: "Hands-on projects, online courses, and mentoring others",
      },
    ],
  },
  contact: {
    heading: {
      tag: { icon: FaCircle, text: "Ready to collaborate" },
      title: "Let's Build Together",
      desc: "Whether you need a full-stack engineer, a game developer, or a technical leader, I bring a proven track record and a passion for creating exceptional digital experiences.",
    },
    items: [
      {
        tag: { icon: FaEnvelope },
        title: "Get in Touch",
        desc: "",
      },
      {
        tag: { icon: FaMagnifyingGlass },
        title: "View My Work",
        desc: "",
      },
    ],
  },
} satisfies SkillContent;

export const [SkillPageContext, useSkillPageContext] =
  createPageContext(skillContent);
