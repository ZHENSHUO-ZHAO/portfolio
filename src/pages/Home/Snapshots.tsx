import type { DescriptiveItem } from "../../contexts/pageContext";
import { createLinearGradient, mixColor } from "../../utils/util";

export default function Snapshots({
  snapshot,
}: {
  snapshot: DescriptiveItem[];
}) {
  return (
    <ul className="flex flex-col gap-4 items-center">
      {snapshot.map((s) => (
        <li
          key={s.desc}
          className="rounded-l-full text-left px-4 py-2"
          style={{
            background: createLinearGradient(90, [
              mixColor(30, "var(--color-accent)", "transparent"),
              mixColor(10, "var(--color-complement)", "transparent"),
              "transparent",
            ]),
          }}
        >
          {s.desc}
        </li>
      ))}
    </ul>
  );
}
