import SkillList from "../../components/page/SkillList";
import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Evolution({
  data,
}: {
  data: (Heading & { stack: string[] })[];
}) {
  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 lg:mx-8">
      {data.map((e, i) => {
        const Icon = e.tag!.icon;
        const color = colors[i];
        return (
          <div
            key={e.title}
            id={`${e.title} section`}
            className={`bg-linear-to-br ${color.bg} to-white border ${color.border} rounded-2xl p-6 lg:p-8`}
          >
            <div
              className={`size-11 lg:size-12 ${color.icon.bg} rounded-xl flex items-center justify-center mb-4 shadow-lg ${color.icon.shadow}`}
            >
              <Icon className="text-white text-lg lg:text-xl" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3">
              {e.title}
            </h3>
            <p className="text-base text-slate-600 mb-4">{e.desc}</p>
            <SkillList
              data={e.stack}
              ulClassName="gap-2"
              liClassName={`flex gap-1 items-center px-3 py-1 ${color.tags![0].bg} ${color.tags![0].text} text-xs font-medium rounded-full`}
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
      shadow: "shadow-tone1-600/30",
    },
    bg: "from-tone1-50",
    border: "border-tone1-100/50",
    tags: [{ text: "text-tone1-700", bg: "bg-tone1-600/10" }],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone3-600",
      shadow: "shadow-tone3-600/30",
    },
    bg: "from-tone3-50",
    border: "border-tone3-100/50",
    tags: [{ text: "text-tone3-700", bg: "bg-tone3-600/10" }],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone5-600",
      shadow: "shadow-tone5-600/30",
    },
    bg: "from-tone5-50",
    border: "border-tone5-100/50",
    tags: [{ text: "text-tone5-700", bg: "bg-tone5-600/10" }],
  },
];
