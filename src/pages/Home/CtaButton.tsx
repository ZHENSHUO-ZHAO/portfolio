import { motion, type Variants } from "motion/react";
import GlowOutline from "../../components/glowOutline/GlowOutline";
import { NavLink } from "react-router";

export default function CtaButton({
  gradientColor,
  link,
  bgColor,
  useNavLink,
  linkProps,
  children,
  priority,
}: {
  gradientColor: string;
  link: string;
  bgColor?: string;
  useNavLink?: boolean;
  linkProps?: object;
  children: React.ReactNode;
  priority: "primary" | "secondary" | "tertiary";
}) {
  const linkStyle = "flex justify-center gap-2 rounded-full px-6 py-2";
  const glowVariants: Variants = {
    rest: {
      background: `linear-gradient(520deg, ${gradientColor})`,
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
    hover: {
      background: [
        `linear-gradient(160deg, ${gradientColor})`,
        `linear-gradient(220deg, ${gradientColor})`,
        `linear-gradient(350deg, ${gradientColor})`,
        `linear-gradient(400deg, ${gradientColor})`,
        `linear-gradient(520deg, ${gradientColor})`,
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
      className={`relative flex-1 ${
        priority === "primary"
          ? "w-[280px] sm:max-w-[210px]"
          : priority === "secondary"
          ? "w-[200px] sm:max-w-[180px]"
          : "w-[200px] sm:max-w-[150px]"
      }`}
      animate="rest"
      whileHover="hover"
      whileTap="hover"
      tabIndex={-1}
    >
      <GlowOutline
        gradient={{ variants: glowVariants }}
        rounded="rounded-full"
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
