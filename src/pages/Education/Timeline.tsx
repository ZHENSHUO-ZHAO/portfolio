import { motion, MotionConfig } from "motion/react";
import type { Degree } from "../../contexts/educationContext";
import type { CardColor } from "../../contexts/pageContext";
import { rightAnim_8px, transition } from "../../utils/constants";

export default function Timeline({ data }: { data: Degree[] }) {
  return (
    <div className="relative space-y-8 md:space-y-12">
      {data.map((d, j) => {
        const color: CardColor = colors[j];

        return (
          <div
            key={d.university}
            className={`bg-linear-to-br ${color.bg} to-white dark:to-slate-900 border ${color.border} rounded-2xl md:rounded-3xl p-6 md:p-10 space-y-4 md:space-y-6
            ${rightAnim_8px} hover:shadow-lg active:shadow-lg ${color.shadow} ${transition}`}
          >
            {/* Heading Section */}
            <div className="flex items-start justify-between gap-4">
              {/* Heading */}
              <div className="flex-1">
                <div
                  className={`inline-block px-3 py-1 ${color.icon!.bg} text-white text-xs font-bold rounded-full mb-3`}
                >
                  {d.time}
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-2">
                  {d.qualification}
                </h3>
                <p
                  className={`text-base md:text-xl ${color.icon!.text} font-semibold`}
                >
                  {d.university}
                </p>
              </div>

              {/* Circle Achievement Tags */}
              {d.achievements && (
                <div className="hidden md:flex md:gap-4">
                  {d.achievements.map((a, i) => (
                    <div
                      key={`circle-tag-${i}`}
                      className={`relative size-25 lg:size-27 px-4 py-2 text-white font-bold text-sm flex flex-col justify-center items-center shrink-0`}
                    >
                      <MotionConfig
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className={`absolute -inset-1 rounded-full bg-black/50 ${color.tags![0].shadow}`}
                          animate={{
                            translateX: ["3px", "6px", "3px"],
                            translateY: ["3px", "6px", "3px"],
                            opacity: [0, 100, 0],
                            filter: ["blur(2px)", "blur(8px)", "blur(2px)"],
                          }}
                        />
                        <motion.div
                          className={`absolute inset-0 bg-linear-to-br ${color.tags![0].bg} rounded-full`}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                        />
                      </MotionConfig>
                      <a.icon className="relative text-2xl text-center" />
                      <span className="relative">{a.abbrev || a.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Long Achievement Tags Sections */}
            {d.achievements && (
              <div className="flex items-center gap-4 md:hidden">
                {d.achievements.map((a, i) => (
                  <div
                    key={`square-tag-${i}`}
                    className={`px-3 md:px-4 py-2 bg-linear-to-r ${color.tags![0].bg} text-white rounded-xl font-bold shadow-lg flex gap-1 md:gap-2 items-center text-xs md:text-sm`}
                  >
                    <a.icon />
                    <p className="text-white font-bold">{a.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Details Section */}
            <div className="space-y-2">
              {d.details.map((dt) => (
                <div
                  key={dt.text!}
                  className="flex items-start gap-2 md:gap-3 rounded-lg"
                >
                  <dt.icon
                    className={`${color.tags![1].icon} text-base md:text-lg mt-0.5 md:mt-1`}
                  />
                  <p className="flex-1 text-muted text-sm md:text-base">
                    {dt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const colors: CardColor[] = [
  {
    icon: { text: "text-tone1-700 dark:text-tone1-400", bg: "bg-tone1-600" },
    bg: "from-tone1-50 dark:from-slate-800",
    border: "border-tone1-200/50 dark:border-tone1-800/50",
    shadow: "dark:shadow-tone1-600/60",
    tags: [
      {
        text: "",
        bg: "from-tone1-600 to-tone1-700",
        shadow: "dark:bg-tone1-800",
      },
      { text: "", bg: "", icon: "text-tone1-600 dark:text-tone1-500" },
    ],
  },
  {
    icon: { text: "text-tone3-700 dark:text-tone3-400", bg: "bg-tone3-600" },
    bg: "from-tone3-50 dark:from-slate-800",
    border: "border-tone3-200/50 dark:border-tone3-800/50",
    shadow: "dark:shadow-tone3-600/60",
    tags: [
      {
        text: "",
        bg: "from-tone3-600 to-tone3-700",
        shadow: "dark:bg-tone3-800",
      },
      { text: "", bg: "", icon: "text-tone3-600 dark:text-tone3-500" },
    ],
  },
  {
    icon: { text: "text-tone5-700 dark:text-tone5-400", bg: "bg-tone5-600" },
    bg: "from-tone5-50 dark:from-slate-800",
    border: "border-tone5-200/50 dark:border-tone5-800/50",
    shadow: "dark:shadow-tone5-600/60",
    tags: [
      {
        text: "",
        bg: "from-tone5-600 to-tone5-700",
        shadow: "dark:bg-tone5-800",
      },
      { text: "", bg: "", icon: "text-tone5-600 dark:text-tone5-500" },
    ],
  },
];
