import createPageContext from "./pageContext";

export const educationContent = { title: "Education Page" };

export const [EducationPageContext, useEducationPageContext] =
  createPageContext(educationContent);
