import SkillList from "../../components/page/SkillList";
import type { CardColor, Heading } from "../../contexts/pageContext";
import {
  shadowAnim,
  transition,
  upAnim_2px,
  upAnim_4px,
} from "../../utils/constants";

export default function Evolution({
  data,
}: {
  data: (Heading & { stack: string[] })[];
}) {
  return (
    <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8 lg:mx-8">
      {data.map((e, i) => {
        const Icon = e.tag!.icon;
        const color = colors[i];
        return (
          <div
            key={e.title}
            id={`${e.title} section`}
            className={`bg-linear-to-br ${color.bg} to-white dark:to-slate-900 border ${color.border} rounded-2xl p-6 lg:p-8 ${color.shadow}
            ${upAnim_4px} hover:shadow-lg active:shadow-lg transition-all duration-300`}
          >
            <div
              className={`size-11 lg:size-12 ${color.icon.bg} rounded-xl flex items-center justify-center mb-4 shadow-lg ${color.icon.shadow}`}
            >
              <Icon className="text-white text-lg lg:text-xl" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-primary mb-2 lg:mb-3">
              {e.title}
            </h3>
            <p className="text-base text-muted mb-4">{e.desc}</p>
            <SkillList
              data={e.stack}
              ulClassName="gap-2"
              liClassName={`flex gap-1 items-center px-3 py-1 ${color.tags![0].bg} ${color.tags![0].text} text-xs font-medium rounded-full ${color.tags![0].shadow} ${upAnim_2px} ${transition}`}
            />
          </div>
        );
      })}
    </div>
  );
}

const colors: CardColor[] = [
  {
    icon: {
      text: "",
      bg: "bg-tone1-600",
      shadow: "shadow-tone1-600/30 dark:shadow-tone1-600/70",
    },
    bg: "from-tone1-50 dark:from-tone1-950",
    border: "border-tone1-100/50 dark:border-tone1-700/20",
    shadow: "dark:shadow-tone1-800/80",
    tags: [
      {
        text: "text-tone1-700 dark:text-tone1-400",
        bg: "bg-tone1-600/10 dark:bg-tone1-600/20",
        shadow: shadowAnim.tone1,
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone3-600",
      shadow: "shadow-tone3-600/30 dark:shadow-tone3-600/70",
    },
    bg: "from-tone3-50 dark:from-tone3-950",
    border: "border-tone3-100/50 dark:border-tone3-700/20",
    shadow: "dark:shadow-tone3-800/80",
    tags: [
      {
        text: "text-tone3-700 dark:text-tone3-400",
        bg: "bg-tone3-600/10 dark:bg-tone3-600/20",
        shadow: shadowAnim.tone3,
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone5-600",
      shadow: "shadow-tone5-600/30 dark:shadow-tone5-600/70",
    },
    bg: "from-tone5-50 dark:from-tone5-950",
    border: "border-tone5-100/50 dark:border-tone5-700/20",
    shadow: "dark:shadow-tone5-800/80",
    tags: [
      {
        text: "text-tone5-700 dark:text-tone5-400",
        bg: "bg-tone5-600/10 dark:bg-tone5-600/20",
        shadow: shadowAnim.tone5,
      },
    ],
  },
];
