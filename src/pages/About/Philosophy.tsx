import { CalendarCog } from "lucide-react";
import type { DescriptiveItem } from "../../contexts/pageContext";

export default function Philosophy({
  philosophy,
}: {
  philosophy: DescriptiveItem[];
}) {
  return (
    <ol className="grid grid-cols-1 min-[28rem]:grid-cols-2 lg:grid-cols-4 gap-4 justify-start items-stretch">
      <Card listData={philosophy} />
    </ol>
  );
}

function Card({ listData }: { listData: DescriptiveItem[] }) {
  return (
    <>
      {listData.map((data) => (
        <li
          key={data.title}
          className="p-4 flex flex-col gap-2 items-start bg-slate-200 border border-slate-300 rounded-lg"
        >
          <div className="size-8 bg-sky-600 rounded-md flex justify-center items-center">
            <CalendarCog className="stroke-white size-5" />
          </div>
          <h3 className="min-[28rem]:text-lg lg:text-xl">{data.title}</h3>
          <p className="text-sm md:text-base text-muted">{data.desc}</p>
        </li>
      ))}
    </>
  );
}
