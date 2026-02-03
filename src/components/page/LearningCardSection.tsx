import type { ReactNode } from "react";
import type { CardColor, Heading } from "../../contexts/pageContext";
import FullBleedContainer from "./FullBleedContainer";

export default function LearningCardSection({
  headingData,
  items,
  id,
  bgChildren,
  invertColor,
}: {
  headingData: Heading;
  items: Heading[];
  id: string;
  bgChildren?: ReactNode;
  invertColor?: boolean;
}) {
  const Icon = headingData.tag!.icon;
  const color: CardColor = invertColor ? colorInvert : colorNormal;

  return (
    <section
      className="relative px-4 md:px-8 py-12 md:py-20 mx-auto max-w-5xl"
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      <div
        className={`relative ${color.bg} rounded-3xl p-6 md:p-12 ${color.border} ${color.shadow}`}
      >
        <div className="text-center mb-6 md:mb-8">
          <div className={`inline-block p-3 ${color.icon.bg} rounded-2xl mb-4`}>
            <Icon className={`${color.icon.icon} text-2xl md:text-3xl`} />
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold ${color.icon.text} mb-3 md:mb-4`}
          >
            {headingData.title}
          </h2>
          <p
            className={`text-sm md:text-lg ${color.tags![3].text} max-w-3xl mx-auto`}
          >
            {headingData.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-6 md:mt-8">
          {items.map((d, i) => {
            const ItemIcon = d.tag!.icon;
            return (
              <div key={d.title} className="text-center">
                <div
                  className={`size-14 md:size-16 ${color.tags![i].bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                >
                  <ItemIcon className={`${color.tags![i].text} text-2xl`} />
                </div>
                <h3 className={`text-base font-bold ${color.icon.text} mb-2`}>
                  {d.title}
                </h3>
                <p className={`${color.tags![3].text} text-xs md:text-sm`}>
                  {d.desc}
                </p>
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
    bg: "bg-linear-to-br from-tone1-500 to-tone5-500",
    text: "text-primary",
  },
  bg: "bg-white dark:bg-slate-800/50",
  border: "border border-slate-200  dark:border-slate-700/50",
  shadow: "shadow-xl dark:shadow-slate-800",
  tags: [
    {
      text: "text-tone1-600 dark:text-tone1-400",
      bg: "bg-tone1-100/60 dark:bg-tone1-600/20",
    },
    {
      text: "text-tone3-600 dark:text-tone3-400",
      bg: "bg-tone3-100/60 dark:bg-tone3-600/20",
    },
    {
      text: "text-tone5-600 dark:text-tone5-400",
      bg: "bg-tone5-100/60 dark:bg-tone5-600/20",
    },
    { text: "text-muted", bg: "" }, // For desc
  ],
};

const colorInvert: CardColor = {
  icon: {
    icon: "text-white",
    bg: "bg-white/20",
    text: "text-white",
  },
  bg: "bg-gradient-to-br from-tone1-600 via-tone3-600 to-tone5-600 dark:from-tone1-800 dark:via-tone3-800 dark:to-tone5-800",
  border: "",
  shadow: "",
  tags: [
    { text: "text-white", bg: "bg-white/20 backdrop-blur-sm" },
    { text: "text-white", bg: "bg-white/20 backdrop-blur-sm" },
    { text: "text-white", bg: "bg-white/20 backdrop-blur-sm" },
    { text: "text-white/80", bg: "" }, // For desc
  ],
};
