import type { ReactNode } from "react";
import type { ContextPageBase } from "../contexts/pageContext";

export default function PageBase({
  content,
  headerElement,
  children,
}: {
  content: ContextPageBase;
  headerElement?: () => ReactNode;
  children: ReactNode;
}) {
  return (
    <main>
      <header>
        {headerElement ? headerElement() : <h1>{content.pageTitle}</h1>}
      </header>
      {children}
    </main>
  );
}
