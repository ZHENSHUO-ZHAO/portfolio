import type { ReactNode } from "react";

export default function FullBleedContainer({
  interactive = false,
  children,
}: {
  interactive?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`absolute w-screen inset-y-0 left-1/2 -translate-x-1/2 ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {children}
    </div>
  );
}
