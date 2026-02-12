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
  const ua = navigator.userAgent;
  const isSafari =
    ua.includes("Safari") &&
    !ua.includes("Chrome") &&
    !ua.includes("Chromium") &&
    !ua.includes("Edg");

  return (
    <>
      {typeof gradient === "string" ? (
        <div
          className={`absolute ${insetWidth || "-inset-1"} ${rounded || ""} ${!isSafari && (blurSize || "blur-sm")}`}
          style={{
            background: `${gradient}`,
          }}
          tabIndex={-1}
        />
      ) : (
        <motion.div
          className={`absolute ${insetWidth || "-inset-1"} ${rounded || ""} ${!isSafari && (blurSize || "blur-sm")}`}
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
