import type { ReactNode } from "react";

export default function FullBleedContainer({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="absolute w-screen inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none">
      {children}
    </div>
  );
}
