import { NavLink } from "react-router";
import type { RouterData } from "../../App";
import React from "react";
import GlowOutline from "../glowOutline/GlowOutline";

export default function PcRouter({ routes }: { routes: RouterData }) {
  const gradient =
    "conic-gradient(in oklch, color-mix(in oklch, yellow 80%, transparent) 0deg, lime 85deg, color-mix(in oklch, teal 60%, transparent) 95deg, transparent 100deg, transparent 150deg, color-mix(in oklch, lime 60%, transparent) 250deg, color-mix(in oklch, yellow 80%, transparent) 360deg )";
  const rounded = "rounded-3xl";

  return (
    <header className="sticky top-4 w-full hidden lg:block">
      <nav
        aria-label="Primary"
        className="mx-4 bg-slate-400/40 py-2 rounded-3xl backdrop-blur-md"
      >
        <GlowOutline gradient={gradient} rounded={rounded} />
        <ul className="flex flex-nowrap mx-auto">
          {routes.map((item, i) => (
            <React.Fragment key={item.title}>
              <li className="flex-1">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className="whitespace-nowrap text-lg font-semibold text-center block"
                >
                  {item.title}
                </NavLink>
              </li>
              {i < routes.length - 1 && (
                <div className="flex-none h-auto w-px border-r border-r-slate-500/50 border-l border-l-slate-100/50 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
}
