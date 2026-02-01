import type { IconType } from "react-icons";
import createPageContext from "./pageContext";
import type {
  ContactButtonInfo,
  ContextPageBase,
  Header,
  Heading,
  Stat,
  Tag,
} from "./pageContext";
import {
  FaRocket,
  FaLayerGroup,
  FaCode,
  FaBuilding,
  FaGraduationCap,
  FaFlask,
  FaUsers,
  FaGlobe,
  FaGamepad,
  FaBolt,
  FaFacebook,
  FaMobileScreen,
  FaChild,
  FaCopyright,
  FaBrain,
  FaHeartPulse,
  FaHospital,
  FaMusic,
  FaUserDoctor,
  FaCircle,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import { cv, email } from "../utils/constants";

export type ProjectCategory = {
  category: string;
  definition: string;
  icon: IconType;
  items: ProjectItem[];
};

export type ProjectItem = {
  title: string;
  id: string;
  company: string;
  time: string;
  isSelfemployed?: true;
  roles: string[];
  desc: string;
  releases?: string[];
  skills: string[];
  tags: Tag[];
};

export type ProjectContent = ContextPageBase & {
  header: Header;
  stats: Stat[];
  projects: {
    commercial: ProjectCategory;
    edutainment: ProjectCategory;
    research: ProjectCategory;
  };
  impact: { heading: Heading; items: Stat[] };
  contact: { heading: Heading; items: ContactButtonInfo[] };
};

export const projectContent = {
  pageTitle: "Notable Projects",
  header: {
    tag: { icon: FaRocket, text: "Featured Work" },
    title: "Notable Projects",
    statement: [
      [
        { text: "From " },
        {
          text: "multiplayer platforms",
          style: "font-bold text-(--color-statement-1)",
        },
        { text: " to " },
        {
          text: "educational games",
          style: "font-bold text-(--color-statement-2)",
        },
        { text: " to " },
        {
          text: "experimental research",
          style: "font-bold text-(--color-statement-3)",
        },
      ],
    ],
  },
  stats: [
    { icon: FaLayerGroup, amount: "3", unit: "Categories" },
    { icon: FaCode, amount: "7", unit: "Projects" },
  ],
  projects: {
    commercial: {
      category: "Commercial Game Platforms",
      definition:
        "Large-scale multiplayer platforms and social games built for global audiences",
      icon: FaBuilding,
      items: [
        {
          title: "YoPlay - Casual Casino Platform",
          id: "yoplay",
          company: "DigitCube.com Limited",
          time: "Sep 2014 - Mar 2022",
          desc: "YoPlay is a large-scale, multiplayer casual casino ecosystem built as a social extension of Asia Gaming's traditional titles (Baccarat, Roulette). Styled as an arcade-inspired platform, YoPlay blends fast, interactive slot experiences with synchronous multiplayer features and social mechanics to boost engagement and retention.",
          roles: ["Analyst Programmer", "Product Manager"],
          skills: [
            "Egret Engine",
            "TypeScript",
            "WebSocket",
            "DragonBone",
            "Feather",
          ],
          tags: [
            { icon: FaUsers, text: "Multiplayer" },
            { icon: FaGlobe, text: "Asia Markets" },
          ],
        },
        {
          title: "Fish Hunter - Multiplayer Arcade Shooter",
          id: "fish-hunter",
          company: "DigitCube.com Limited",
          time: "Apr 2021 - Apr 2022",
          desc: "Fish Hunter is a fast-paced, real-time multiplayer arcade shooter built to expand Asia Gaming's casual slot portfolio. Designed with responsive physics, rapid projectile interactions, and high-frequency state updates, it became AG's first \"moving slot\" experience - introducing dynamic, skill-based gameplay into a traditionally static product category.",
          roles: ["Analyst Programmer", "Product Manager"],
          skills: ["Phaser", "TypeScript", "GoLang", "MongoDB", "WebSocket"],
          tags: [
            { icon: FaGamepad, text: "Real-time Physics" },
            { icon: FaBolt, text: "High-frequency Updates" },
          ],
        },
        {
          title: "Ninja Saga - Social RPG for Facebook & Mobile",
          id: "ninja-saga",
          company: "Emagist Entertainment Limited",
          time: "Jan 2013 - Sep 2014",
          desc: "Ninja Saga is one of Hong Kong's first large-scale casual RPGs on Facebook, inspired by the Naruto universe and designed for global audiences. I contributed to both live operations and the full mobile rebuild, porting the game to Unity3D to support iOS and Android with improved performance, UI, and gameplay responsiveness.",
          roles: ["Game Developer"],
          skills: ["Unity3D", "C#", "ActionScript 3", "REST API"],
          tags: [
            { icon: FaFacebook, text: "Facebook Platform" },
            { icon: FaMobileScreen, text: "iOS & Android" },
          ],
        },
      ],
    },
    edutainment: {
      category: "Edutainment",
      definition:
        "Educational games and interactive learning experiences for children",
      icon: FaGraduationCap,
      items: [
        {
          title: "Educational games for the VinCi Tablet (Android)",
          id: "vinci",
          company: "Rullingnet Corporation Limited",
          time: "Mar 2012 - Jan 2013",
          desc: "These four titles were developed for the VinCi Tablet, a preschool-focused educational device distributed in the US and Canadian markets. Each app was created in collaboration with an education professor in Canada to support early-childhood cognitive and behavioral learning through structured gameplay.",
          roles: ["Game Programmer"],
          releases: [
            "How Many Pins?",
            "I Know 100!",
            "Being Considerate",
            "Playground",
          ],
          skills: ["Unity3D", "C#", "Android SDK", "Java"],
          tags: [
            { icon: FaChild, text: "Preschool Education" },
            { icon: FaGlobe, text: "US & CA Markets" },
          ],
        },
        {
          title: "VTech Global Releases",
          id: "vtech",
          company: "VTech Electronics Limited",
          time: "Jul 2010 - Mar 2012",
          desc: "These titles were designed for VTech's global preschool gaming consoles, including V.Smile Motion, V.Reader, and InnoTab. Each game was produced under strict IP and educational standards in collaboration with licensors such as Disney, Pixar, and Sanrio, and released across the US, UK, and EU markets.",
          roles: ["Game Designer"],
          releases: [
            "Cars 2",
            "Hello Kitty (V.Reader)",
            "Hello Kitty (InnoTab)",
            "Brave",
          ],
          skills: [
            "ActionScript 3",
            "Gameplay Design",
            "Level Design",
            "Story Writing",
            "Curriculum Fitting",
            "Voice Talent Coordination",
          ],
          tags: [
            { icon: FaCopyright, text: "Disney, Pixar, Sanrio IP" },
            { icon: FaGlobe, text: "US, UK, EU Markets" },
          ],
        },
      ],
    },
    research: {
      category: "Research & Experimental Projects",
      definition:
        "Pioneering work in EEG-controlled games and neurofeedback applications",
      icon: FaFlask,
      items: [
        {
          title: "Jack's Adventure and The Mighty Ant",
          id: "indie",
          company: "Self-employed",
          time: "Apr 2010 - June 2010",
          desc: "Jack's Adventure and The Mighty Ant are two independently developed, EEG-controlled RPG games that extend my previous research experience with Brainsic. Designed for children with attention and focus training needs, both titles use NeuroSky brainwave inputs to drive in-game mechanics and provide real-time feedback.",
          isSelfemployed: true,
          roles: ["Independent Game Developer"],
          skills: ["Unity3D", "C#", "NeuroSky SDK"],
          tags: [
            { icon: FaBrain, text: "EEG-Controlled" },
            { icon: FaHeartPulse, text: "Focus Training" },
          ],
        },
        {
          title: "Brainsic",
          id: "brainsic",
          company: "PlayLab - The Hong Kong Polytechnic University",
          time: "Oct 2009 - Mar 2010",
          desc: "Brainsic is an EEG-driven music interaction game developed in collaboration with The Hong Kong Polytechnic University and Caritas Medical Centre. Designed for children with ADD, the game uses real-time brainwave data to support focus training and behavioral therapy within clinical settings.",
          roles: ["Project Assistant"],
          skills: ["Unity3D", "C#", "NeuroSky SDK"],
          tags: [
            { icon: FaHospital, text: "Clinical Research" },
            { icon: FaMusic, text: "Music Interaction" },
            { icon: FaUserDoctor, text: "ADD Therapy" },
          ],
        },
      ],
    },
  },
  impact: {
    heading: {
      title: "Project Impact",
      desc: "A decade of building meaningful experiences",
    },
    items: [
      {
        amount: "7",
        unit: "Major Projects",
      },
      {
        amount: "6",
        unit: "Global Markets",
      },
      {
        amount: "5+",
        unit: "Platforms",
      },
      {
        amount: "10+",
        unit: "Years Experience",
      },
    ],
  },
  contact: {
    heading: {
      tag: { icon: FaCircle, text: "Available for opportunities" },
      title: "Interested in Working Together?",
      desc: "I'm always open to discussing new projects, creative ideas, or opportunities to bring engaging experiences to life.",
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
} satisfies ProjectContent;

export const [ProjectPageContext, useProjectPageContext] =
  createPageContext(projectContent);
