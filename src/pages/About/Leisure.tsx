import type { CardColor, Heading } from "../../contexts/pageContext";
import { transition, upAnim_4px } from "../../utils/constants";

export default function Leisure({
  details,
  items,
}: {
  details: string;
  items: Heading[];
}) {
  return (
    <div className="relative rounded-3xl bg-white dark:bg-slate-800/50 dark:backdrop-blur-sm p-12 border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-none lg:mx-8">
      <p className="text-lg text-slate-700 dark:text-secondary leading-relaxed mb-8">
        {details}
      </p>
      <ul className="grid grid-cols-1 min-[400px]:grid-cols-2 min-[860px]:grid-cols-4 gap-3 md:gap-4 justify-center">
        {items.map((l, i) => (
          <LeisureItem key={l.title} data={l} color={cardColors[i]} />
        ))}
      </ul>
    </div>
  );
}

function LeisureItem({ data, color }: { data: Heading; color: CardColor }) {
  return (
    <li
      className={`${color.bg} border ${color.border} flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-xl
      ${upAnim_4px} ${transition} hover:shadow-lg ${color.shadow}`}
    >
      {data.tag && data.tag.icon && (
        <data.tag.icon
          className={`flex-none text-base md:text-xl ${color.icon.icon}`}
        />
      )}
      <span className={`text-xs xs:text-base font-semibold ${color.icon.text}`}>
        {data.title}
      </span>
    </li>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      icon: "text-amber-600 dark:text-amber-400",
      text: "text-amber-900 dark:text-amber-300",
      bg: "",
    },
    bg: "bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-500/20 dark:to-amber-600/10",
    border: "border-amber-200 dark:border-amber-500/30",
    shadow: "dark:shadow-amber-500/30",
  },
  {
    icon: {
      icon: "text-orange-600 dark:text-orange-400",
      text: "text-orange-900 dark:text-orange-300",
      bg: "",
    },
    bg: "bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-500/20 dark:to-orange-600/10",
    border: "border-orange-200 dark:border-orange-500/30",
    shadow: "dark:shadow-orange-500/30",
  },
  {
    icon: {
      icon: "text-tone1-600 dark:text-tone1-400",
      text: "text-tone1-900 dark:text-tone1-300",
      bg: "",
    },
    bg: "bg-gradient-to-r from-tone1-50 to-tone1-100 dark:from-tone1-500/20 dark:to-tone1-600/10",
    border: "border-tone1-200 dark:border-tone1-500/30",
    shadow: "dark:shadow-tone1-500/30",
  },
  {
    icon: {
      icon: "text-tone5-600 dark:text-tone5-400",
      text: "text-tone5-900 dark:text-tone5-300",
      bg: "",
    },
    bg: "bg-gradient-to-r from-tone5-50 to-tone5-100 dark:from-tone5-500/20 dark:to-tone5-600/10",
    border: "border-tone5-200 dark:border-tone5-500/30",
    shadow: "dark:shadow-tone5-500/30",
  },
];
