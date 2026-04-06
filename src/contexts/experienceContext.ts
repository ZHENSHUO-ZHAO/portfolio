import createPageContext from "./pageContext";
import type { ContextPageBase, Header, Heading, Stat } from "./pageContext";
import {
  FaBriefcase,
  FaBuilding,
  FaGlobe,
  FaRocket,
  FaUserGroup,
} from "react-icons/fa6";

export type Job = {
  title: string;
  company: string;
  time: string;
  location: { city: string; country: string };
  tasks: string[];
  skills: string[];
  products?: string[];
  markets?: string[];
};

export type ExperienceContent = ContextPageBase & {
  header: Header;
  stats: Stat[];
  career: { heading: Heading; items: Job[] };
};

export const experienceContent = {
  header: {
    tag: { icon: FaBriefcase, text: "10+ Years in Tech" },
    title: "My Career Life",
    statement: [
      [
        { text: "From " },
        {
          text: "interactive VR",
          style: "font-bold text-(--color-statement-1)",
        },
        { text: " to " },
        {
          text: "multiplayer gaming",
          style: "font-bold text-(--color-statement-2)",
        },
        { text: " to " },
        {
          text: "modern cloud engineering",
          style: "font-bold text-(--color-statement-3)",
        },
      ],
    ],
  },
  stats: [
    { icon: FaBuilding, amount: "9", unit: "Companies" },
    { icon: FaUserGroup, amount: "10", unit: "Roles" },
    { icon: FaGlobe, amount: "4", unit: "Cities" },
    { icon: FaRocket, amount: "14", unit: "Products Shipped" },
  ],
  career: {
    heading: {
      title: "Career Timeline",
      desc: "20+ years of building, learning, and leading",
    },
    items: [
      {
        title: "Casual Tutor - Software Engineering Project Management",
        company: "RMIT University",
        time: "Feb 2025 - Present",
        location: { city: "Melbourne", country: "Australia" },
        tasks: [
          "Facilitate workshops on Agile delivery, Scrum practices, sprint planning, and project governance.",
          "Mentor student teams in backlog prioritisation, stakeholder communication, and delivery planning.",
          "Guide teams in applying structured development workflows to improve collaboration and delivery outcomes as a Scrum Master.",
        ],
        skills: ["Agile/Scrum", "Jira", "Trello", "Scrum Master"],
      },
      {
        title: "Product Manager",
        company: "DigitCube.com Limited",
        time: "Apr 2022 - Feb 2023",
        location: { city: "London", country: "United Kingdom" },
        tasks: [
          "Led end-to-end delivery of real-time, web-based, and iGaming platforms, coordinating cross-functional teams across engineering, design, and QA.",
          "Defined project scope, timelines, and deliverables, ensuring alignment with business objectives.",
          "Managed sprint planning, backlog prioritisation, and release coordination in an Agile environment.",
          "Collaborated with stakeholders to gather and refine requirements, translating them into actionable development plans.",
          "Established a new UK development team, onboarding engineers and aligning processes with global delivery standards.",
          "Improved internal tools using React.js, enhancing operational efficiency and team productivity.",
        ],
        skills: [
          "Agile PM",
          "Cross-Cultural Team Leadership",
          "Sprint Planning & Backlog Prioritisation",
          "Feature Roadmapping",
          "Stakeholder Management",
          "React.js",
          "Redux",
          "TypeScript",
          "Node.js",
        ],
      },
      {
        title: "Product Manager",
        company: "DigitCube.com Limited",
        time: "Apr 2021 - Apr 2022",
        location: { city: "Hong Kong", country: "China" },
        tasks: [
          "Managed multiple concurrent projects delivering real-time, web-based, and iGaming platforms for international clients, ensuring delivery within scope and timelines.",
          "Led cross-functional teams across frontend, backend, QA, and DevOps, aligning technical execution with business objectives.",
          "Coordinated internal, outsourced, and regional teams (Hong Kong, Taiwan, Philippines) to scale delivery capacity and maintain alignment on requirements, timelines, and quality standards.",
          "Defined and documented business and technical requirements, translating them into actionable development plans and system implementations.",
          "Monitored project progress, identified risks, and implemented mitigation strategies to ensure continuous delivery across multiple initiatives.",
          "Managed campaign delivery under uncertain user demand, dynamically adjusting reward distribution logic to ensure budget control, fairness, and system stability.",
          "Partnered with backend engineers to develop configurable operational tools, enabling real-time adjustments and improving control over live campaign outcomes.",
          "Coordinated production releases and incident response, ensuring minimal disruption and maintaining system reliability in high-traffic environments.",
          "Acted as a key liaison between stakeholders and engineering teams, ensuring clear communication and alignment throughout the project lifecycle.",
        ],
        skills: [
          "Agile PM",
          "Cross-Cultural Team Leadership",
          "Sprint Planning & Backlog Prioritisation",
          "Feature Roadmapping",
          "Stakeholder Management",
          "Requirements Analysis",
          "Campaign Delivery",
          "Budget Control",
          "Risk Management",
          "Issue Resolution",
          "Phaser",
          "MongoDB",
          "GoLang",
          "WebSocket",
          "GitLab",
        ],
        products: ["YoPlay Platform", "Fish Hunter"],
        markets: ["Asia"],
      },
      {
        title: "Analyst Programmer",
        company: "DigitCube.com Limited",
        time: "Sep 2014 - Mar 2021",
        location: { city: "Hong Kong", country: "China" },
        tasks: [
          "Developed multiplayer casino games for web and mobile platforms using client–server architecture.",
          "Collaborated with cross-functional teams to implement APIs, communication protocols, and system integrations.",
          "Supported production systems through debugging, issue resolution, and performance optimisation.",
          "Worked with product and analytics teams to evaluate user behaviour and support feature improvements.",
          "Contributed to technical documentation and system improvements to enhance maintainability and scalability.",
        ],
        skills: [
          "Unity3D",
          "C#",
          "TypeScript",
          "Lua",
          "Egret Engine",
          "WebSocket",
          "GitLab",
        ],
        products: [
          "YoPlay Platform",
          "Red Dragon Poker",
          "Asia Gaming Slot Series",
        ],
        markets: ["Asia"],
      },
      {
        title: "Game Developer",
        company: "Emagist Entertainment Limited",
        time: "Jan 2013 - Sep 2014",
        location: { city: "Hong Kong", country: "China" },
        tasks: [
          "Developed and maintained Ninja Saga for Facebook and mobile.",
          "Created in-game campaigns and improved monetisation through data-driven enhancements.",
          "Collaborated with designers and backend engineers to deliver features and improve system performance.",
          "Mentored junior developers and improved development workflows.",
        ],
        skills: ["Unity3D", "C#", "Flash/ActionScript 3", "REST API", "SVN"],
        products: ["Ninja Saga (Facebook + Mobile)"],
        markets: ["Global"],
      },
      {
        title: "Game Programmer",
        company: "Rullingnet Corporation Limited",
        time: "Mar 2012 - Jan 2013",
        location: { city: "Hong Kong", country: "China" },
        tasks: [
          "Built educational games for the VinCi Tablet (Android).",
          "Provided technical support for product delivery and campaign initiatives.",
        ],
        skills: ["Unity3D", "C#", "Android SDK", "Java", "SVN"],
        products: [
          "How Many Pins?",
          "I Know 100!",
          "Being Considerate",
          "Playground",
        ],
        markets: ["US", "CA"],
      },
      {
        title: "Game Designer",
        company: "VTech Electronics Limited",
        time: "Jul 2010 - Mar 2012",
        location: { city: "Hong Kong", country: "China" },
        tasks: [
          "Designed interactive software and collaborated with engineering teams on implementation and system behaviour.",
          "Worked with external stakeholders (e.g. Disney, Pixar, Sanrio) to ensure IP compliance and delivery quality.",
          "Designed UX flows, data logging components, and marketing trailers.",
        ],
        skills: [
          "Game Design",
          "IP Compliance",
          "UI/UX Design",
          "Project Coordination",
          "Story Writing",
          "Flash/ActionScript 3",
        ],
        products: [
          "Cars 2",
          "Hello Kitty (V.Reader)",
          "Hello Kitty (InnoTab)",
          "Brave",
        ],
        markets: ["US", "UK", "EU"],
      },
      {
        title: "Project Assistant",
        company: "PlayLab - The Hong Kong Polytechnic University",
        time: "Oct 2009 - Mar 2010",
        location: { city: "Hong Kong", country: "China" },
        tasks: [
          "Conducted research on EEG-based games for children with ADD.",
          "Developed Brainsic, an EEG-controlled music interaction game.",
        ],
        skills: [
          "Game Design",
          "Unity3D",
          "C#",
          "NeuroSky SDK",
          "HCI Prototyping",
        ],
        products: ["Brainsic"],
        markets: ["Hong Kong"],
      },
      {
        title: "Interactive Designer & Animation Tutor",
        company: "Guangzhou Children's Palace",
        time: "Sep 2005 - Aug 2008",
        location: { city: "Guangzhou", country: "China" },
        tasks: [
          "Built interactive learning applications for youth education.",
          "Taught animation and created promotional materials.",
        ],
        skills: ["Photoshop", "Maya", "After Effects", "Premiere"],
      },
      {
        title: "Interactive Designer",
        company: "Canada Stanley Computer Animation Research Unit",
        time: "Jul 2002 - Aug 2005",
        location: { city: "Guangzhou", country: "China" },
        tasks: [
          "Developed 3D virtual reality applications for education.",
          "Built the stereoscopic “Virtual Antique Museum” for Sun Yat-Sen University.",
        ],
        skills: ["Early VR frameworks", "Photoshop", "Maya"],
      },
      {
        title: "Part-Time Interactive Designer",
        company: "South China Normal University",
        time: "Sep 2004 - Jul 2005",
        location: { city: "Guangzhou", country: "China" },
        tasks: [
          "Researched the education methodology used in the TV broadcasting course lab.",
          'Designed the "Virtual Broadcasting Lab" online education system.',
        ],
        skills: ["Early VR frameworks", "Photoshop", "Maya"],
      },
    ],
  },
  pageId: "Experience",
} satisfies ExperienceContent;

export const [ExperiencePageContext, useExperiencePageContext] =
  createPageContext(experienceContent);
