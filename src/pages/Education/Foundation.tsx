import { motion } from "motion/react";
import type { EducationFoundation } from "../../contexts/educationContext";
import type { CardColor } from "../../contexts/pageContext";
import useResponsiveFadeIn from "../../hooks/responsiveFadeInHook";

export default function Foundation({ data }: { data: EducationFoundation[] }) {
  return (
    <div className="grid min-[690px]:grid-cols-3 gap-6 md:gap-8 lg:mx-8">
      {data.map((d, i) => (
        <FoundationItem data={d} index={i} key={d.title} />
      ))}
    </div>
  );
}

function FoundationItem({
  data,
  index,
}: {
  data: EducationFoundation;
  index: number;
}) {
  const color = colors[index];
  const animationProps = useResponsiveFadeIn(690, index);

  return (
    <motion.div {...animationProps}>
      <div className="relative size-full flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 active:bg-white/10 transition duration-300">
        <div className="relative">
          <div
            style={
              {
                "--bg-image": `url(${data.logo})`,
              } as React.CSSProperties
            }
            className={`size-12 md:size-14 flex items-center justify-center mb-4 md:mb-6 bg-(image:--bg-image) bg-cover bg-center`}
          />
          <h3 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">
            {data.university}
          </h3>
          <p
            className={`${color.icon!.text} font-semibold text-sm md:text-base mb-2 md:mb-3`}
          >
            {data.title}
          </p>
          <p className="text-slate-300 text-sm">{data.desc}</p>
        </div>
        <div className="relative mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">
              {data.achievement.unit}
            </span>
            <span className="text-white font-bold">
              {data.achievement.amount}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const colors: CardColor[] = [
  {
    icon: {
      text: "text-tone1-400",
      bg: "",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-tone3-400",
      bg: "",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-tone5-400",
      bg: "",
    },
    bg: "",
    border: "",
  },
];
