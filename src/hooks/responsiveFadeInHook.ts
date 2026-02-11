import { useCallback, useContext } from "react";
import { SettingContext } from "../contexts/settingContext";
import type { VariantLabels, Variants, ViewportOptions } from "motion/react";

export default function useResponsiveFadeIn(breakpoint: number, index: number) {
  const { deviceWidth } = useContext(SettingContext);
  const getAnimation = useCallback(
    () =>
      deviceWidth.pixel >= breakpoint
        ? getOneRowAnimation(index)
        : getMultipleRowAnimation(),
    [deviceWidth, breakpoint, index],
  );

  return getAnimation();
}

export type FadeInAnimation = {
  variants?: Variants;
  initial?: VariantLabels | boolean;
  whileInView?: VariantLabels;
  viewport?: ViewportOptions;
};

const getUpItemVariants: (index: number) => Variants = (index) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2 * index,
    },
  },
});

const getOneRowAnimation: (index: number) => FadeInAnimation = (index) => ({
  variants: getUpItemVariants(index),
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
});

export const getMultipleRowAnimation: () => FadeInAnimation = () => ({
  variants: getUpItemVariants(0),
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
});
