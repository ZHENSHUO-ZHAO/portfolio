import {
  AnimatePresence,
  motion,
  type TargetAndTransition,
} from "motion/react";
import { createConicGradient, mixColor } from "../../utils/util";
import Glow from "../../components/glowFx/Glow";
import { useLayoutEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import { type CardItem } from "../../components/carousel/carouselTypes";
import type { IconColor } from "../../contexts/pageContext";
import useMeasure from "../../hooks/measureHook";
import type { HighlightItem } from "../../contexts/homeContext";
import { LuArrowRight } from "react-icons/lu";

export default function Highlights({ data }: { data: HighlightItem[] }) {
  const [aspectRatio, setAspectRatio] = useState(1);

  // The 4th highlight content has the longest description. Use it in the tracker to calculate the maximum height, which can be used to calculate the aspect ration for the Carousel. It enforce all cards in the Carousel with the same size. As the aspect ration depends on the track, it's unnecessary to add breakpoints to aspect ratio.
  return (
    <div className="relative h-fit">
      <div className="absolute inset-x-0">
        <Carousel
          aspectRatio={aspectRatio}
          CardComponent={Card}
          contentList={data}
        />
      </div>
      <CardMaxHeightTracker content={data[3]} setAspectRatio={setAspectRatio} />
    </div>
  );
}

function CardMaxHeightTracker({
  content,
  setAspectRatio,
}: {
  content: HighlightItem;
  setAspectRatio: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [ref, size] = useMeasure<HTMLDivElement>();

  useLayoutEffect(() => {
    setAspectRatio(
      size.width > 0 && size.height > 0 ? size.width / size.height : 1,
    );
  }, [size, setAspectRatio]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      role="presentation"
      tabIndex={-1}
      className="w-[70%] h-fit bg-amber-600 pointer-events-none select-none invisible"
    >
      <div className="w-full py-4 flex flex-col justify-between">
        <div className="rounded-t-2xl border-x border-t border-white">
          <img className="w-full aspect-[2.37]" />
          <div className="flex-1 p-4 md:p-6 flex flex-col justify-between items-start gap-2 md:gap-4 pointer-events-none">
            <div>
              <h3 className="flex items-center gap-3 mb-3">
                <span className="size-6 md:size-8 rounded-lg flex items-center justify-center"></span>
                <span className="text-sm md:text-lg">{content.title}</span>
              </h3>
              <p className="text-sm md:text-lg">{content.desc}</p>
            </div>
            <div className="w-full text-sm md:text-lg">
              <span>More Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ content, index }: CardItem<HighlightItem>) {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const iconColor: IconColor = iconColors[index];

  return (
    <motion.div
      className="relative w-full h-[90%] flex flex-col justify-between"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence>
        {isHover && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Glow gradient={{ keyframes: glowKeyframes }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-br from-slate-300 to-card rounded-2xl border border-white" />
      <div className="relative overflow-hidden w-full aspect-[2.37] rounded-t-2xl border-x border-t border-white">
        <motion.img
          src={content.url}
          alt={content.alt}
          className="size-full object-cover pointer-events-none"
          animate={{ scale: isHover ? 1.03 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="relative flex-1 p-4 md:p-6 flex flex-col justify-between items-start gap-2 md:gap-4 pointer-events-none">
        <div>
          <h3 className="flex items-center gap-3 mb-3">
            <span
              className={`size-6 md:size-8 ${iconColor.bg} rounded-lg flex items-center justify-center`}
            >
              <content.icon
                className={`${iconColor.icon} text-sm md:text-lg`}
              />
            </span>
            <span className="">{content.title}</span>
          </h3>
          <p className="text-sm md:text-lg">{content.desc}</p>
        </div>
        <div className="overflow-hidden w-full flex items-end text-sm md:text-lg">
          <motion.button
            className="flex gap-2 items-center"
            animate={
              isHover
                ? { translateX: "0" }
                : { translateX: "calc(18px - 100%)" }
            }
          >
            <span>More Details</span>
            <LuArrowRight className="inline size-4 md:size-4.5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

const gradientColors: string[] = [
  "transparent",
  mixColor(10, "var(--color-accent)", "transparent"),
  "var(--color-complement)",
  "var(--color-accent)",
  "var(--color-complement)",
  mixColor(10, "var(--color-accent)", "transparent"),
  "transparent",
];

const glowKeyframes: TargetAndTransition = {
  background: [
    createConicGradient(0, gradientColors),
    createConicGradient(360, gradientColors),
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
};

const iconColors: IconColor[] = [
  { icon: "text-tone1-600", bg: "bg-tone1-50", text: "" },
  { icon: "text-tone2-600", bg: "bg-tone2-50", text: "" },
  { icon: "text-coffee-600", bg: "bg-coffee-50", text: "" },
  { icon: "text-tone4-600", bg: "bg-tone4-50", text: "" },
];
