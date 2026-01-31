import { motion, type Variants } from "motion/react";
import GlowOutline from "../../components/glowFx/GlowOutline";
import type { Heading } from "../../contexts/pageContext";
import {
  createInnerShadow,
  createLinearGradient,
  createRadialGradientWithStops,
  mixColor,
} from "../../utils/util";

export default function Snapshots({ data }: { data: Heading[] }) {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:mx-8">
      {data.map((s, i) => (
        <motion.li
          key={s.desc}
          className="
          group relative p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          initial="rest"
          whileHover="hover"
          whileTap="hover"
        >
          <motion.div
            className="absolute inset-0 rounded-xl"
            variants={topRightVariants}
          />
          <motion.div
            className="absolute inset-0 rounded-xl"
            variants={bottomLeftVariants}
          />

          <motion.div
            className="relative size-12 lg:size-16 flex justify-center items-center rounded-full mb-4 lg:mb-6"
            variants={iconVariants}
            transition={{ ease: "easeIn", duration: 0.3 }}
          >
            {s.tag! && <s.tag.icon className={`text-3xl ${iconColors[i]}`} />}
          </motion.div>

          <div className="relative flex flex-col gap-2 lg:gap-3 justify-start items-start">
            <h3 className="text-white text-lg lg:text-2xl font-bold">
              {s.title}
            </h3>
            <p className="text-sm lg:text-lg font-medium text-slate-300">
              {s.desc}
            </p>
          </div>

          <motion.div className="absolute inset-0" variants={outlineVariants}>
            <GlowOutline
              gradient={outlineGradient}
              rounded="rounded-xl lg:rounded-2xl"
            />
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}

const iconColors: string[] = [
  "text-tone1-400",
  "text-tone2-400",
  "text-tone3-400",
  "text-tone4-400",
];

const outlineVariants: Variants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const outlineGradient: string = createLinearGradient(225, [
  mixColor(60, "var(--color-accent)", "transparent"),
  "transparent",
  "transparent",
  "transparent",
  mixColor(60, "var(--color-complement)", "transparent"),
]);

const topRightVariants: Variants = {
  rest: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(20, "var(--color-accent)", "transparent"), 0],
        ["transparent", 30],
      ],
      "80% 20%",
    ),
    opacity: 0.2,
  },
  hover: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(50, "var(--color-accent)", "transparent"), 0],
        ["transparent", 30],
      ],
      "100% 0%",
    ),
    opacity: 1,
  },
};

const bottomLeftVariants: Variants = {
  rest: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(20, "var(--color-complement)", "transparent"), 0],
        ["transparent", 30],
      ],
      "20% 80%",
    ),
    // filter: "grayscale(0.6)",
    opacity: 0.7,
  },
  hover: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(50, "var(--color-complement)", "transparent"), 0],
        ["transparent", 30],
      ],
      "0% 100%",
    ),
    // filter: "grayscale(0)",
    opacity: 1,
  },
};

const iconVariants: Variants = {
  rest: {
    boxShadow: `${createInnerShadow(
      "-3px",
      "-3px",
      "4px",
      "rgba(255,255,255,0.4)",
    )}`,
  },
  hover: {
    boxShadow: `${createInnerShadow("3px", "3px", "4px", "rgba(255,255,255,0.8)")}`,
  },
};
