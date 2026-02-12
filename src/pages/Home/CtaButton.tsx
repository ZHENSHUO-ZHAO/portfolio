import { motion, type Variants } from "motion/react";
import GlowOutline from "../../components/glowFx/GlowOutline";
import { NavLink } from "react-router";
import { createConicGradient } from "../../utils/util";
import type { ReactNode } from "react";

export default function CtaButton({
  gradientColor,
  link,
  bgColor,
  children,
  priority,
  className,
  bgFx,
}: {
  gradientColor: string[];
  link: string;
  bgColor?: string;
  children: ReactNode;
  priority: "primary" | "secondary";
  className?: string;
  bgFx?: ReactNode;
}) {
  const linkStyle =
    "flex justify-center items-center gap-2 rounded-full px-6 md:px-7 lg:px-8 py-3 md:py-4";
  const glowVariants: Variants = {
    rest: {
      background: createConicGradient(378, gradientColor),
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
    hover: {
      background: [
        createConicGradient(18, gradientColor),
        createConicGradient(378, gradientColor),
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.li
      className={`relative ${className}`}
      animate="rest"
      whileHover="hover"
      whileTap="hover"
      tabIndex={-1}
    >
      {bgFx}
      <GlowOutline
        gradient={{ variants: glowVariants }}
        rounded="rounded-full"
        excludeGlow={priority !== "primary"}
      />
      <NavLink
        to={link}
        className={`${linkStyle} ${bgColor || ""} text-slate-800 dark:text-primary`}
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        {children}
      </NavLink>
    </motion.li>
  );
}
