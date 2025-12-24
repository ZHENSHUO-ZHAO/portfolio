import { useEffect, useState } from "react";
import useMeasure, { type Size } from "../../hooks/measureHook";
import { NavLink } from "react-router";
import type { RouterData } from "../../App";

export default function MobileRouter({ routes }: { routes: RouterData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, size] = useMeasure();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  //   useEffect(() => {
  //     if (!isOpen) return;

  //     const id = requestAnimationFrame(() => setIsOpen(false));
  //     return () => cancelAnimationFrame(id);
  //   }, [size]);

  return (
    <div className="fixed inset-0 lg:hidden">
      <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      <aside ref={ref} className="absolute inset-0">
        <div
          className="absolute inset-0"
          onClick={() => setIsOpen(false)}
        ></div>
        <nav
          aria-label="Primary"
          aria-hidden={!isOpen}
          className="relative overflow-y-auto pl-7 pt-17 w-1/2 max-w-full h-screen"
        >
          <BackgroundClip isOpen={isOpen} size={size} />
          <div className="relative">
            {isOpen && (
              <ul className="flex flex-col gap-2" id="mobile-navigation">
                {routes.map((item) => (
                  <li key={item.title}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className="whitespace-nowrap text-lg font-normal"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </aside>
    </div>
  );
}

function MenuToggle({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="fixed top-7 left-7 z-1 size-6"
      onClick={() => setIsOpen((state) => !state)}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-controls="mobile-navigation"
    >
      <svg className="size-full" viewBox="0 0 23 23">
        {isOpen ? (
          <>
            <Path d="M 2 2.5 L 21 20.5" />
            <Path d="M 2 20.5 L 21 2.5" />
          </>
        ) : (
          <>
            <Path d="M 2 2.5 L 21 2.5" />
            <Path d="M 2 11.5 L 21 11.5" />
            <Path d="M 2 20.5 L 21 20.5" />
          </>
        )}
      </svg>
    </button>
  );
}

function Path({ d }: { d: string }) {
  return (
    <path
      className="fill-transparent stroke-3 stroke-slate-800"
      strokeLinecap="round"
      d={d}
    />
  );
}

function BackgroundClip({ isOpen, size }: { isOpen: boolean; size: Size }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none bg-slate-400/40 border-r border-white backdrop-blur-xs rounded-r-2xl mr-3"
      style={{
        boxShadow: "5px 0 5px rgb(0 0 0 / 30%)",
        clipPath: `${
          isOpen
            ? `circle(${size.height * 2}px at 40px 40px)`
            : "circle(24px at 40px 40px)"
        }`,
      }}
    />
  );
}
