import { FaCircleCheck } from "react-icons/fa6";
import type { Certificate } from "../../contexts/hobbyContext";
import type { CardColor } from "../../contexts/pageContext";

export default function Certification({ data }: { data: Certificate[] }) {
  return (
    <div className="grid min-[800px]:grid-cols-3 gap-4 min-[800px]:gap-8 lg:mx-8">
      {data.map((c, i) => {
        const color: CardColor = colors[i];

        return (
          <div
            key={`cert-${i}`}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-7 lg:p-8 hover:bg-white/15 active:bg-white/15 transition duration-300"
          >
            <div className="flex flex-row min-[800px]:flex-col lg:flex-row items-start mb-4 min-[800px]:mb-7 lg:mb-6">
              <div
                style={
                  {
                    "--bg-image": `url(${c.iconUrl})`,
                  } as React.CSSProperties
                }
                className="relative -translate-x-2 bg-(image:--bg-image) bg-cover bg-center size-12 md:size-14 lg:size-16 opacity-90"
              />
              <div className="flex-1 flex flex-col justify-between items-start gap-3">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {c.title}
                </h3>
                <div
                  className={`h-1 w-24 md:w-14 lg:w-16 bg-linear-to-r ${color.bg} rounded-full`}
                />
              </div>
            </div>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              {c.skills.map((s) => (
                <li key={s} className="flex items-baseline gap-2">
                  <FaCircleCheck
                    className={`${color.tags![0].icon} text-xs md:text-base shrink-0`}
                  />
                  <span className="text-sm md:text-base text-amber-100 dark:text-slate-300">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

const colors: CardColor[] = [
  {
    icon: { icon: "", bg: "bg-amber-500/20", text: "" },
    bg: "from-amber-400 to-orange-400",
    border: "",
    tags: [{ icon: "text-amber-400", text: "", bg: "" }],
  },
  {
    icon: { icon: "", bg: "bg-orange-500/20", text: "" },
    bg: "from-orange-400 to-red-400",
    border: "",
    tags: [{ icon: "text-orange-400", text: "", bg: "" }],
  },
  {
    icon: { icon: "", bg: "bg-yellow-500/20", text: "" },
    bg: "from-yellow-400 to-amber-400",
    border: "",
    tags: [{ icon: "text-yellow-400", text: "", bg: "" }],
  },
];
