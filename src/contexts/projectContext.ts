import createPageContext from "./pageContext";

export const projectContent = { title: "Project Page" };

export const [ProjectPageContext, useProjectPageContext] =
  createPageContext(projectContent);
