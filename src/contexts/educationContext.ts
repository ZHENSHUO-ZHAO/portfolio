import createPageContext from "./pageContext";
import type { ContextPageBase } from "./pageContext";

export type Degree = {
  qualification: string;
  university: string;
  time: string;
  gpa?: string;
  achievements: string[];
};

export type EducationContent = ContextPageBase & { degrees: Degree[] };

export const educationContent = {
  pageTitle: "Education Page",
  degrees: [
    {
      qualification: "Master of Information Technology",
      university: "RMIT University",
      time: "2023 - 2025",
      gpa: "3.7",
      achievements: [
        "Major Coursework: Software Engineering, Cloud Computing, Project Management, Databases, System Design",
        "Relevant technologies: React.js • Node.js • Express.js • AWS • Docker • CI/CD • SQL/NoSQL",
        "Casual Tutor in Software Engineering Project Management",
      ],
    },
    {
      qualification:
        "Master of Science in Multimedia & Entertainment Technology",
      university: "The Hong Kong Polytechnic University",
      time: "2008 - 2009",
      gpa: "3.71",
      achievements: [
        "Graduated with Distinction",
        "Awarded merit scholarship for students with a teaching background",
      ],
    },
    {
      qualification: "Bachelor of Science in Multimedia & Network",
      university: "South China Normal University",
      time: "2001 - 2005",
      achievements: ["Scholarship for academic excellence"],
    },
  ],
} satisfies EducationContent;

export const [EducationPageContext, useEducationPageContext] =
  createPageContext(educationContent);
