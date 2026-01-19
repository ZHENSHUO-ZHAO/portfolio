import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Strength({ data }: { data: Heading[] }) {
  return (
    <ol className="relative grid grid-cols-1 xl:mx-8 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
      {data.map((s, i) => (
        <StrengthItem key={s.title} data={s} color={cardColors[i]} />
      ))}
    </ol>
  );
}

function StrengthItem({ data, color }: { data: Heading; color: CardColor }) {
  return (
    <li
      className={`${color.bg} border ${color.border} flex-1 p-6 sm:p-7 lg:p-6 rounded-xl md:rounded-2xl`}
    >
      {data.tag && (
        <div
          className={`${color.icon.text} ${color.icon.bg} shadow-lg ${color.icon.shadow} size-12 md:size-16 flex justify-center items-center text-lg md:text-2xl rounded-xl md:rounded-2xl mb-4 md:mb-6`}
        >
          {data.tag.icon && <data.tag.icon />}
        </div>
      )}
      <h3 className="mb-2 mb:mb-3">{data.title}</h3>
      {data.desc && <p className="text-sm md:text-base">{data.desc}</p>}
    </li>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      text: "text-white",
      bg: "bg-(--color-tone1-500)",
      shadow: "shadow-tone1-600/30",
    },
    bg: "bg-gradient-to-br from-(--color-tone1-50)/20 via-(--color-tone1-100)/20 to-(--color-tone1-200)/40",
    border: "border-(--color-tone1-200)/30",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-(--color-tone2-500)",
      shadow: "shadow-tone2-600/30",
    },
    bg: "bg-gradient-to-br from-(--color-tone2-50)/20 via-(--color-tone2-100)/20 to-(--color-tone2-200)/40",
    border: "border-(--color-tone2-200)/30",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-(--color-tone3-500)",
      shadow: "shadow-tone3-600/30",
    },
    bg: "bg-gradient-to-br from-(--color-tone3-50)/20 via-(--color-tone3-100)/20 to-(--color-tone3-200)/40",
    border: "border-(--color-tone3-200)/30",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-(--color-tone4-500)",
      shadow: "shadow-tone4-600/30",
    },
    bg: "bg-gradient-to-br from-(--color-tone4-50)/20 via-(--color-tone41-100)/20 to-(--color-tone4-200)/40",
    border: "border-(--color-tone4-200)/30",
  },
];
