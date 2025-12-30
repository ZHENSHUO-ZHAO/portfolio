import { NavLink } from "react-router";
import type { RouterData } from "../../App";
import React from "react";
import GlowOutline from "../glowOutline/GlowOutline";

export default function PcRouter({ routes }: { routes: RouterData }) {
  const gradient =
    "conic-gradient(in oklch, color-mix(in oklch, yellow 80%, transparent) 0deg, lime 85deg, color-mix(in oklch, teal 60%, transparent) 95deg, transparent 100deg, transparent 150deg, color-mix(in oklch, lime 60%, transparent) 250deg, color-mix(in oklch, yellow 80%, transparent) 360deg )";
  const rounded = "rounded-3xl";

  return (
    <header className="fixed top-4 w-full hidden lg:block">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-4xl bg-slate-400/40 py-3 rounded-3xl backdrop-blur-md"
      >
        <GlowOutline gradient={gradient} rounded={rounded} />
        <ul className="flex flex-nowrap items-center mx-auto">
          {routes.map((item, i) => (
            <React.Fragment key={item.title}>
              <li className="flex-1">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className="whitespace-nowrap text-sm flex flex-col items-center justify-center tracking-tight"
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex flex-col items-center w-fit">
                        <div className="flex items-center gap-2">
                          <item.icon size={18} strokeWidth={2} />
                          <span>{item.title}</span>
                        </div>

                        <span
                          className={`mt-1 h-0.5 w-full rounded-full bg-accent origin-center drop-shadow-md drop-shadow-accent transition-transform duration-300 ${
                            isActive ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </div>
                    </>
                  )}
                </NavLink>
              </li>
              {i < routes.length - 1 && (
                <div className="relative -translate-y-0.5 flex-none h-4 w-px border-r border-r-slate-500/50 border-l border-l-slate-100/50 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
}
