import { ArrowRight } from "lucide-react";
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
import type { DescriptiveItem } from "../../contexts/pageContext";
import useMeasure from "../../hooks/measureHook";

export default function Highlights({
  listData,
}: {
  listData: DescriptiveItem[];
}) {
  const [aspectRatio, setAspectRatio] = useState(1);

  // The 4th highlight content has the longest description. Use it in the tracker to calculate the maximum height, which can be used to calculate the aspect ration for the Carousel. It enforce all cards in the Carousel with the same size. As the aspect ration depends on the track, it's unnecessary to add breakpoints to aspect ratio.
  return (
    <div className="relative">
      <CardMaxHeightTracker
        content={listData[3]}
        setAspectRatio={setAspectRatio}
      />
      <Carousel
        aspectRatio={aspectRatio}
        CardComponent={Card}
        contentList={listData}
      />
    </div>
  );
}

function CardMaxHeightTracker({
  content,
  setAspectRatio,
}: {
  content: DescriptiveItem;
  setAspectRatio: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [ref, size] = useMeasure<HTMLDivElement>();

  useLayoutEffect(() => {
    setAspectRatio(
      size.width > 0 && size.height > 0 ? size.width / size.height : 1
    );
  }, [size, setAspectRatio]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      role="presentation"
      tabIndex={-1}
      className="absolute left-0 top-0 w-[70%] h-fit bg-amber-600 pointer-events-none select-none invisible"
    >
      <div className="w-full py-4 flex flex-col justify-between">
        <div className="rounded-t-2xl border-x border-t border-white">
          <img className="w-full aspect-[2.37]" />
          <div className="p-4 xs:p-6 flex flex-col justify-between items-start gap-4">
            <div>
              <h3>{content.title}</h3>
              <p>{content.desc}</p>
            </div>
            <div className="w-full">
              <span>More Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ content }: CardItem<DescriptiveItem>) {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

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
      <div className="absolute inset-0 bg-card rounded-2xl border border-white" />
      <div className="relative overflow-hidden w-full aspect-[2.37] rounded-t-2xl border-x border-t border-white">
        <motion.img
          src={content.image}
          alt={`screenshot of ${content.title}`}
          className="size-full object-cover pointer-events-none"
          animate={{ scale: isHover ? 1.03 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="relative flex-1 p-4 xs:p-6 flex flex-col justify-between items-start gap-4 pointer-events-none">
        <div>
          <h3>{content.title}</h3>
          <p>{content.desc}</p>
        </div>
        <div className="overflow-hidden w-full flex items-end">
          <motion.button
            className="flex gap-2 items-center"
            animate={
              isHover
                ? { translateX: "0" }
                : { translateX: "calc(18px - 100%)" }
            }
          >
            <span>More Details</span>
            <ArrowRight size={18} className="inline" />
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
