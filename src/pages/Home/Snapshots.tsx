import GlowOutline from "../../components/glowFx/GlowOutline";
import type { DescriptiveItem } from "../../contexts/pageContext";
import {
  createInnerShadow,
  createLinearGradient,
  createRadialGradientWithStops,
  mixColor,
} from "../../utils/util";

const outlineGradient: string = createLinearGradient(135, [
  mixColor(30, "var(--color-accent)", "transparent"),
  "transparent",
  "transparent",
  "transparent",
  mixColor(30, "var(--color-complement)", "transparent"),
]);

const topLeftGradient: string = createRadialGradientWithStops(
  undefined,
  undefined,
  [
    [mixColor(30, "var(--color-accent)", "transparent"), 0],
    ["transparent", 30],
  ],
  "top left"
);

const bottomRightGradient: string = createRadialGradientWithStops(
  undefined,
  undefined,
  [
    [mixColor(30, "var(--color-complement)", "transparent"), 0],
    ["transparent", 30],
  ],
  "bottom right"
);

export default function Snapshots({
  snapshot,
}: {
  snapshot: DescriptiveItem[];
}) {
  return (
    <ul className="grid grid-cols-1 min-[489px]:grid-cols-2 lg:grid-cols-4 gap-4">
      {snapshot.map((s, i) => (
        <li
          key={s.desc}
          className="
          relative flex flex-col justify-start items-center gap-4 py-4 px-4 rounded-xl border border-slate-100"
          style={{
            background: topLeftGradient,
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{ background: bottomRightGradient }}
          />
          <GlowOutline gradient={outlineGradient} rounded="rounded-xl" />
          <div className="h-20 flex justify-center items-center">
            <div
              className="h-3/4 aspect-square bg-slate-200 p-3 rounded-full"
              style={{ boxShadow: createInnerShadow() }}
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
                      <stop
                        offset="0%"
                        stopColor="var(--color-accent)"
                        // stopOpacity="0.3"
                      />
                      <stop offset="100%" stopColor="var(--color-complement)" />
                    </linearGradient>
                  </defs>
                </s.icon>
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1 justify-start items-center text-center">
            <p className="font-bold">{s.title}</p>
            <p className="text-md font-medium text-neutral-500">{s.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
