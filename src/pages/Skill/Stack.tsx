import SkillList from "../../components/page/SkillList";
import type { CardColor } from "../../contexts/pageContext";
import type { Skill } from "../../contexts/skillContext";

export default function Stack({ data }: { data: Skill[] }) {
  return (
    <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
      {data.map((s, i) => {
        const color: CardColor = skillColors[i];
        return (
          <article
            key={s.title}
            id={`category ${s.title}`}
            className={`bg-linear-to-br ${color.bg} to-white border ${color.border} rounded-2xl p-5 md:p-7 lg:p-8`}
          >
            <div className="flex items-start gap-4 md:gap-5 lg:gap-6 mb-5 md:mb-6">
              <div
                className={`size-12 md:size-16 ${color.icon.bg} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 text-white text-lg md:text-2xl shadow-lg ${color.icon.shadow}`}
              >
                {s.tag && <s.tag.icon />}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600">{s.desc}</p>
              </div>
            </div>
            <SkillList
              data={s.skills}
              ulClassName="gap-2 md:gap-3"
              liClassName={`flex justify-center items-center gap-1.5 px-2 md:px-3 py-1 bg-white ${color.tags![0].text} text-xs md:text-sm font-semibold rounded-lg md:rounded-xl border-2 ${color.tags![0].border} shadow-sm`}
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
    bg: "from-tone1-50",
    border: "border-tone1-100",
    tags: [
      {
        text: "text-tone1-700",
        bg: "",
        border: "border-tone1-200",
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone2-600",
      shadow: "shadow-tone2-600/30",
    },
    bg: "from-tone2-50",
    border: "border-tone2-100",
    tags: [
      {
        text: "text-tone2-700",
        bg: "",
        border: "border-tone2-200",
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone3-600",
      shadow: "shadow-tone3-600/30",
    },
    bg: "from-tone3-50",
    border: "border-tone3-100",
    tags: [
      {
        text: "text-tone3-700",
        bg: "",
        border: "border-tone3-200",
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone4-600",
      shadow: "shadow-tone4-600/30",
    },
    bg: "from-tone4-50",
    border: "border-tone4-100",
    tags: [
      {
        text: "text-tone4-700",
        bg: "",
        border: "border-tone4-200",
      },
    ],
  },
  {
    icon: {
      text: "",
      bg: "bg-tone5-600",
      shadow: "shadow-tone5-600/30",
    },
    bg: "from-tone5-50",
    border: "border-tone5-100",
    tags: [
      {
        text: "text-tone5-700",
        bg: "",
        border: "border-tone5-200",
      },
    ],
  },
];
