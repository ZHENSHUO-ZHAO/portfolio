import type { ReactNode } from "react";

export default function JobTagList({
  title,
  data,
  headingStyle,
  liStyle,
  tagComponent,
}: {
  title: string;
  data: string[];
  headingStyle: string;
  liStyle: string;
  tagComponent: ({ data }: { data: string }) => ReactNode;
}) {
  return (
    <div>
      <h3 className={`${headingStyle}`}>{title}</h3>
      <ul className="pt-1.5 flex gap-2 flex-wrap">
        {data.map((p) => (
          <li
            key={p}
            className={`rounded-full px-3 py-1 text-xs font-medium ${liStyle}`}
          >
            {tagComponent({ data: p })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TextTag({ data }: { data: string }) {
  return <>{data}</>;
}
