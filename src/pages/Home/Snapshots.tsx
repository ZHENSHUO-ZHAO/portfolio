import type { DescriptiveItem } from "../../contexts/pageContext";
import { createLinearGradient, mixColor } from "../../utils/util";

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
            i % 2 === 0 ? "rounded-l-full" : "rounded-r-full"
          } text-left px-5 min-[540px]:px-4 py-2`}
          style={{
            background: `${
              i % 2 === 0
                ? createLinearGradient(90, [
                    mixColor(30, "var(--color-accent)", "transparent"),
                    mixColor(10, "var(--color-complement)", "transparent"),
                    "transparent",
                  ])
                : createLinearGradient(270, [
                    mixColor(30, "var(--color-accent)", "transparent"),
                    mixColor(10, "var(--color-complement)", "transparent"),
                    "transparent",
                  ])
            }`,
          }}
        >
          {s.desc}
        </li>
      ))}
    </ul>
  );
}
