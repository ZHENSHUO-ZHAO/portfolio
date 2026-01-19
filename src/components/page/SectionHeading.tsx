import type { Heading, IconColor } from "../../contexts/pageContext";

export default function SectionHeading({
  data,
  invertColor,
  tagColor,
  bottomMargin = "mb-10 md:mb-16",
}: {
  data: Heading;
  invertColor?: boolean;
  tagColor?: IconColor;
  bottomMargin?: string;
}) {
  return (
    <div className="relative w-full flex flex-col gap-4 sm:gap-6 justify-start items-stretch">
      {data.tag && (
        <div
          className={`self-center flex gap-2 justify-center items-center px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold ${tagColor && tagColor.bg}`}
        >
          <data.tag.icon
            className={`${tagColor && tagColor.icon && tagColor.icon}`}
          />
          {data.tag.text && (
            <span className={`${tagColor && tagColor.text}`}>
              {data.tag.text}
            </span>
          )}
        </div>
      )}
      <div className={`flex flex-col gap-3 md:gap-5 ${bottomMargin}`}>
        <h2 className={`${invertColor && "title-color-invert"}`}>
          {data.title}
        </h2>
        {data.desc && (
          <p
            className={`text:sm md:text-xl text-center ${invertColor ? "text-color-invert" : "text-slate-600"}`}
          >
            {data.desc}
          </p>
        )}
      </div>
    </div>
  );
}
