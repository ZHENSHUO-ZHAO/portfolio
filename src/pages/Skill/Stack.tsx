import SkillList from "../../components/page/SkillList";
import type { CardColor } from "../../contexts/pageContext";
import type { Skill } from "../../contexts/skillContext";
import {
  rightAnim_8px,
  shadowAnim,
  transition,
  upAnim_2px,
} from "../../utils/constants";

export default function Stack({ data }: { data: Skill[] }) {
  return (
    <div className="relative flex flex-col gap-6 md:gap-7 lg:gap-8">
      {data.map((s, i) => {
        const color: CardColor = skillColors[i];
        return (
          <article
            key={s.title}
            id={`category ${s.title}`}
            className={`bg-linear-to-br ${color.bg} to-white dark:to-slate-900 border ${color.border} rounded-2xl p-5 md:p-7 lg:p-8
            ${color.shadow} ${rightAnim_8px} hover:shadow-lg active:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-start gap-4 md:gap-5 lg:gap-6 mb-5 md:mb-6">
              <div
                className={`size-12 md:size-16 ${color.icon.bg} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 text-white text-lg md:text-2xl shadow-lg ${color.icon.shadow}`}
              >
                {s.tag && <s.tag.icon />}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-muted">
                  {s.desc}
                </p>
              </div>
            </div>
            <SkillList
              data={s.skills}
              ulClassName="gap-2 md:gap-3"
              liClassName={`flex justify-center items-center gap-1.5 px-2 md:px-3 py-1 bg-white ${color.tags![0].text} text-xs md:text-sm font-semibold rounded-lg md:rounded-xl border-2 ${color.tags![0].border} shadow-sm dark:bg-white/20
              ${color.tags![0].shadow} ${upAnim_2px} ${transition}`}
            />
          </article>
        );
      })}
    </div>
  );
}

const skillColors: CardColor[] = [
  {
    icon: {
      text: "",
      bg: "bg-tone1-600",
      shadow: "shadow-tone1-600/30",
    },
    bg: "from-tone1-50 dark:from-tone1-900/50",
    border: "border-tone1-100 dark:border-tone1-800/20",
    shadow: "dark:shadow-tone1-800/80",
    tags: [
      {
        text: "text-tone1-700 [&>span]:text-tone1-800 dark:text-tone1-300 dark:[&>span]:text-tone1-200",
        bg: "",
        border: "border-tone1-200 dark:border-tone1-600/30",
        shadow: shadowAnim.tone1,
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone2-600",
      shadow: "shadow-tone2-600/30",
    },
    bg: "from-tone2-50 dark:from-tone2-900/50",
    border: "border-tone2-100 dark:border-tone2-800/20",
    shadow: "dark:shadow-tone2-800/80",
    tags: [
      {
        text: "text-tone2-700 [&>span]:text-tone2-800 dark:text-tone2-300 dark:[&>span]:text-tone2-200",
        bg: "",
        border: "border-tone2-200 dark:border-tone2-600/30",
        shadow: shadowAnim.tone2,
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone3-600",
      shadow: "shadow-tone3-600/30",
    },
    bg: "from-tone3-50 dark:from-tone3-900/50",
    border: "border-tone3-100 dark:border-tone3-800/20",
    shadow: "dark:shadow-tone3-800/80",
    tags: [
      {
        text: "text-tone3-700 [&>span]:text-tone3-800 dark:text-tone3-300 dark:[&>span]:text-tone3-200",
        bg: "",
        border: "border-tone3-200 dark:border-tone3-600/30",
        shadow: shadowAnim.tone3,
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone4-600",
      shadow: "shadow-tone4-600/30",
    },
    bg: "from-tone4-50 dark:from-tone4-900/50",
    border: "border-tone4-100 dark:border-tone4-800/20",
    shadow: "dark:shadow-tone4-800/80",
    tags: [
      {
        text: "text-tone4-700 [&>span]:text-tone4-800 dark:text-tone4-300 dark:[&>span]:text-tone4-200",
        bg: "",
        border: "border-tone4-200 dark:border-tone4-600/30",
        shadow: shadowAnim.tone4,
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone5-600",
      shadow: "shadow-tone5-600/30",
    },
    bg: "from-tone5-50 dark:from-tone5-900/50",
    border: "border-tone5-100 dark:border-tone5-800/20",
    shadow: "dark:shadow-tone5-800/80",
    tags: [
      {
        text: "text-tone5-700 [&>span]:text-tone5-800 dark:text-tone5-300 dark:[&>span]:text-tone5-200",
        bg: "",
        border: "border-tone5-200 dark:border-tone5-600/30",
        shadow: shadowAnim.tone5,
      },
    ],
  },
];
