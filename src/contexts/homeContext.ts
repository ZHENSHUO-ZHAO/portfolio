import createPageContext from "./pageContext";

export const homeContent = { title: "Home Page" };

export const [HomePageContext, useHomePageContext] =
  createPageContext(homeContent);
