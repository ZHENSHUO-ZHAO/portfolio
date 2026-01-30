import { motion } from "motion/react";
import type { DotProp } from "./carouselTypes";

export default function Dot({ index, onScroll, viewContentIndex }: DotProp) {
  // Width is responsive to its parent.
  const shadow = `0 0 3px 1px rgba(100,100,100,0.5)`;

  return (
    <motion.li
      onClick={() => onScroll(index)}
      className="bg-slate-500 rounded-full min-h-2 max-h-4"
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
    />
  );
}
