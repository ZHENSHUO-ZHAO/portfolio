import createPageContext from "./pageContext";

export const aboutContent = {
  title: "About Page",
  introduction:
    "I'm a software engineer, game developer, and project manager with extensive experience delivering commercial games, interactive products, and scalable digital systems. My work blends engineering, UX-driven design, and cross-functional collaboration to build products enjoyed by global audiences.",
  strength: [
    "Engineering precision",
    "User-experience intuition",
    "System thinking",
    "Collaborative leadership",
  ],
  philosophy: [
    {
      title: "User-first design",
      desc: "great products begin with understanding user intention.",
    },
    {
      title: "Systems thinking",
      desc: "good architecture enables stability and growth.",
    },
    {
      title: "Data-driven iteration",
      desc: "metrics guide refinement and long-term success.",
    },
    {
      title: "Clear collaboration",
      desc: "strong communication strengthens every team.",
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
  leisure:
    "I love exploring new technologies, playing strategy games, and mentoring aspiring engineers. Outside of engineering, I'm passionate about specialty coffee. I've earned SCA certifications in Brewing, Roasting, and Sensory Skills, and I enjoy experimenting with origins, processing methods, and precision extraction techniques.",
};

export const [AboutPageContext, useAboutPageContext] =
  createPageContext(aboutContent);
