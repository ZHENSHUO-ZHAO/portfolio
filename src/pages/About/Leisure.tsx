import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Leisure({
  details,
  items,
}: {
  details: string;
  items: Heading[];
}) {
  return (
    <div className="relative rounded-3xl bg-white p-12 border-slate-200 shadow-xl xl:mx-8">
      <p className="text-lg text-slate-700 leading-relaxed mb-8">{details}</p>
      <ul className="grid grid-cols-1 min-[400px]:grid-cols-2 min-[860px]:grid-cols-4 gap-3 md:gap-4 justify-center">
        {items.map((l, i) => (
          <LeisureItem key={l.title} data={l} color={cardColors[i]} />
        ))}
      </ul>
    </div>
  );
}

function LeisureItem({ data, color }: { data: Heading; color: CardColor }) {
  return (
    <li
      className={`${color.bg} border ${color.border} flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-xl`}
    >
      {data.tag && data.tag.icon && (
        <data.tag.icon
          className={`flex-none text-base md:text-xl ${color.icon.text}`}
        />
      )}
      <span className={`text-xs xs:text-base font-semibold ${color.icon.bg}`}>
        {data.title}
      </span>
    </li>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      text: "text-amber-600",
      bg: "text-amber-900",
    },
    bg: "bg-gradient-to-r from-amber-50 to-amber-100",
    border: "border-amber-200",
  },
  {
    icon: {
      text: "text-orange-600",
      bg: "text-orange-900",
    },
    bg: "bg-gradient-to-r from-orange-50 to-orange-100",
    border: "border-orange-200",
  },
  {
    icon: {
      text: "text-(--color-tone1-600)",
      bg: "text-(--color-tone1-900)",
    },
    bg: "bg-gradient-to-r from-(--color-tone1-50) to-(--color-tone1-100)",
    border: "border-(--color-tone1-200)",
  },
  {
    icon: {
      text: "text-(--color-tone5-600)",
      bg: "text-(--color-tone5-900)",
    },
    bg: "bg-gradient-to-r from-(--color-tone5-50) to-(--color-tone5-100)",
    border: "border-(--color-tone5-200)",
  },
];
