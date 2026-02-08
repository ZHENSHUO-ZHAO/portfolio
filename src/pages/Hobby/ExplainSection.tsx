import FullBleedContainer from "../../components/page/FullBleedContainer";
import HybridStatement from "../../components/page/HybridStatement";
import SectionHeading from "../../components/page/SectionHeading";
import type { ExplainSection } from "../../contexts/hobbyContext";
import Slideshow from "./Slideshow";

export default function ExplainSection({
  data,
  id,
  imagePosition,
}: {
  data: ExplainSection;
  id: string;
  imagePosition: "left" | "right";
}) {
  return (
    <section
      className="relative py-16 md:py-20 grid md:grid-cols-2 gap-16 items-center lg:mx-8"
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer />
      <div
        className={`relative size-full md:row-start-1 ${imagePosition === "left" ? "md:col-start-1" : "md:col-start-2"}`}
      >
        <Slideshow
          data={data.slides}
          className="max-md:w-full max-md:aspect-square"
        />
      </div>
      <div
        className={`relative w-full md:row-start-1 ${imagePosition === "left" ? "md:col-start-2" : "md:col-start-1"}`}
      >
        <SectionHeading
          data={data.heading}
          tagColor={{
            icon: "text-coffee-700 dark:text-amber-400",
            bg: "bg-amber-100 dark:bg-amber-500/20",
            text: "text-coffee-700 dark:text-amber-400",
            border: "border-amber-200 dark:border-amber-600/20",
          }}
          bottomMargin="mb-3 md:mb-5"
          align="start"
        />
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
          {data.desc.map((d, i) => (
            <p
              key={`description-${i}`}
              className="text-sm md:text-lg text-slate-700 dark:text-slate-300"
            >
              {typeof d === "string" ? d : <HybridStatement data={d} />}
            </p>
          ))}
        </div>

        <div className="space-y-3 md:space-y-4">
          {data.items.map((item, i) => (
            <div key={`item-${i}`} className="flex items-center gap-3">
              <div className="size-10 bg-amber-200 dark:bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="text-coffee-600 dark:text-amber-400" />
              </div>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                {typeof item.text === "string" ? (
                  item.text
                ) : (
                  <HybridStatement data={item.text} />
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
