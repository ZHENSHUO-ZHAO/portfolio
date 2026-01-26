import type { Degree } from "../../contexts/educationContext";
import type { CardColor } from "../../contexts/pageContext";

export default function Timeline({ data }: { data: Degree[] }) {
  return (
    <div className="relative space-y-8 md:space-y-12">
      {data.map((d, j) => {
        const color: CardColor = colors[j];

        return (
          <div
            key={d.university}
            className={`bg-linear-to-br ${color.bg} to-white border ${color.border} rounded-2xl md:rounded-3xl p-6 md:p-10 space-y-4 md:space-y-6`}
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
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">
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
                      className={`size-25 lg:size-27 px-4 py-2 bg-linear-to-r ${color.tags![0].bg} text-white rounded-full font-bold text-sm shadow-lg flex flex-col justify-center items-center shrink-0`}
                    >
                      <a.icon className="text-2xl text-center" />
                      <span>{a.abbrev || a.text}</span>
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
                  <p className="flex-1 text-slate-700 text-sm md:text-base">
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
    icon: { text: "text-tone1-700", bg: "bg-tone1-600" },
    bg: "from-tone1-50",
    border: "border-tone1-200",
    tags: [
      { text: "", bg: "from-tone1-600 to-tone1-700" },
      { text: "", bg: "", icon: "text-tone1-600" },
    ],
  },
  {
    icon: { text: "text-tone3-700", bg: "bg-tone3-600" },
    bg: "from-tone3-50",
    border: "border-tone3-200",
    tags: [
      { text: "", bg: "from-tone3-600 to-tone3-700" },
      { text: "", bg: "", icon: "text-tone3-600" },
    ],
  },
  {
    icon: { text: "text-tone5-700", bg: "bg-tone5-600" },
    bg: "from-tone5-50",
    border: "border-tone5-200",
    tags: [
      { text: "", bg: "from-tone5-600 to-tone5-700" },
      { text: "", bg: "", icon: "text-tone5-600" },
    ],
  },
];
