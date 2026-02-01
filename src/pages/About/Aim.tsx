import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Aim({ data }: { data: Heading[] }) {
  return (
    <ol className="relative flex flex-wrap gap-4 sm:gap-5 lg:gap-6 justify-center lg:mx-8">
      {data.map((s, i) => (
        <AimItem key={s.title} data={s} color={cardColors[i]} />
      ))}
    </ol>
  );
}

function AimItem({ data, color }: { data: Heading; color: CardColor }) {
  return (
    <li className="bg-white/5 hover:bg-white/15 active:bg-white/15 transition duration-300 border border-white/10 flex-1 min-w-41 p-4 sm:p-6 lg:p-8 rounded-xl md:rounded-2xl flex flex-col items-center">
      {data.tag && (
        <div
          className={`${color.icon.text} ${color.icon.bg} shadow-lg ${color.icon.shadow} size-12 md:size-16 flex justify-center items-center text-lg md:text-2xl rounded-lg md:rounded-xl mb-3 md:mb-4`}
        >
          {data.tag.icon && <data.tag.icon />}
        </div>
      )}
      <h3 className="mb-0 md:mb-2 text-center title-color-invert text-sm md:text-lg">
        {data.title}
      </h3>
    </li>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      text: "text-white",
      bg: "bg-tone1-500",
      shadow: "shadow-tone1-600/30",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone2-500",
      shadow: "shadow-tone2-600/30",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone3-500",
      shadow: "shadow-tone3-600/30",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone4-500",
      shadow: "shadow-tone4-600/30",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-white",
      bg: "bg-tone5-500",
      shadow: "shadow-tone5-600/30",
    },
    bg: "",
    border: "",
  },
];
