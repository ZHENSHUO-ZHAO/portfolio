import type { ReactNode } from "react";
import type { CardColor, Heading } from "../../contexts/pageContext";
import FullBleedContainer from "./FullBleedContainer";

export default function LearningCardSection({
  headingData,
  items,
  id,
  bgChildren,
}: {
  headingData: Heading;
  items: Heading[];
  id: string;
  bgChildren?: ReactNode;
}) {
  const Icon = headingData.tag!.icon;

  return (
    <section
      className="relative px-4 md:px-8 py-12 md:py-20 mx-auto max-w-5xl"
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      <div
        className={`relative ${colorNormal.bg} rounded-3xl p-6 md:p-12 border ${colorNormal.border} shadow-xl`}
      >
        <div className="text-center mb-6 md:mb-8">
          <div
            className={`inline-block p-3 bg-linear-to-br ${colorNormal.icon.bg} rounded-2xl mb-4`}
          >
            <Icon className={`${colorNormal.icon.icon} text-2xl md:text-3xl`} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
            {headingData.title}
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-3xl mx-auto">
            {headingData.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-6 md:mt-8">
          {items.map((d, i) => {
            const ItemIcon = d.tag!.icon;
            return (
              <div key={d.title} className="text-center">
                <div
                  className={`size-14 md:size-16 ${colorNormal.tags![i].bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                >
                  <ItemIcon
                    className={`${colorNormal.tags![i].text} text-2xl`}
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const colorNormal: CardColor = {
  icon: {
    icon: "text-white",
    bg: "from-tone1-500 to-tone5-500",
    text: "",
  },
  bg: "bg-white",
  border: "border-slate-200",
  tags: [
    { text: "text-tone1-600", bg: "bg-tone1-100/60" },
    { text: "text-tone3-600", bg: "bg-tone3-100/60" },
    { text: "text-tone5-600", bg: "bg-tone5-100/60" },
  ],
};
