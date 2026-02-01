import type { CardColor, Heading } from "../../contexts/pageContext";

export function FourHorizontalCards({
  data,
  cardColors = defaultColors,
}: {
  data: Heading[];
  cardColors?: CardColor[];
}) {
  return (
    <ul className="relative grid grid-cols-1 lg:mx-8 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
      {data.map((s, i) => (
        <Card key={s.title} data={s} color={cardColors[i]} />
      ))}
    </ul>
  );
}

function Card({ data, color }: { data: Heading; color: CardColor }) {
  return (
    <li
      className={`${color.bg} border ${color.border} p-6 sm:p-7 lg:p-6 rounded-xl md:rounded-2xl flex flex-col xs:flex-row sm:flex-col lg:flex-row xl:flex-col gap-4 md:gap-6 
      hover:-translate-y-0.5 xl:hover:-translate-y-1 active:-translate-y-0.5 xl:active:-translate-y-1 hover:scale-[103%] active:scale-[103%] hover:shadow-lg xl:hover:shadow-xl active:shadow-lg xl:active:shadow-xl ${color.shadow} transition-all duration-300`}
    >
      {data.tag && (
        <div
          className={`${color.icon.text} ${color.icon.bg} shadow-lg ${color.icon.shadow} size-12 md:size-16 flex-none flex justify-center items-center text-lg md:text-2xl rounded-xl md:rounded-2xl`}
        >
          {data.tag.icon && <data.tag.icon />}
        </div>
      )}
      <div className="flex-1">
        <h3 className="mb-2 mb:mb-3">{data.title}</h3>
        {data.desc && <p className="text-sm md:text-base">{data.desc}</p>}
      </div>
    </li>
  );
}

const defaultColors: CardColor[] = [
  {
    icon: {
      text: "text-white",
      bg: "bg-tone1-500",
      shadow: "shadow-tone1-600/30",
    },
    bg: "bg-gradient-to-br from-tone1-50/20 via-tone1-100/20 to-tone1-200/40",
    border: "border-tone1-200/30",
    shadow: "hover:shadow-tone1-600/30 active:shadow-tone1-600/30",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone2-500",
      shadow: "shadow-tone2-600/30",
    },
    bg: "bg-gradient-to-br from-tone2-50/20 via-tone2-100/20 to-tone2-200/40",
    border: "border-tone2-200/30",
    shadow: "hover:shadow-tone2-600/30 active:shadow-tone2-600/30",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone3-500",
      shadow: "shadow-tone3-600/30",
    },
    bg: "bg-gradient-to-br from-tone3-50/20 via-tone3-100/20 to-tone3-200/40",
    border: "border-tone3-200/30",
    shadow: "hover:shadow-tone3-600/30 active:shadow-tone3-600/30",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone4-500",
      shadow: "shadow-tone4-600/30",
    },
    bg: "bg-gradient-to-br from-tone4-50/20 via-tone4-100/20 to-tone4-200/40",
    border: "border-tone4-200/30",
    shadow: "hover:shadow-tone4-600/30 active:shadow-tone4-600/30",
  },
];
