import createPageContext from "./pageContext";
import type { ContextPageBase, DescriptiveItem } from "./pageContext";

export type AboutContent = ContextPageBase & {
  introduction: string;
  strength: string[];
  journey: DescriptiveItem[];
  philosophy: DescriptiveItem[];
  aim: { desc: string; roles: string[] };
  leisure: { desc: string; tags: DescriptiveItem[] };
};

export const aboutContent = {
  pageTitle: "Who am I?",
  introduction:
    "I'm a software engineer, game developer, and project manager with extensive experience delivering commercial games, interactive products, and scalable digital systems. My work blends engineering, UX-driven design, and cross-functional collaboration to build products enjoyed by global audiences. My strengths are anchored in four core areas.",
  strength: [
    "Engineering Precision",
    "UX Intuition",
    "System Thinking",
    "Collaborative Leadership",
  ],
  journey: [
    {
      title: "Where I Am Now",
      subtitle: "Present",
      desc: "I work at the intersection of modern full-stack engineering, cloud computing, and technical leadership. Through RMIT coursework and hands-on projects, I've been building with React, Node.js, AWS, Docker, and CI/CD pipelines, while also tutoring Software Engineering Project Management, helping students turn ideas into working software using agile practices.",
    },
    {
      title: "Growing into Leadership",
      subtitle: "From Engineer to Leader",
      desc: "Before this, I spent nearly a decade at DigitCube, growing from hands-on engineering into product management and technical leadership. I led multiplayer casino game development, designed real-time communication protocols, analyzed player behavior to improve retention, and supported the company's transition as it rebuilt its engineering team during its relocation to the UK.",
    },
    {
      title: "Shipping Games at Scale",
      subtitle: "Commercial Game Development",
      desc: "Earlier in my career, I focused on game development, shipping titles across consoles, tablets, and web/mobile platforms for audiences across the US, UK, EU, and Asia. Working on releases for VTech, VinCi, and Facebook games sharpened my instincts for gameplay systems, performance, and scalable production pipelines.",
    },
    {
      title: "My Foundations",
      subtitle: "Interactive Media Origins",
      desc: "I began in interactive media and educational technology, creating VR-based edutainment applications. These early projects shaped how I approach software today — always starting from the user experience and building systems that are both engaging and purposeful.",
    },
    {
      title: "The Common Thread",
      desc: "Across every stage, one theme has remained constant: using technology to create meaningful, interactive experiences — from learning and play to large-scale digital platforms.",
    },
  ],
  philosophy: [
    {
      title: "User-first design",
      desc: "Great products begin with understanding user intention.",
    },
    {
      title: "Systems thinking",
      desc: "Good architecture enables stability and growth.",
    },
    {
      title: "Data-driven iteration",
      desc: "Metrics guide refinement and long-term success.",
    },
    {
      title: "Clear collaboration",
      desc: "Strong communication strengthens every team.",
    },
  ],
  aim: {
    desc: "I'm open to opportunities in:",
    roles: [
      "Software Engineering",
      "Game Development",
      "Full-Stack Engineering",
      "Technical Project Management",
      "EdTech",
    ],
  },
  leisure: {
    desc: "I love exploring new technologies, playing strategy games, and mentoring aspiring engineers. Outside of engineering, I'm passionate about specialty coffee. I've earned SCA certifications in Brewing, Roasting, and Sensory Skills, and I enjoy experimenting with origins, processing methods, and precision extraction techniques.",
    tags: [
      { desc: "Specialty Coffee" },
      { desc: "SCA Certified" },
      { desc: "Strategy Games" },
      { desc: "Mentoring" },
    ],
  },
} satisfies AboutContent;

export const [AboutPageContext, useAboutPageContext] =
  createPageContext(aboutContent);
