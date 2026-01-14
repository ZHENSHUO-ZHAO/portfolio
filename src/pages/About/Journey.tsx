import { CalendarCog } from "lucide-react";
import type { DescriptiveItem } from "../../contexts/pageContext";

export default function Journey({ journey }: { journey: DescriptiveItem[] }) {
  return (
    <ol className="space-y-12">
      <Articles listData={journey.slice(0, -1)} />
      <BaseArticle data={journey[journey.length - 1]} />
    </ol>
  );
}

function Articles({ listData }: { listData: DescriptiveItem[] }) {
  return (
    <>
      {listData.map((data) => (
        <li
          key={data.title}
          className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 gap-y-2"
        >
          <div className="size-16 bg-sky-600 rounded-full flex justify-center items-center">
            <CalendarCog className="stroke-white size-10" />
          </div>
          <div className="flex flex-col justify-center">
            <h3>{data.title}</h3>
            <span className="text-sm font-semibold text-muted block">
              {data.subtitle}
            </span>
          </div>
          <p className="col-span-2 sm:col-start-2 sm:col-span-1">{data.desc}</p>
        </li>
      ))}
    </>
  );
}

function BaseArticle({ data }: { data: DescriptiveItem }) {
  return (
    <li key={data.title} className="w-full rounded-xl bg-gray-700">
      <article className="text-white p-6 space-y-4">
        <h3 className="text-white">{data.title}</h3>
        <p className="text-white">{data.desc}</p>
      </article>
    </li>
  );
}
