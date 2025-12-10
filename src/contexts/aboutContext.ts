import createPageContext from "./pageContext";

export const aboutContent = { title: "About Page" };

export const [AboutPageContext, useAboutPageContext] =
  createPageContext(aboutContent);
