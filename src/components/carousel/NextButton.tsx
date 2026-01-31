import { motion } from "motion/react";
import type { NextButtonProp } from "./carouselTypes";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function NextButton({ isToRight, onNext }: NextButtonProp) {
  const shadow = "0 0 3px 2px rgba(80,80,80,0.4)";
  return (
    <motion.button
      className="pointer-events-auto size-8 xs:size-10 md:size-11 rounded-full bg-slate-900/50 flex justify-center items-center mx-2 md:mx-4"
      whileHover={{
        scale: 1.1,
        boxShadow: shadow,
      }}
      whileTap={{ scale: 0.9, boxShadow: shadow }}
      // The callback should use "onTap" instead of "onClick" here, as Motion suppress the point events when the snapping animation is being played to avoid accidental taps while snapping. This is the default behavior of Motion. This case only occurs on mobile. Desktop separates mouse and pointer streams, while mobile has single pointer stream. The click events of the buttons are cancelled by motion. "onTap" is motion-level events, which won't be cancelled in such cases, and it bypasses native click suppression.
      onTap={() => onNext(isToRight)}
    >
      {isToRight ? (
        <LuChevronRight className="size-6 xs:size-7 md:size-8 stroke-white" />
      ) : (
        <LuChevronLeft className="size-6 xs:size-7 md:size-8 stroke-white" />
      )}
    </motion.button>
  );
}
