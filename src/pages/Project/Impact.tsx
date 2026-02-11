import { motion } from "motion/react";
import type { Stat } from "../../contexts/pageContext";
import useResponsiveFadeIn from "../../hooks/responsiveFadeInHook";

export default function Impact({ data }: { data: Stat[] }) {
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {data.map((d, i) => (
        <ImpactItem data={d} index={i} key={d.unit} />
      ))}
    </div>
  );
}

function ImpactItem({ data, index }: { data: Stat; index: number }) {
  const animationProps = useResponsiveFadeIn(768, index);
  return (
    <motion.div {...animationProps}>
      <div className="size-full bg-white/5 hover:bg-white/15 active:bg-white/15 transition duration-300 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 text-center">
        <div
          className={`text-3xl md:text-5xl font-extrabold ${numberColors[index]} mb-1 md:mb-2`}
        >
          {data.amount}
        </div>
        <p className="text-slate-300 font-medium text-sm md:text-base">
          {data.unit}
        </p>
      </div>
    </motion.div>
  );
}

const numberColors: string[] = [
  "text-tone1-400",
  "text-tone2-400",
  "text-tone3-400",
  "text-tone4-400",
];
