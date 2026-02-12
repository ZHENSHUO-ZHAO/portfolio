import createPageContext from "./pageContext";
import type {
  ContactButtonInfo,
  ContextPageBase,
  Header,
  Heading,
  HybridText,
  Image,
  Tag,
} from "./pageContext";
import yoplay from "../assets/images/home/yoplay.webp";
import fishHunter from "../assets/images/home/fish-hunter.webp";
import ninjaSaga from "../assets/images/home/ninja-saga.webp";
import brainsic from "../assets/images/home/brainsic.webp";
import portrait from "../assets/images/home/portrait.webp";
import {
  FaBoltLightning,
  FaBrain,
  FaChartLine,
  FaCircleUser,
  FaCode,
  FaDice,
  FaDownload,
  FaEarthAsia,
  FaEnvelope,
  FaFish,
  FaGamepad,
  FaGraduationCap,
  FaMagnifyingGlass,
  FaRocket,
  FaStar,
  FaUser,
  FaUserNinja,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { LuArrowRight } from "react-icons/lu";
import { cv, email } from "../utils/constants";

export type HomeHeader = Header & {
  altStatement: HybridText[];
  roles: string[];
  cta: [Tag, Tag];
  portrait: Image;
};

export type HighlightItem = Image & {
  icon: IconType;
  detail: Tag;
  href: string;
};

export type HomeContent = ContextPageBase & {
  header: HomeHeader;
  highlight: { heading: Heading; items: HighlightItem[] };
  snapshot: { heading: Heading; items: Heading[] };
  bio: { heading: Heading; intro: Tag };
  contact: { heading: Heading; items: ContactButtonInfo[] };
};

export const homeContent = {
  pageId: "Home",
  header: {
    tag: { icon: FaBoltLightning, text: "Ambitious for Challenges" },
    title: "Zhenshuo (Vincent) Zhao",
    statement: [
      [
        { text: "I craft engaging digital experiences\n" },
        {
          text: "- from immersive games to intuitive educational platforms -\n",
          style: "text-tone1-600 dark:text-tone1-400",
        },
        {
          text: "blending technical expertise with creative problem-solving \nto deliver solutions that make an impact.",
        },
      ],
    ],
    altStatement: [
      [
        { text: "I craft engaging digital experiences" },
        {
          text: "- from immersive games to intuitive educational platforms -",
          style: "text-tone1-600 dark:text-tone1-400",
        },
        {
          text: "blending technical expertise with creative problem-solving to deliver solutions that make an impact.",
        },
      ],
    ],
    roles: [
      "Software Engineer",
      "Game Developer",
      "Project Manager",
      "RMIT Tutor",
    ],
    cta: [
      { icon: FaMagnifyingGlass, text: "View My Work" },
      { icon: FaUser, text: "About Me" },
    ],
    portrait: {
      url: portrait,
      alt: "Professional portrait of Zhenshuo Vincent Zhao, Asian male software engineer, confident expression, modern casual business attire, classic black frame glasses, clean studio lighting, thinking outside the box concept, without background.",
    },
  },
  highlight: {
    heading: {
      tag: { icon: FaStar, text: "Featured Projects" },
      title: "Project Highlights",
      desc: "Key products I've built and shipped across gaming, education, and interactive platforms",
    },
    items: [
      {
        title: "YoPlay",
        desc: "Large-scale multiplayer casual casino platform",
        url: yoplay,
        alt: "The opening screen of the YoPlay platform with its chubby boy mascot of fortune carrying a huge bag of gold coins in the middle.",
        icon: FaDice,
        detail: { icon: LuArrowRight, text: "More Details" },
        href: "/project/commercial/#yoplay",
      },
      {
        title: "Fish Hunter",
        desc: "High-performance real-time arcade shooter slot game",
        url: fishHunter,
        alt: "The title screen of Fish Hunter platform, an underwater arcade shooter game with colorful fish and ocean environment, dynamic action scene, vibrant gaming graphics.",
        icon: FaFish,
        detail: { icon: LuArrowRight, text: "More Details" },
        href: "/project/commercial/#fish-hunter",
      },
      {
        title: "Ninja Saga",
        desc: "Hong Kong's first casual RPG game on Facebook",
        url: ninjaSaga,
        alt: "The title screen of Ninja Saga, anime-style ninja RPG game scene with character in action pose, vibrant Japanese-inspired art style, Facebook game aesthetic.",
        icon: FaUserNinja,
        detail: { icon: LuArrowRight, text: "More Details" },
        href: "/project/commercial/#ninja-saga",
      },
      {
        title: "Brainsic",
        desc: "Neuroscience-driven game supporting clinical training",
        url: brainsic,
        alt: "An educational neuroscience game interface with brain visualization and music elements, child-friendly design, clinical training application.",
        icon: FaBrain,
        detail: { icon: LuArrowRight, text: "More Details" },
        href: "/project/research/#brainsic",
      },
    ],
  },
  snapshot: {
    heading: {
      tag: {
        icon: FaChartLine,
        text: "Quick Overview",
      },
      title: "Career Snapshot",
      desc: "Key milestones and expertise that define my professional journey",
    },
    items: [
      {
        tag: { icon: FaGamepad },
        title: "Industry Experience",
        desc: "10+ years in gaming & interactive media development",
      },
      {
        tag: { icon: FaCode },
        title: "Modern Engineering",
        desc: "Full-stack & cloud dev (React, Node.js, AWS)",
      },
      {
        tag: { icon: FaGraduationCap },
        title: "Academic Mentorship",
        desc: "Tutor in Software Engineering Project Management at RMIT",
      },
      {
        tag: { icon: FaEarthAsia },
        title: "Global Collaboration",
        desc: "International experience across Hong Kong, UK & Australia",
      },
    ],
  },
  bio: {
    heading: {
      tag: { icon: FaCircleUser, text: "Get to Know Me" },
      title: "A Quick Introduction",
      desc: "",
    },
    intro: {
      icon: BsChatRightQuoteFill,
      text: "I'm a software engineer who enjoys turning complex problems into clear, well-structured systems. My work focuses on building interactive products that balance performance, usability, and maintainability. I'm especially motivated by collaborative problem-solving and mentoring developers as they grow.",
    },
  },
  contact: {
    heading: {
      tag: { icon: FaRocket, text: "Let's Build Together" },
      title: "Ready to Collaborate?",
      desc: "I'm always excited to connect with teams working on meaningful projects. Whether you need an engineer, technical leader, or mentor, let's talk.",
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
} satisfies HomeContent;

export const [HomePageContext, useHomePageContext] =
  createPageContext(homeContent);
