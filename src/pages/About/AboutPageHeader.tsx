import { CalendarCog } from "lucide-react";
import { useAboutPageContext } from "../../contexts/aboutContext";

export function AboutPageHeader({
  headingClassName,
}: {
  headingClassName: string;
}) {
  const content = useAboutPageContext();

  return (
    <div className={`${headingClassName} space-y-4`}>
      <div className="flex gap-4 items-center">
        <div className="size-10 bg-amber-700 rounded-full" />
        <h1>{content.pageTitle}</h1>
      </div>
      <p className="text-secondary">{content.introduction} </p>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {content.strength.map((s) => (
          <li
            key={s}
            className="bg-amber-300 size-full rounded-xl px-2 py-4 flex flex-col gap-4 justify-center items-center"
          >
            <div className="size-10 bg-sky-600 rounded-full flex justify-center items-center">
              <CalendarCog className="stroke-white" />
            </div>
            <span className="flex-1 text-center text-sm">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
