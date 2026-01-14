import { CalendarCog } from "lucide-react";
import type { DescriptiveItem } from "../../contexts/pageContext";

export default function Leisure({
  desc,
  tags,
}: {
  desc: string;
  tags: DescriptiveItem[];
}) {
  return (
    <div className="w-full p-8 bg-slate-200 border border-slate-300 rounded-lg space-y-6">
      <p>{desc}</p>
      <ul className="flex flex-wrap gap-3">
        {tags.map((t) => (
          <Tag tag={t} key={t.desc} />
        ))}
      </ul>
    </div>
  );
}

function Tag({ tag }: { tag: DescriptiveItem }) {
  return (
    <li className="w-fit px-4 py-2 flex gap-2 bg-sky-600 rounded-full items-center">
      <CalendarCog className="stroke-white size-3.5" />
      <span className="text-white text-sm">{tag.desc}</span>
    </li>
  );
}
