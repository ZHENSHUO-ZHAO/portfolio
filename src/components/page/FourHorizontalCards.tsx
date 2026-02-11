import { motion } from "motion/react";
import type { CardColor, Heading } from "../../contexts/pageContext";
import useResponsiveFadeIn from "../../hooks/responsiveFadeInHook";

export function FourHorizontalCards({
  data,
  cardColors = defaultColors,
}: {
  data: Heading[];
  cardColors?: CardColor[];
}) {
  return (
    <ul className="relative grid grid-cols-1 lg:mx-8 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
      {data.map((s, i) => (
        <Card key={s.title} data={s} color={cardColors[i]} index={i} />
      ))}
    </ul>
  );
}

function Card({
  data,
  color,
  index,
}: {
  data: Heading;
  color: CardColor;
  index: number;
}) {
  const animationProps = useResponsiveFadeIn(1280, index);
  return (
    <motion.li className="size-full" {...animationProps}>
      <div
        className={`size-full ${color.bg} border ${color.border} p-6 sm:p-7 lg:p-6 rounded-xl md:rounded-2xl flex flex-col xs:flex-row sm:flex-col lg:flex-row xl:flex-col gap-4 md:gap-6 
      hover:-translate-y-0.5 xl:hover:-translate-y-1 active:-translate-y-0.5 xl:active:-translate-y-1 hover:scale-[103%] active:scale-[103%] hover:shadow-lg xl:hover:shadow-xl active:shadow-lg xl:active:shadow-xl ${color.shadow} transition-all duration-300`}
      >
        {data.tag && (
          <div
            className={`${color.icon.text} ${color.icon.bg} shadow-lg ${color.icon.shadow} size-12 md:size-16 flex-none flex justify-center items-center text-lg md:text-2xl rounded-xl md:rounded-2xl`}
          >
            {data.tag.icon && <data.tag.icon />}
          </div>
        )}
        <div className="flex-1">
          <h3 className="mb-2 mb:mb-3">{data.title}</h3>
          {data.desc && <p className="text-sm md:text-base">{data.desc}</p>}
        </div>
      </div>
    </motion.li>
  );
}

const defaultColors: CardColor[] = [
  {
    icon: {
      text: "text-white",
      bg: "bg-tone1-500",
      shadow: "shadow-tone1-600/30",
    },
    bg: "bg-gradient-to-br from-tone1-50/20 via-tone1-100/20 to-tone1-200/40 dark:from-tone1-500/18 dark:via-tone1-500/5 dark:to-tone1-600/5",
    border: "border-tone1-200/30 dark:border-tone1-200/20",
    shadow:
      "hover:shadow-tone1-600/30 dark:hover:shadow-tone1-600/50 active:shadow-tone1-600/30 dark:active:shadow-tone1-600/50",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone2-500",
      shadow: "shadow-tone2-600/30",
    },
    bg: "bg-gradient-to-br from-tone2-50/20 via-tone2-100/20 to-tone2-200/40 dark:from-tone2-500/18 dark:via-tone2-500/5 dark:to-tone2-600/5",
    border: "border-tone2-200/30 dark:border-tone2-200/20",
    shadow:
      "hover:shadow-tone2-600/30 dark:hover:shadow-tone2-600/50 active:shadow-tone2-600/30 dark:active:shadow-tone2-600/50",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone3-500",
      shadow: "shadow-tone3-600/30",
    },
    bg: "bg-gradient-to-br from-tone3-50/20 via-tone3-100/20 to-tone3-200/40 dark:from-tone3-500/18 dark:via-tone3-500/5 dark:to-tone3-600/5",
    border: "border-tone3-200/30 dark:border-tone3-200/20",
    shadow:
      "hover:shadow-tone3-600/30 dark:hover:shadow-tone3-600/50 active:shadow-tone3-600/30 dark:active:shadow-tone3-600/50",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone4-500",
      shadow: "shadow-tone4-600/30",
    },
    bg: "bg-gradient-to-br from-tone4-50/20 via-tone4-100/20 to-tone4-200/40 dark:from-tone4-500/18 dark:via-tone4-500/5 dark:to-tone4-600/5",
    border: "border-tone4-200/30 dark:border-tone4-200/20",
    shadow:
      "hover:shadow-tone4-600/30 dark:hover:shadow-tone4-600/50 active:shadow-tone4-600/30 dark:active:shadow-tone4-600/50",
  },
];
