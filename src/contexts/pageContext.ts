import { createContext, useContext } from "react";

export default function createPageContext<T extends ContextPageBase>(
  content: T
): [React.Context<T>, () => T] {
  const PageContext = createContext<T>(content);
  const usePageContext = () => useContext<T>(PageContext);
  return [PageContext, usePageContext] as const;
}

export type ContextPageBase = { pageTitle: string };

export type DescriptiveItem = { title?: string; desc?: string; image?: string };
