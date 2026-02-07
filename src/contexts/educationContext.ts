import {
  FaAward,
  FaBook,
  FaBrain,
  FaChalkboardUser,
  FaCircleCheck,
  FaGraduationCap,
  FaHandsHoldingCircle,
  FaLightbulb,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa6";
import createPageContext from "./pageContext";
import type {
  ContextPageBase,
  Header,
  Heading,
  Stat,
  Tag,
} from "./pageContext";
import rmit from "../assets/images/education/rmit.webp";
import polyu from "../assets/images/education/polyu.webp";
import scnu from "../assets/images/education/scnu.webp";
import rmitLogo from "../assets/images/education/logo_rmit.webp";
import polyuLogo from "../assets/images/education/logo_polyu.webp";
import scnuLogo from "../assets/images/education/logo_scnu.webp";

export type Degree = {
  qualification: string;
  university: string;
  time: string;
  achievements?: (Tag & { abbrev?: string })[];
  details: Tag[];
  bgUrl: string;
};

export type EducationFoundation = Heading & {
  university: string;
  achievement: Stat;
  logo: string;
};

export type EducationContent = ContextPageBase & {
  header: Header;
  stats: Stat[];
  foundation: { heading: Heading; items: EducationFoundation[] };
  timeline: { heading: Heading; items: Degree[] };
  learning: { heading: Heading; items: Heading[] };
};

export const educationContent = {
  pageTitle: "Certifications & Academic Achievements",
  header: {
    tag: { icon: FaGraduationCap, text: "Academic Journey" },
    title: "Certifications & Academic Achievements",
    statement: [
      [
        { text: "A commitment to continuous learning, spanning " },
        {
          text: "20+ years",
          style: "font-bold text-(--color-statement-1)",
        },
        {
          text: " of formal education and professional development across three continents",
        },
      ],
    ],
  },
  stats: [
    { icon: FaAward, amount: "3", unit: "Degrees" },
    { icon: FaStar, amount: "2", unit: "with Distinction" },
  ],
  foundation: {
    heading: {
      title: "Educational Foundation",
      desc: "Three advanced degrees spanning multimedia technology, game development, and modern software engineering",
    },
    items: [
      {
        title: "Master of IT",
        desc: "Cloud computing, full-stack development, and modern software engineering practices",
        achievement: { amount: "3.7", unit: "GPA" },
        logo: rmitLogo,
        university: "RMIT University",
      },
      {
        title: "MSc in Multimedia & Entertainment",
        desc: "Entertainment technology, interactive media, and advanced game development",
        achievement: { amount: "3.71", unit: "GPA" },
        logo: polyuLogo,
        university: "Hong Kong Polytechnic University",
      },
      {
        title: "BSc in Multimedia & Network",
        desc: "Multimedia design, network technologies, and interactive systems",
        achievement: { amount: "Scholarship", unit: "Award" },
        logo: scnuLogo,
        university: "South China Normal University",
      },
    ],
  },
  timeline: {
    heading: {
      title: "Academic Timeline",
      desc: "A detailed journey through formal education and professional certifications",
    },
    items: [
      {
        qualification: "Master of Information Technology",
        university: "RMIT University",
        time: "2023 - 2025",
        achievements: [
          {
            icon: FaAward,
            text: "Graduated with Distinction",
            abbrev: "Distinction",
          },
          { icon: FaTrophy, text: "GPA 3.7" },
        ],
        details: [
          {
            icon: FaCircleCheck,
            text: "Major Coursework: Software Engineering, Cloud Computing, Project Management, Databases, System Design",
          },
          {
            icon: FaChalkboardUser,
            text: "Casual Tutor in Software Engineering Project Management",
          },
        ],
        bgUrl: rmit,
      },
      {
        qualification:
          "Master of Science in Multimedia & Entertainment Technology",
        university: "The Hong Kong Polytechnic University",
        time: "2008 - 2009",
        achievements: [
          {
            icon: FaAward,
            text: "Graduated with Distinction",
            abbrev: "Distinction",
          },
          { icon: FaTrophy, text: "GPA 3.71" },
        ],
        details: [
          {
            icon: FaTrophy,
            text: "Awarded merit scholarship for students with a teaching background",
          },
          {
            icon: FaLightbulb,
            text: "Focused on interactive entertainment systems, game development methodologies, and multimedia production",
          },
        ],
        bgUrl: polyu,
      },
      {
        qualification: "Bachelor of Science in Multimedia & Network",
        university: "South China Normal University",
        time: "2001 - 2005",
        details: [
          {
            icon: FaTrophy,
            text: "Awarded scholarship for academic excellence",
          },
          {
            icon: FaBook,
            text: "Foundation in multimedia design, network architecture, and interactive technology systems",
          },
        ],
        bgUrl: scnu,
      },
    ],
  },
  learning: {
    heading: {
      tag: { icon: FaBrain },
      title: "Learning Philosophy",
      desc: "Education is not just about degrees - it's a continuous journey of growth, curiosity, and adaptation",
    },
    items: [
      {
        tag: { icon: FaGraduationCap },
        title: "Formal Education",
        desc: "Three degrees across 20 years demonstrate commitment to structured learning and academic rigor",
      },
      {
        tag: { icon: FaHandsHoldingCircle },
        title: "Next on List",
        desc: "Every course and project immediately applied to real-world engineering challenges",
      },
      {
        tag: { icon: FaUsers },
        title: "Learning Approach",
        desc: "Teaching and mentoring others reinforces understanding and builds stronger communities",
      },
    ],
  },
} satisfies EducationContent;

export const [EducationPageContext, useEducationPageContext] =
  createPageContext(educationContent);
