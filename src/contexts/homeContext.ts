import createPageContext from "./pageContext";
import type { ContextPageBase, DescriptiveItem } from "./pageContext";
import yoplay from "../assets/images/home/yoplay.webp";
import fishHunter from "../assets/images/home/fish-hunter.webp";
import ninjaSaga from "../assets/images/home/ninja-saga.webp";
import brainsic from "../assets/images/home/brainsic.webp";
import {
  FileBracesCorner,
  Gamepad2,
  GraduationCap,
  MapPinned,
} from "lucide-react";

export type HomeContent = ContextPageBase & {
  name: string;
  roles: string[];
  statement: string;
  highlight: DescriptiveItem[];
  snapshot: DescriptiveItem[];
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
    {
      title: "YoPlay",
      desc: "Large-scale multiplayer casual casino platform",
      image: yoplay,
    },
    {
      title: "Fish Hunter",
      desc: "High-performance real-time arcade shooter slot game",
      image: fishHunter,
    },
    {
      title: "Ninja Saga",
      desc: "Hong Kong's first casual RPG game on Facebook",
      image: ninjaSaga,
    },
    {
      title: "Brainsic",
      desc: "Neuroscience-driven game supporting clinical training for children with ADD",
      image: brainsic,
    },
  ],
  snapshot: [
    {
      title: "Industry Experience",
      desc: "10+ years in game & interactive media development",
      icon: Gamepad2,
    },
    {
      title: "Modern Engineering",
      desc: "Full-stack & cloud dev (React, Node.js, AWS)",
      icon: FileBracesCorner,
    },
    {
      title: "Academic Mentorship",
      desc: "Tutor in Software Engineering Project Management at RMIT",
      icon: GraduationCap,
    },
    {
      title: "Global Collaboration",
      desc: "International experience across Hong Kong, UK & Australia",
      icon: MapPinned,
    },
  ],
  bio: "I'm a software engineer passionate about crafting user-centred, technically sound digital experiences. I enjoy solving complex problems, building interactive systems, and mentoring upcoming developers.",
} satisfies HomeContent;

export const [HomePageContext, useHomePageContext] =
  createPageContext(homeContent);
