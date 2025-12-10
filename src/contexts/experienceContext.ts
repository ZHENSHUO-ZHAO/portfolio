import createPageContext from "./pageContext";

export const experienceContent = { title: "Experience Page" };

export const [ExperiencePageContext, useExperiencePageContext] =
  createPageContext(experienceContent);
