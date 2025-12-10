import { createContext, useContext } from "react";

export default function createPageContext<T>(
  content: T
): [React.Context<T>, () => T] {
  const PageContext = createContext<T>(content);
  const usePageContext = () => useContext<T>(PageContext);
  return [PageContext, usePageContext] as const;
}
