import createPageContext from "./pageContext";
import type { ContextPageBase, DescriptiveItem } from "./pageContext";

export type HomeContent = ContextPageBase & {
  name: string;
  roles: string[];
  statement: string;
  highlight: DescriptiveItem[];
  snapshot: string[];
  bio: string;
};

export const homeContent = {
  pageTitle: "Home Page",
  name: "Zhenshuo (Vincent) Zhao",
  roles: [
    "Software Engineer",
    "Game Developer",
    "Project Manager",
    "RMIT Tutor",
  ],
  statement:
    "I craft engaging digital experiences \n — from immersive games to intuitive educational platforms — \n blending technical expertise with creative problem-solving \n to deliver solutions that make an impact.",
  highlight: [
    { title: "YoPlay", desc: "Large-scale multiplayer casual casino platform" },
    {
      title: "Fish Hunter",
      desc: "High-performance real-time arcade shooter slot game",
    },
    {
      title: "Ninja Saga",
      desc: "Hong Kong's first casual RPG game on Facebook",
    },
    {
      title: "Brainsic",
      desc: "Neuroscience-driven game supporting clinical training for children with ADD",
    },
  ],
  snapshot: [
    "10+ years in game & interactive media development",
    "Full-stack & cloud dev (React, Node.js, AWS)",
    "Tutor in Software Engineering Project Management at RMIT",
    "International experience across Hong Kong, UK & Australia",
  ],
  bio: "I'm a software engineer passionate about crafting user-centred, technically sound digital experiences. I enjoy solving complex problems, building interactive systems, and mentoring upcoming developers.",
} satisfies HomeContent;

export const [HomePageContext, useHomePageContext] =
  createPageContext(homeContent);
