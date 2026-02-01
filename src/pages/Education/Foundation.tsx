import type { EducationFoundation } from "../../contexts/educationContext";
import type { CardColor } from "../../contexts/pageContext";

export default function Foundation({ data }: { data: EducationFoundation[] }) {
  return (
    <div className="grid min-[690px]:grid-cols-3 gap-6 md:gap-8 lg:mx-8">
      {data.map((d, i) => {
        const Icon = d.tag!.icon;
        const color = colors[i];
        return (
          <div
            key={d.title}
            className="flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 active:bg-white/10 transition duration-300"
          >
            <div>
              <div
                className={`size-12 md:size-14 ${color.icon!.bg} rounded-xl flex items-center justify-center mb-4 md:mb-6`}
              >
                <Icon className={`${color.icon!.icon} text-xl md:text-2xl`} />
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">
                {d.tag!.text}
              </h3>
              <p
                className={`${color.icon!.text} font-semibold text-sm md:text-base mb-2 md:mb-3`}
              >
                {d.title}
              </p>
              <p className="text-slate-300 text-sm">{d.desc}</p>
            </div>
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">
                  {d.achievement.unit}
                </span>
                <span className="text-white font-bold">
                  {d.achievement.amount}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const colors: CardColor[] = [
  {
    icon: {
      text: "text-tone1-400",
      bg: "bg-tone1-300/20",
      icon: "text-tone1-400",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-tone3-400",
      bg: "bg-tone3-300/20",
      icon: "text-tone3-400",
    },
    bg: "",
    border: "",
  },
  {
    icon: {
      text: "text-tone5-400",
      bg: "bg-tone5-300/20",
      icon: "text-tone5-400",
    },
    bg: "",
    border: "",
  },
];
