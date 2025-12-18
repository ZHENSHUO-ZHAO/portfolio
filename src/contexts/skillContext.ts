import createPageContext from "./pageContext";
import type { ContextPageBase } from "./pageContext";

export type Skill = { category: string; skills: string[] };

export type SkillContent = ContextPageBase & { stacks: Skill[] };

export const skillContent = {
  pageTitle: "Skill Page",
  stacks: [
    {
      category: "Full-Stack Engineering",
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
      category: "Cloud & DevOps",
      skills: [
        "AWS (EC2, Lambda, S3, DynamoDB)",
        "Docker",
        "GitHub Actions",
        "Linux servers",
      ],
    },
    {
      category: "Game Development",
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
      category: "Databases",
      skills: ["MongoDB", "MySQL", "DynamoDB"],
    },
    {
      category: "Professional Skills",
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
} satisfies SkillContent;

export const [SkillPageContext, useSkillPageContext] =
  createPageContext(skillContent);
