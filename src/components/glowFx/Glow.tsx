import { motion } from "motion/react";
import type { GradientAnimation } from "./GlowOutline";

export default function Glow({
  gradient,
  insetWidth,
  rounded,
  blurSize,
}: {
  gradient: string | GradientAnimation;
  insetWidth?: string;
  rounded?: string;
  blurSize?: string;
}) {
  return (
    <>
      {typeof gradient === "string" ? (
        <div
          className={`absolute ${insetWidth || "-inset-1"} ${rounded || ""} ${
            blurSize || "blur-sm"
          }`}
          style={{
            background: `${gradient}`,
          }}
          tabIndex={-1}
        />
      ) : (
        <motion.div
          className={`absolute ${insetWidth || "-inset-1"} ${rounded || ""} ${
            blurSize || "blur-sm"
          }`}
          initial={gradient.initial ?? undefined}
          animate={gradient.keyframes ?? undefined}
          variants={gradient.variants ?? undefined}
          transition={gradient.transition ?? undefined}
          tabIndex={-1}
        />
      )}
    </>
  );
}
