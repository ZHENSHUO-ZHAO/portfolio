import {
  motion,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
  type Variants,
} from "motion/react";

export type GradientAnimation = {
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  keyframes?: boolean | TargetAndTransition | VariantLabels | undefined;
  variants?: Variants;
  transition?: Transition<string>;
};

export default function GlowOutline({
  gradient,
  rounded,
  excludeGlow,
}: {
  gradient: string | GradientAnimation;
  rounded?: string;
  excludeGlow?: boolean;
}) {
  //   const gradient =
  //     "conic-gradient(in oklch, red 90deg, orange 95deg, transparent 200deg, transparent 250deg, red 360deg)";
  //   const rounded = "rounded-3xl";
  return (
    <>
      {!excludeGlow && (
        <div className="absolute -inset-1 pointer-events-none blur-xs">
          <Outline gradient={gradient} rounded={rounded} thickness="p-1" />
        </div>
      )}
      <div className="absolute -inset-px pointer-events-none">
        <Outline gradient={gradient} rounded={rounded} thickness="p-px" />
      </div>
    </>
  );
}

// The thickness is created by padding.
function Outline({
  gradient,
  rounded,
  thickness,
}: {
  gradient: string | GradientAnimation;
  rounded?: string;
  thickness: string;
}) {
  const mask =
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)";

  return (
    <div className="absolute inset-0 pointer-events-none">
      {typeof gradient === "string" ? (
        <div
          className={`size-full ${rounded || ""} ${thickness}`}
          style={{
            background: `${gradient}`,
            WebkitMask: `${mask}`,
            WebkitMaskComposite: "xor",
            mask: `${mask}`,
            maskComposite: "exclude",
          }}
          tabIndex={-1}
        />
      ) : (
        <motion.div
          className={`size-full ${rounded || ""} ${thickness}`}
          initial={gradient.initial ?? undefined}
          animate={gradient.keyframes ?? undefined}
          variants={gradient.variants ?? undefined}
          transition={gradient.transition ?? undefined}
          style={{
            WebkitMask: `${mask}`,
            WebkitMaskComposite: "xor",
            mask: `${mask}`,
            maskComposite: "exclude",
          }}
          tabIndex={-1}
        />
      )}
    </div>
  );
}
