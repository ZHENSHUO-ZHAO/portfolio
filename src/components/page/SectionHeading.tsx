import type {
  Heading,
  HeadingColor,
  IconColor,
} from "../../contexts/pageContext";
import HybridStatement from "./HybridStatement";

export default function SectionHeading({
  data,
  invertColor,
  tagColor,
  bottomMargin = "mb-10 md:mb-16",
  align = "center",
}: {
  data: Heading;
  invertColor?: boolean | HeadingColor;
  tagColor?: IconColor;
  bottomMargin?: string;
  align?: "center" | "start";
}) {
  return (
    <div className="relative w-full flex flex-col gap-4 sm:gap-6 justify-start items-stretch">
      {data.tag && (
        <div
          className={`${align === "center" ? "self-center justify-center" : "self-start"} flex gap-2 items-center px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm ${tagColor && tagColor.bg} ${tagColor && tagColor.border} ${tagColor && tagColor.border && "border"}`}
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
        <h2
          className={`${typeof invertColor === "object" ? invertColor.title : invertColor ? "title-color-invert" : ""} ${align === "center" ? "text-center" : "text-left"}`}
        >
          {data.hybridTitle ? (
            <HybridStatement data={data.hybridTitle} />
          ) : (
            data.title
          )}
        </h2>
        {data.desc && (
          <p
            className={`text:sm md:text-xl ${align === "center" ? "text-center" : "text-left"} ${typeof invertColor === "object" ? invertColor.desc : invertColor ? "text-color-invert" : "text-slate-600"}`}
          >
            {data.desc}
          </p>
        )}
      </div>
    </div>
  );
}
