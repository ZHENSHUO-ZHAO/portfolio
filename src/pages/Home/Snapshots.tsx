import { motion, type Variants } from "motion/react";
import GlowOutline from "../../components/glowFx/GlowOutline";
import type { DescriptiveItem } from "../../contexts/pageContext";
import {
  createInnerShadow,
  createLinearGradient,
  createRadialGradientWithStops,
  mixColor,
} from "../../utils/util";

const outlineVariants: Variants = {
  rest: {
    background: createLinearGradient(135, [
      mixColor(30, "var(--color-accent)", "transparent"),
      "transparent",
      "transparent",
      "transparent",
      mixColor(30, "var(--color-complement)", "transparent"),
    ]),
  },
  hover: {
    background: createLinearGradient(135, [
      mixColor(60, "var(--color-accent)", "transparent"),
      "transparent",
      "transparent",
      "transparent",
      mixColor(60, "var(--color-complement)", "transparent"),
    ]),
  },
};

const topLeftVariants: Variants = {
  rest: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(30, "var(--color-accent)", "transparent"), 0],
        ["transparent", 30],
      ],
      "top left"
    ),
  },
  hover: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(50, "var(--color-accent)", "transparent"), 0],
        ["transparent", 30],
      ],
      "top left"
    ),
  },
};

const bottomRightVariants: Variants = {
  rest: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(30, "var(--color-complement)", "transparent"), 0],
        ["transparent", 30],
      ],
      "bottom right"
    ),
  },
  hover: {
    background: createRadialGradientWithStops(
      undefined,
      undefined,
      [
        [mixColor(50, "var(--color-complement)", "transparent"), 0],
        ["transparent", 30],
      ],
      "bottom right"
    ),
  },
};

const iconVariants: Variants = {
  rest: {
    boxShadow: `${createInnerShadow(
      "-6px",
      "-6px",
      "8px",
      "rgba(255,255,255,0.8)"
    )}, ${createInnerShadow("6px", "6px", "10px", "rgba(0,0,0,0.25)")}`,
  },
  hover: {
    boxShadow: `${createInnerShadow(
      "-6px",
      "-6px",
      "8px",
      "rgba(0,0,0,0.25)"
    )}, ${createInnerShadow("6px", "6px", "10px", "rgba(255,255,255,0.8)")}`,
  },
};

export default function Snapshots({
  snapshot,
}: {
  snapshot: DescriptiveItem[];
}) {
  return (
    <ul className="grid grid-cols-1 min-[430px]:grid-cols-2 lg:grid-cols-4 gap-4">
      {snapshot.map((s, i) => (
        <motion.li
          key={s.desc}
          className="
          relative flex flex-col justify-start items-center gap-4 py-4 px-4 rounded-xl bg-slate-500/10"
          initial="rest"
          whileHover="hover"
          whileTap="hover"
        >
          <motion.div
            className="absolute inset-0 rounded-xl"
            variants={topLeftVariants}
          />
          <motion.div
            className="absolute inset-0 rounded-xl"
            variants={bottomRightVariants}
          />

          <div className="relative h-20 flex justify-center items-center">
            <motion.div
              className="h-3/4 aspect-square bg-slate-200 p-3 rounded-full"
              variants={iconVariants}
              transition={{ ease: "easeIn", duration: 0.3 }}
            >
              {s.icon && (
                <s.icon className="size-full " stroke={`url(#gradient_${i})`}>
                  <defs>
                    <linearGradient
                      id={`gradient_${i}`}
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-complement)" />
                    </linearGradient>
                  </defs>
                </s.icon>
              )}
            </motion.div>
          </div>

          <div className="relative flex-1 flex flex-col gap-1 justify-start items-center text-center">
            <p className="text-lg font-bold">{s.title}</p>
            <p className="text-md font-medium text-neutral-500">{s.desc}</p>
          </div>

          <GlowOutline
            gradient={{ variants: outlineVariants }}
            rounded="rounded-xl"
          />
        </motion.li>
      ))}
    </ul>
  );
}
