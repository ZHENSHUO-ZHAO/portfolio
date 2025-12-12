import createPageContext from "./pageContext";

export const skillContent = {
  title: "Skill Page",
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
};

export const [SkillPageContext, useSkillPageContext] =
  createPageContext(skillContent);
