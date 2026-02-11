import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
  Variants,
  ViewportOptions,
} from "motion/react";

export const email: string = "mailto:vincentjill@hotmail.com";

export const linkedin: string =
  "https://www.linkedin.com/in/zhenshuo-vincent-zhao/";

export const cv: string = "/files/Zhenshuo_Zhao_Resume.pdf";

export const shadowAnim: {
  tone1: string;
  tone2: string;
  tone3: string;
  tone4: string;
  tone5: string;
} = {
  tone1: `hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone1-700)_50%,transparent)]
          active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone1-700)_50%,transparent)]
          dark:hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone1-500)_70%,transparent)]
          dark:active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone1-500)_70%,transparent)]`,
  tone2: `hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone2-700)_50%,transparent)]
          active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone2-700)_50%,transparent)]
          dark:hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone2-500)_70%,transparent)]
          dark:active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone2-500)_70%,transparent)]`,
  tone3: `hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone3-700)_50%,transparent)]
          active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone3-700)_50%,transparent)]
          dark:hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone3-500)_70%,transparent)]
          dark:active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone3-500)_70%,transparent)]`,
  tone4: `hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone4-700)_50%,transparent)]
          active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone4-700)_50%,transparent)]
          dark:hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone4-500)_70%,transparent)]
          dark:active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone4-500)_70%,transparent)]`,
  tone5: `hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone5-700)_50%,transparent)]
          active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone5-700)_50%,transparent)]
          dark:hover:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone5-500)_70%,transparent)]
          dark:active:shadow-[0_2px_8px_color-mix(in_oklch,var(--color-tone5-500)_70%,transparent)]`,
};

export const upAnim_2px: string =
  "hover:-translate-y-0.5 active:-translate-y-0.5";

export const upAnim_4px: string = "hover:-translate-y-1 active:-translate-y-1";

export const rightAnim_8px: string = "hover:translate-x-2 active:translate-x-2";

export const transition: string = "transition duration-300";

export const fadeInGroupMotionProps: {
  variants: Variants;
  initial: VariantLabels;
  whileInView: VariantLabels;
  viewport: ViewportOptions;
} = {
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
};

export const fadeInUpItemVariants: Variants = {
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
    },
  },
};

export const fadeInLeftItemAnimation: {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  transition: Transition<unknown>;
  viewport: ViewportOptions;
} = {
  initial: {
    opacity: 0,
    x: 50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: { once: true },
};
