import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Overview({ data }: { data: Heading[] }) {
  return (
    <div className="relative grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-center lg:mx-8">
      {data.map((s, i) => (
        <SkillItem key={s.title} data={s} color={cardColors[i]} />
      ))}
    </div>
  );
}

function SkillItem({ data, color }: { data: Heading; color: CardColor }) {
  return (
    <article
      className={`bg-white/5 hover:bg-white/15 active:bg-white/15 transition duration-300 border border-white/10 p-4 sm:p-6 lg:p-8 rounded-xl md:rounded-2xl flex flex-col items-start`}
    >
      {data.tag && (
        <div
          className={`${color.icon.text} ${color.icon.bg} shadow-lg ${color.icon.shadow} size-12 md:size-16 flex justify-center items-center text-lg md:text-2xl rounded-lg md:rounded-xl mb-3 md:mb-4`}
        >
          {data.tag.icon && <data.tag.icon />}
        </div>
      )}
      <h3 className="mb-0 md:mb-2 title-color-invert text-lg md:text-xl">
        {data.title}
      </h3>
      <p className="text-sm md:text-base text-slate-300">{data.desc}</p>
    </article>
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
