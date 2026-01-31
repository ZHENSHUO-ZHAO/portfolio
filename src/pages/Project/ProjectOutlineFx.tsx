import { motion, type TargetAndTransition } from "motion/react";
import { createConicGradient, mixColor } from "../../utils/util";
import GlowOutline from "../../components/glowFx/GlowOutline";

export default function ProjectOutlineFx() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlowOutline
        rounded="rounded-2xl"
        gradient={{ keyframes: glowKeyframes }}
      />
    </motion.div>
  );
}

const gradientColors: string[] = [
  "transparent",
  mixColor(10, "var(--color-accent)", "transparent"),
  "var(--color-complement)",
  "var(--color-accent)",
  "var(--color-complement)",
  mixColor(10, "var(--color-accent)", "transparent"),
  "transparent",
];

const glowKeyframes: TargetAndTransition = {
  background: [
    createConicGradient(0, gradientColors),
    createConicGradient(360, gradientColors),
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  },
};
