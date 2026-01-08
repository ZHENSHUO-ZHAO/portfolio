import GlowOutline from "../../components/glowFx/GlowOutline";
import portrait from "../../assets/images/home/portrait.webp";
import { createConicGradient, mixColor } from "../../utils/util";

export default function Portrait() {
  return (
    <>
      <svg viewBox="0 0 100 150" className="absolute w-0 h-0">
        <defs>
          <mask id="portrait-mask" maskContentUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="0.6667" fill="white" />

            <ellipse cx="0.5" cy="0.6667" rx="0.5" ry="0.3333" fill="white" />
          </mask>
        </defs>
      </svg>

      <div className="relative w-30 sm:w-50 aspect-[1/1.5]">
        <div className="absolute aspect-square bottom-0 w-full">
          <GlowOutline
            gradient={createConicGradient(0, [
              "transparent",
              mixColor(10, "var(--color-accent)", "transparent"),
              "var(--color-complement)",
              "var(--color-accent)",
              "var(--color-complement)",
              mixColor(10, "var(--color-accent)", "transparent"),
              "transparent",
            ])}
            rounded="rounded-full"
          />
        </div>
        <div
          className="w-full h-full"
          style={{
            mask: "url(#portrait-mask)",
            WebkitMask: "url(#portrait-mask)",
          }}
        >
          <div className="relative size-full grid grid-cols-1 place-items-end">
            <div className="relative w-full col-start-1 row-start-1 aspect-square rounded-full " />
            <img
              src={portrait}
              alt="Portrait of Vincent Zhao"
              className="relative w-full col-start-1 row-start-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
