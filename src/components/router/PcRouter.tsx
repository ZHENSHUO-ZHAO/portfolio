import { NavLink } from "react-router";
import type { RouterData } from "../../App";
import React, { useState } from "react";
import GlowOutline from "../glowOutline/GlowOutline";
import {
  AnimatePresence,
  motion,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "motion/react";
import { createConicGradient, mixColor } from "../../utils/util";

const colors = {
  sky1: mixColor(75, "var(--color-accent)", "transparent"),
  sky2: mixColor(65, "var(--color-complement)", "transparent"),
  transparent: mixColor(0, "var(--color-accent)", "transparent"),
};

const gradientKeyframes: TargetAndTransition = {
  background: [
    createConicGradient(0, [
      colors.transparent,
      colors.transparent,
      colors.transparent,
      colors.transparent,
    ]),
    createConicGradient(60, [
      colors.transparent,
      colors.sky1,
      colors.sky1,
      colors.transparent,
    ]),
    createConicGradient(120, [
      colors.sky2,
      colors.sky1,
      colors.sky1,
      colors.sky2,
    ]),
    createConicGradient(180, [
      colors.sky2,
      colors.sky1,
      colors.sky1,
      colors.sky2,
    ]),
    createConicGradient(240, [
      colors.sky2,
      colors.transparent,
      colors.transparent,
      colors.sky2,
    ]),
    createConicGradient(360, [
      colors.transparent,
      colors.transparent,
      colors.transparent,
      colors.transparent,
    ]),
  ],
};

const gradientTransition: Transition<string> = {
  ease: "linear",
  duration: 0.8,
  repeat: 0,
  times: [0.1, 0.4, 0.6, 0.9, 1],
};

const rounded = "rounded-3xl";

const iconVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.15 },
};

export default function PcRouter({ routes }: { routes: RouterData }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    // The view to be scrolled to top before animating the underline of the NavLink. Otherwise, the previous page's y offset is counted in the animation, causing the underline to move from somewhere down the bar.
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!show) {
      setShow(true);
      setTimeout(() => setShow(false), 800);
    }
  };

  return (
    <header className="fixed top-6 w-full z-50 hidden lg:block">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-4xl bg-slate-400/40 py-3 rounded-3xl backdrop-blur-md"
      >
        {show && (
          <GlowOutline
            gradient={{
              keyframes: gradientKeyframes,
              transition: gradientTransition,
            }}
            rounded={rounded}
          />
        )}
        <ul className="flex flex-nowrap items-center mx-auto">
          {routes.map((item, i) => (
            <React.Fragment key={item.title}>
              <li className="flex-1">
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={handleClick}
                  className="whitespace-nowrap text-sm flex flex-col items-center justify-center tracking-tight"
                >
                  {({ isActive }) => (
                    <>
                      <div className="relative flex flex-col justify-start items-center w-fit">
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              layoutId="nav-underline"
                              className="absolute -bottom-1 h-0.5 w-full rounded-full bg-accent drop-shadow-[0_-3px_6px_color-mix(in_oklch,var(--color-accent)_100%,transparent)]"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 40,
                              }}
                            />
                          )}
                        </AnimatePresence>

                        <motion.div
                          className="flex items-center gap-2"
                          initial="rest"
                          animate="rest"
                          whileHover={!isActive ? "hover" : "rest"}
                        >
                          <motion.span
                            variants={iconVariants}
                            transition={{
                              type: "spring",
                              stiffness: 800,
                              damping: 15,
                            }}
                          >
                            <item.icon size={18} strokeWidth={2} />
                          </motion.span>
                          <span>{item.title}</span>
                        </motion.div>
                      </div>
                    </>
                  )}
                </NavLink>
              </li>
              {i < routes.length - 1 && (
                <div className="flex-none h-4 w-px border-r border-r-slate-500/50 border-l border-l-slate-100/50 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
}
