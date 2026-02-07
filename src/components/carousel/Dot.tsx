import { motion } from "motion/react";
import type { DotProp } from "./carouselTypes";

export default function Dot({ index, onScroll, viewContentIndex }: DotProp) {
  // Width is responsive to its parent.
  const shadow = "var(--carousel-dot-shadow)";

  return (
    <motion.li
      onTap={() => onScroll(index)}
      className="bg-slate-500 dark:bg-slate-300 rounded-full min-h-2 max-h-4"
      initial={{ width: "30px", opacity: 0.5 }}
      animate={{
        width: viewContentIndex === index ? "30px" : "12px",
        opacity: viewContentIndex === index ? 1 : 0.5,
      }}
      whileHover={{
        boxShadow: shadow,
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9, boxShadow: shadow }}
      role="tab"
      aria-selected={index === viewContentIndex}
      aria-label={`Go to item ${index + 1}`}
    />
  );
}
