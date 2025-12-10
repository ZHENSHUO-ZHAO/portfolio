import createPageContext from "./pageContext";

export const skillContent = { title: "Skill Page" };

export const [SkillPageContext, useSkillPageContext] =
  createPageContext(skillContent);
