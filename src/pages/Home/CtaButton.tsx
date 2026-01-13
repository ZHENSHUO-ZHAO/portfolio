import { motion, type Variants } from "motion/react";
import GlowOutline from "../../components/glowFx/GlowOutline";
import { NavLink } from "react-router";
import { createLinearGradient } from "../../utils/util";

export default function CtaButton({
  gradientColor,
  link,
  bgColor,
  useNavLink,
  linkProps,
  children,
  priority,
  className,
}: {
  gradientColor: string[];
  link: string;
  bgColor?: string;
  useNavLink?: boolean;
  linkProps?: object;
  children: React.ReactNode;
  priority: "primary" | "secondary" | "tertiary";
  className?: string;
}) {
  const linkStyle = "flex justify-center gap-2 rounded-full px-6 py-2";
  const glowVariants: Variants = {
    rest: {
      background: createLinearGradient(520, gradientColor),
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
    hover: {
      background: [
        createLinearGradient(160, gradientColor),
        createLinearGradient(220, gradientColor),
        createLinearGradient(350, gradientColor),
        createLinearGradient(400, gradientColor),
        createLinearGradient(520, gradientColor),
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
      <GlowOutline
        gradient={{ variants: glowVariants }}
        rounded="rounded-full"
        excludeGlow={priority !== "primary"}
      />
      {useNavLink ? (
        <NavLink
          to={link}
          className={`${linkStyle} ${bgColor || ""} text-slate-800`}
        >
          {children}
        </NavLink>
      ) : (
        <a
          href={link}
          className={`${linkStyle} ${bgColor || ""} text-slate-500`}
          {...linkProps}
        >
          {children}
        </a>
      )}
    </motion.li>
  );
}
