import { FaArrowRight } from "react-icons/fa6";
import type { Comparison } from "../../contexts/hobbyContext";
import type { CardColor } from "../../contexts/pageContext";
import HybridStatement from "../../components/page/HybridStatement";
import { motion } from "motion/react";
import { getMultipleRowAnimation } from "../../hooks/responsiveFadeInHook";

export default function Comparison({ data }: { data: Comparison }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:mx-8">
        {data.items.map((c, i) => {
          const Icon = c.tag!.icon;
          const color: CardColor = colors[i];

          return (
            <motion.div
              {...getMultipleRowAnimation()}
              key={c.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6">
                <div
                  className={`size-10 md:size-11 lg:size-12 ${color.icon.bg} rounded-lg md:rounded-xl flex items-center justify-center shrink-0`}
                >
                  <Icon className={`${color.icon.icon} text-lg md:text-xl`} />
                </div>
                <h3 className="font-bold text-white">{c.title}</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {c.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <FaArrowRight
                      className={`${color.tags![0].icon} mt-0.5 md:mt-1 shrink-0`}
                    />
                    <span className={`${color.tags![0].text}`}>{m}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        {...getMultipleRowAnimation()}
        className="mx-auto mt-8 md:mt-10 lg:mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 max-w-3xl flex items-start justify-center gap-2 md:gap-3 lg:gap-4"
      >
        <div className="size-12 md:size-13 lg:size-14 flex items-center justify-center shrink-0">
          <data.summary.icon className="text-coffee-50 text-4xl md:text-5xl lg:text-6xl origin-bottom-right scale-125 -translate-y-2/3 md:-translate-y-1/2 lg:-translate-y-1/3" />
        </div>
        <p className="text-sm md:text-lg lg:text-xl text-amber-100">
          {typeof data.summary.text === "object" && (
            <HybridStatement data={data.summary.text} />
          )}
        </p>
      </motion.div>
    </>
  );
}

const colors: CardColor[] = [
  {
    icon: {
      icon: "text-amber-400",
      bg: "bg-amber-500/20",
      text: "",
    },
    bg: "",
    border: "",
    tags: [{ icon: "text-amber-400", bg: "", text: "text-amber-100" }],
  },
  {
    icon: {
      icon: "text-cyan-400",
      bg: "bg-cyan-500/20",
      text: "",
    },
    bg: "",
    border: "",
    tags: [{ icon: "text-cyan-400", bg: "", text: "text-cyan-100" }],
  },
];
