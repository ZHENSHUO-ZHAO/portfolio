import type { Stat } from "../../contexts/pageContext";

export default function Impact({ data }: { data: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {data.map((d, i) => (
        <div
          key={d.unit}
          className="bg-white/5 hover:bg-white/15 active:bg-white/15 transition duration-300 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 text-center"
        >
          <div
            className={`text-3xl md:text-5xl font-extrabold ${numberColors[i]} mb-1 md:mb-2`}
          >
            {d.amount}
          </div>
          <p className="text-slate-300 font-medium text-sm md:text-base">
            {d.unit}
          </p>
        </div>
      ))}
    </div>
  );
}

const numberColors: string[] = [
  "text-tone1-400",
  "text-tone2-400",
  "text-tone3-400",
  "text-tone4-400",
];
