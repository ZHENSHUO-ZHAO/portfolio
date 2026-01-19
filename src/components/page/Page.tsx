import type { ReactNode } from "react";

export default function Page({
  headerComponent,
  children,
}: {
  headerComponent: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="grid grid-cols-1 mx-8 lg:mx-0 max-w-4xl xl:max-w-7xl">
      {headerComponent}
      {children}
    </main>
  );
}
