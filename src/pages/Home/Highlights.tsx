import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  type TargetAndTransition,
} from "motion/react";
import { createConicGradient, mixColor } from "../../utils/util";
import Glow from "../../components/glowFx/Glow";
import { useCallback, useContext, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import { type CardItem } from "../../components/carousel/carouselTypes";
import type { DescriptiveItem } from "../../contexts/pageContext";
import { SettingContext } from "../../contexts/settingContext";

export default function Highlights({
  listData,
}: {
  listData: DescriptiveItem[];
}) {
  const { deviceWidth } = useContext(SettingContext);

  const getAspectRatio = useCallback(() => {
    const width = deviceWidth.pixel;
    if (width >= 948) return 1.4;
    else if (width >= 750) return 1.2;
    else if (width >= 650) return 1.1;
    else if (width >= 547) return 1;
    else if (width >= 450) return 0.9;
    else if (width >= 420) return 0.85;
    else if (width >= 401) return 0.75;
    else if (width >= 340) return 0.65;
    else if (width >= 336) return 0.65;
    else return 0.5;
  }, [deviceWidth]);

  return (
    <div className="">
      <Carousel
        aspectRatio={getAspectRatio()}
        CardComponent={Card}
        contentList={listData}
      />
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
      <div className="relative overflow-hidden rounded-t-2xl border-x border-t border-white">
        <motion.img
          src={content.image}
          alt={`screenshot of ${content.title}`}
          className="w-full aspect-[2.37] object-cover"
          animate={{ scale: isHover ? 1.03 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="relative flex-1 p-4 xs:p-6 flex flex-col justify-end items-start">
        <div className="flex-2">
          <h3>{content.title}</h3>
          <p>{content.desc}</p>
        </div>
        <div className="shrink h-[1ch]" />
        <div className="flex-none overflow-hidden w-full flex items-end">
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
