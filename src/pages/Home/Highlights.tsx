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
    if (deviceWidth >= 64) return 1.4;
    else if (deviceWidth >= 48) return 1.3;
    else if (deviceWidth >= 40) return 1.1;
    else if (deviceWidth >= 30) return 1.1;
    else return 1;
  }, [deviceWidth]);

  return (
    <div className="">
      {/* <ul className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      {/* {listData.map((data) => (
        <Card key={data.title} data={data} />
      ))} */}
      <Carousel
        aspectRatio={getAspectRatio()}
        CardComponent={Card}
        contentList={listData}
      />
    </div>
  );
}

// interface HighlightContent {
//   title: string;
//   desc: string;
// }

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
      className="relative w-full h-[92%] flex flex-col"
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
      <img
        className="relative w-full aspect-[2.37] rounded-t-2xl border-x border-t border-white object-cover"
        src={content.image}
        alt={`screenshot of ${content.title}`}
      />
      <div className="relative flex-1 p-6 flex flex-col justify-between items-start">
        <div className="mb-6">
          <h3>{content.title}</h3>
          <p>{content.desc}</p>
        </div>
        <div className="overflow-hidden w-full">
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
