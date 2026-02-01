import { motion } from "motion/react";
import type { CardColor, Heading, Stat } from "../../contexts/pageContext";

export default function Competency({
  data,
}: {
  data: (Heading & { stat: Stat })[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8">
      {data.map((s, i) => {
        const color: CardColor = skillColors[i];
        const units: string[] = s.stat.unit.split("-");
        return (
          <article
            id={`category ${s.title}`}
            key={s.title}
            className={`flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-5 md:p-7 lg:p-8
              hover:-translate-y-1 active:-translate-y-1 hover:shadow-lg active:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-start gap-4 md:gap-5 lg:gap-6 mb-5 md:mb-6">
              <div
                className={`size-11 md:size-12 ${color.icon.bg} rounded-xl flex items-center justify-center shrink-0 ${color.icon.text} text-lg md:text-2xl`}
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

            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex justify-between text-xs md:text-sm mb-2">
                <span className="font-medium text-slate-700">{units[0]}</span>
                <span className={`font-bold ${color.tags![0].text}`}>
                  {units[1]}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <motion.div
                  className={`bg-linear-to-r ${color.tags![0].bg} h-2 rounded-full`}
                  initial={{
                    clipPath: "inset(0 100% 0 0 round 9999px)",
                  }}
                  whileInView={{
                    clipPath: `inset(0 ${100 - parseFloat(s.stat.amount)}% 0 0 round 9999px)`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                ></motion.div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

const skillColors: CardColor[] = [
  {
    icon: {
      text: "text-tone1-600",
      bg: "bg-tone1-50",
    },
    bg: "",
    border: "",
    tags: [
      {
        text: "text-tone1-600",
        bg: "from-tone1-600 to-tone1-400",
      },
    ],
  },
  {
    icon: {
      text: "text-tone2-600",
      bg: "bg-tone2-50",
    },
    bg: "",
    border: "",
    tags: [
      {
        text: "text-tone2-600",
        bg: "from-tone2-600 to-tone2-400",
      },
    ],
  },
  {
    icon: {
      text: "text-tone3-600",
      bg: "bg-tone3-50",
    },
    bg: "",
    border: "",
    tags: [
      {
        text: "text-tone3-600",
        bg: "from-tone3-600 to-tone3-400",
      },
    ],
  },
  {
    icon: {
      text: "text-tone4-600",
      bg: "bg-tone4-50",
    },
    bg: "",
    border: "",
    tags: [
      {
        text: "text-tone4-600",
        bg: "from-tone4-600 to-tone4-400",
      },
    ],
  },
];
