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
            <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-5 lg:gap-6 mb-4 md:mb-5 lg:mb-6">
              <div className="size-12 md:size-14 lg:size-16 bg-amber-500/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center">
                <c.icon
                  className={`${color.icon.icon} text-xl md:text-2xl lg:text-3xl`}
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {c.text}
              </h3>
            </div>
            <div
              className={`h-1 w-24 md:w-14 lg:w-16 bg-linear-to-r ${color.bg} rounded-full mb-4 md:mb-6`}
            ></div>
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
    icon: { icon: "text-amber-300", bg: "bg-amber-500/20", text: "" },
    bg: "from-amber-400 to-orange-400",
    border: "",
    tags: [{ icon: "text-amber-400", text: "", bg: "" }],
  },
  {
    icon: { icon: "text-orange-300", bg: "bg-orange-500/20", text: "" },
    bg: "from-orange-400 to-red-400",
    border: "",
    tags: [{ icon: "text-orange-400", text: "", bg: "" }],
  },
  {
    icon: { icon: "text-yellow-300", bg: "bg-yellow-500/20", text: "" },
    bg: "from-yellow-400 to-amber-400",
    border: "",
    tags: [{ icon: "text-yellow-400", text: "", bg: "" }],
  },
];
