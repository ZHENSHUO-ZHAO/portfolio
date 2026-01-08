import { motion } from "motion/react";
import type { NextButtonProp } from "./carouselTypes";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function NextButton({ isToRight, onNext }: NextButtonProp) {
  const shadow = "0 0 3px 2px rgba(80,80,80,0.4)";
  return (
    <motion.button
      className="pointer-events-auto size-11 rounded-full bg-slate-900/50 flex justify-center items-center mx-2 md:mx-4"
      whileHover={{
        scale: 1.1,
        boxShadow: shadow,
      }}
      whileTap={{ scale: 0.9, boxShadow: shadow }}
      onClick={() => onNext(isToRight)}
    >
      {isToRight ? (
        <ChevronRightIcon className="size-8 stroke-white" />
      ) : (
        <ChevronLeftIcon className="size-8 stroke-white" />
      )}
    </motion.button>
  );
}
