import { motion } from "motion/react";
import type { Tag } from "../../contexts/pageContext";
import { getMultipleRowAnimation } from "../../hooks/responsiveFadeInHook";

export default function Bio({ data }: { data: Tag }) {
  return (
    <motion.div
      {...getMultipleRowAnimation()}
      className="relative mx-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 max-w-3xl"
    >
      <div className="absolute top-0 left-0 size-12 md:size-13 lg:size-14 flex items-center justify-center shrink-0">
        <data.icon className="text-accent text-4xl md:text-5xl lg:text-6xl origin-bottom-right scale-125 -translate-y-2/3 md:-translate-y-1/2 -translate-x-1/4 lg:-translate-x-1/3" />
      </div>
      <p className="text-sm md:text-lg lg:text-xl">{data.text}</p>
    </motion.div>
  );
}
