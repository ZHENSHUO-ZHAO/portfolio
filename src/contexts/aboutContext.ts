import createPageContext from "./pageContext";
import type {
  ContactButtonInfo,
  ContextPageBase,
  Header,
  Heading,
} from "./pageContext";
import {
  FaCircleUser,
  FaGear,
  FaWandMagicSparkles,
  FaUsersGear,
  FaGamepad,
  FaFlask,
  FaUserCheck,
  FaSitemap,
  FaChartLine,
  FaHandshakeSimple,
  FaCode,
  FaLayerGroup,
  FaClipboardCheck,
  FaGraduationCap,
  FaMugHot,
  FaCertificate,
  FaChess,
  FaUserGraduate,
  FaCircle,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import { FaProjectDiagram, FaUsers, FaRocket, FaLink } from "react-icons/fa";
import { cv, email } from "../utils/constants";

export type AboutContent = ContextPageBase & {
  header: Header;
  strength: { heading: Heading; items: Heading[] };
  journey: { heading: Heading; items: Heading[] };
  philosophy: { heading: Heading; items: Heading[] };
  aim: { heading: Heading; items: Heading[] };
  leisure: { heading: Heading; details: string; items: Heading[] };
  contact: { heading: Heading; items: ContactButtonInfo[] };
};

export const aboutContent = {
  pageId: "About",
  header: {
    tag: { icon: FaCircleUser, text: "Get to Know Me" },
    title: "Who am I?",
    statement: [
      [
        {
          text: "I'm a software engineer, game developer, and project manager with extensive experience delivering commercial games, interactive products, and scalable digital systems.",
        },
      ],
      [
        { text: "My work blends " },
        {
          text: "engineering",
          style: "font-bold text-(--color-statement-1)",
        },
        { text: ", " },
        {
          text: "UX-driven design",
          style: "font-bold text-(--color-statement-2)",
        },
        { text: ", and " },
        {
          text: "cross-functional collaboration",
          style: "font-bold text-(--color-statement-3)",
        },
        { text: " to build products enjoyed by global audiences." },
      ],
    ],
  },
  strength: {
    heading: {
      title: "My Core Strengths",
      desc: "Four pillars that define my approach to building great products",
    },
    items: [
      {
        tag: { icon: FaGear },
        title: "Engineering Precision",
        desc: "Building robust, scalable systems with attention to technical excellence and code quality.",
      },
      {
        tag: { icon: FaWandMagicSparkles },
        title: "UX Intuition",
        desc: "Creating intuitive experiences that resonate with users and drive engagement.",
      },
      {
        tag: { icon: FaProjectDiagram },
        title: "System Thinking",
        desc: "Architecting solutions that scale, evolve, and maintain stability over time.",
      },
      {
        tag: { icon: FaUsers },
        title: "Collaborative Leadership",
        desc: "Leading cross-functional teams with clear communication and shared vision.",
      },
    ],
  },
  journey: {
    heading: {
      title: "My Professional Journey",
      desc: "From interactive media to modern cloud engineering, here's how I got here",
    },
    items: [
      {
        tag: { icon: FaRocket, text: "Present" },
        title: "Where I Am Now",
        desc: "I work at the intersection of modern full-stack engineering, cloud computing, and technical leadership. Through RMIT coursework and hands-on projects, I've been building with React, Node.js, AWS, Docker, and CI/CD pipelines, while also tutoring Software Engineering Project Management, helping students turn ideas into working software using agile practices.",
      },
      {
        tag: { icon: FaUsersGear, text: "From Engineer to Leader" },
        title: "Growing into Leadership",
        desc: "Before this, I spent nearly a decade at DigitCube, growing from hands-on engineering into product management and technical leadership. I led multiplayer casino game development, designed real-time communication protocols, analyzed player behavior to improve retention, and supported the company's transition as it rebuilt its engineering team during its relocation to the UK.",
      },
      {
        tag: { icon: FaGamepad, text: "Commercial Game Development" },
        title: "Shipping Games at Scale",
        desc: "Earlier in my career, I focused on game development, shipping titles across consoles, tablets, and web/mobile platforms for audiences across the US, UK, EU, and Asia. Working on releases for VTech, VinCi, and Facebook games sharpened my instincts for gameplay systems, performance, and scalable production pipelines.",
      },
      {
        tag: { icon: FaFlask, text: "Interactive Media Origins" },
        title: "My Foundations",
        desc: "I began in interactive media and educational technology, creating VR-based edutainment applications. These early projects shaped how I approach software today - always starting from the user experience and building systems that are both engaging and purposeful.",
      },
      {
        tag: { icon: FaLink },
        title: "The Common Thread",
        desc: "Across every stage, one theme has remained constant: using technology to create meaningful, interactive experiences — from learning and play to large-scale digital platforms.",
      },
    ],
  },
  philosophy: {
    heading: {
      title: "My Philosophy",
      desc: "Four principles that guide every project and decision I make",
    },
    items: [
      {
        tag: { icon: FaUserCheck },
        title: "User-first design",
        desc: "Great products begin with understanding user intention.",
      },
      {
        tag: { icon: FaSitemap },
        title: "Systems thinking",
        desc: "Good architecture enables stability and growth.",
      },
      {
        tag: { icon: FaChartLine },
        title: "Data-driven iteration",
        desc: "Metrics guide refinement and long-term success.",
      },
      {
        tag: { icon: FaHandshakeSimple },
        title: "Clear collaboration",
        desc: "Strong communication strengthens every team.",
      },
    ],
  },
  aim: {
    heading: {
      title: "What I'm Looking For",
      desc: "I'm open to opportunities in:",
    },
    items: [
      {
        tag: { icon: FaCode },
        title: "Software Engineering",
      },
      {
        tag: { icon: FaGamepad },
        title: "Game Development",
      },
      {
        tag: { icon: FaLayerGroup },
        title: "Full-Stack Engineering",
      },
      {
        tag: { icon: FaClipboardCheck },
        title: "Technical Project Management",
      },
      {
        tag: { icon: FaGraduationCap },
        title: "EdTech",
      },
    ],
  },
  leisure: {
    heading: {
      title: "Outside of Work",
      desc: "What keeps me curious, creative, and inspired",
    },
    details:
      "I love exploring new technologies, playing strategy games, and mentoring aspiring engineers. Outside of engineering, I'm passionate about specialty coffee. I've earned SCA certifications in Brewing, Roasting, and Sensory Skills, and I enjoy experimenting with origins, processing methods, and precision extraction techniques.",
    items: [
      {
        tag: { icon: FaMugHot },
        title: "Specialty Coffee",
      },
      {
        tag: { icon: FaCertificate },
        title: "SCA Certified",
      },
      {
        tag: { icon: FaChess },
        title: "Strategy Games",
      },
      {
        tag: { icon: FaUserGraduate },
        title: "Mentoring",
      },
    ],
  },
  contact: {
    heading: {
      tag: { icon: FaCircle, text: "Available for opportunities" },
      title: "Let's Create Something Amazing",
      desc: "Whether you're looking for an engineer, a technical leader, or someone passionate about creating meaningful experiences, I'd love to connect.",
    },
    items: [
      {
        heading: { tag: { icon: FaEnvelope }, title: "Get in Touch", desc: "" },
        contact: { href: email },
      },
      {
        heading: { tag: { icon: FaDownload }, title: "View Resume", desc: "" },
        contact: { href: cv, download: true },
      },
    ],
  },
} satisfies AboutContent;

export const [AboutPageContext, useAboutPageContext] =
  createPageContext(aboutContent);
