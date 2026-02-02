import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Journey({ data }: { data: Heading[] }) {
  return (
    <ol className="relative w-full grid grid-cols-1 gap-y-6">
      {data.map((j, i, arr) => (
        <JourneyItem
          key={j.title}
          data={j}
          color={cardColors[i]}
          invert={i === arr.length - 1}
        />
      ))}
    </ol>
  );
}

function JourneyItem({
  data,
  color,
  invert,
}: {
  data: Heading;
  color: CardColor;
  invert?: boolean;
}) {
  return (
    <li
      className={`rounded-2xl p-5 md:p-8 flex flex-col xs:flex-row gap-3 xs:gap-4 md:gap-6 border-l-4 ${color.bg} ${color.border} 
      ${color.shadow && "hover:translate-x-2 active:translate-x-2 hover:shadow-lg active:shadow-lg transition-all duration-300"} ${color.shadow}`}
    >
      <div
        className={`flex-none size-10 xs:size-12 md:size-14 rounded-xl flex justify-center items-center text-lg xs:text-xl md:text-2xl ${color.icon.text} ${color.icon.bg}`}
      >
        {data.tag && <data.tag.icon />}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-5">
          <h3 className={`${invert && "title-color-invert"}`}>{data.title}</h3>
          {data.tag?.text && (
            <span
              className={`px-3 py-1 text-xs md:text-sm font-semibold rounded-full ${color.tags ? color.tags[0].text : ""} ${color.tags ? color.tags[0].bg : ""}`}
            >
              {data.tag?.text}
            </span>
          )}
        </div>
        <p className={`text-sm md:text-lg ${invert && "text-color-invert"}`}>
          {data.desc}
        </p>
      </div>
    </li>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      text: "text-tone1-400",
      bg: "bg-tone1-100 dark:bg-tone1-500/20",
    },
    bg: "bg-white dark:bg-slate-800/50",
    border: "border-tone1-400 dark:border-tone1-500",
    tags: [
      {
        text: "text-tone1-700 dark:text-tone1-400",
        bg: "bg-tone1-50 dark:bg-tone1-500/20",
      },
    ],
    shadow:
      "hover:shadow-tone1-600/30 active:shadow-tone1-600/30 dark:hover:shadow-tone1-600/60 dark:active:shadow-tone1-600/60",
  },
  {
    icon: {
      text: "text-tone2-400",
      bg: "bg-tone2-100 dark:bg-tone2-500/20",
    },
    bg: "bg-white dark:bg-slate-800/50",
    border: "border-tone2-400 dark:border-tone2-500",
    tags: [
      {
        text: "text-tone2-700 dark:text-tone2-400",
        bg: "bg-tone2-50 dark:bg-tone2-500/20",
      },
    ],
    shadow:
      "hover:shadow-tone2-600/30 active:shadow-tone2-600/30 dark:hover:shadow-tone2-600/60 dark:active:shadow-tone2-600/60",
  },
  {
    icon: {
      text: "text-tone3-400",
      bg: "bg-tone3-100 dark:bg-tone3-500/20",
    },
    bg: "bg-white dark:bg-slate-800/50",
    border: "border-tone3-400 dark:border-tone3-500",
    tags: [
      {
        text: "text-tone3-700 dark:text-tone3-400",
        bg: "bg-tone3-50 dark:bg-tone3-500/20",
      },
    ],
    shadow:
      "hover:shadow-tone3-600/30 active:shadow-tone3-600/30 dark:hover:shadow-tone3-600/60 dark:active:shadow-tone3-600/60",
  },
  {
    icon: {
      text: "text-tone4-400",
      bg: "bg-tone4-100 dark:bg-tone4-500/20",
    },
    bg: "bg-white dark:bg-slate-800/50",
    border: "border-tone4-400 dark:border-tone4-500",
    tags: [
      {
        text: "text-tone4-700 dark:text-tone4-400",
        bg: "bg-tone4-50 dark:bg-tone4-500/20",
      },
    ],
    shadow:
      "hover:shadow-tone4-600/30 active:shadow-tone4-600/30 dark:hover:shadow-tone4-600/60 dark:active:shadow-tone4-600/60",
  },
  {
    icon: {
      text: "text-tone1-400",
      bg: "bg-tone1-500/20 dark:bg-tone1-500/30",
    },
    bg: "bg-color-invert dark:from-tone1-700 dark:via-tone1-700 dark:to-tone1-800",
    border: "border-tone1-400",
  },
];
