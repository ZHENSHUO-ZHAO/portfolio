import createPageContext from "./pageContext";

export const hobbyContent = { title: "Hobby Page" };

export const [HobbyPageContext, useHobbyPageContext] =
  createPageContext(hobbyContent);
