import type { DescriptiveItem } from "../../contexts/pageContext";
import { createLinearGradient, mixColor } from "../../utils/util";

const bgGradient: string[] = [
  mixColor(30, "var(--color-accent)", "transparent"),
  mixColor(10, "var(--color-complement)", "transparent"),
  "transparent",
];

export default function Snapshots({
  snapshot,
}: {
  snapshot: DescriptiveItem[];
}) {
  return (
    <ul className="flex flex-col gap-4 items-stretch min-[540px]:items-center">
      {snapshot.map((s, i) => (
        <li
          key={s.desc}
          className={`${
            i % 2 === 0
              ? "rounded-l-full text-left"
              : "rounded-r-full text-right"
          } px-6 min-[540px]:px-4 min-[540px]:w-[480px] py-2`}
          style={{
            background: `${
              i % 2 === 0
                ? createLinearGradient(90, bgGradient)
                : createLinearGradient(270, bgGradient)
            }`,
          }}
        >
          {s.desc}
        </li>
      ))}
    </ul>
  );
}
