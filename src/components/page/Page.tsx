import type { ReactNode } from "react";

export default function Page({
  headerComponent,
  children,
  id,
}: {
  headerComponent: ReactNode;
  children: ReactNode;
  id: string;
}) {
  return (
    <main
      id={id}
      className="relative grid grid-cols-1 mx-8 lg:mx-0 max-w-4xl lg:max-w-5xl xl:max-w-7xl"
    >
      {headerComponent}
      {children}
    </main>
  );
}
