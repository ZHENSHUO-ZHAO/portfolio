import type { CardColor } from "../../contexts/pageContext";
import getBrandIcon from "../../utils/brands";

export default function Skill({
  data,
  color,
}: {
  data: string[];
  color: CardColor;
}) {
  return (
    <ul className="flex flex-wrap gap-1.5 md:gap-2">
      {data.map((s) => (
        <li
          key={s}
          className={`px-2 md:px-3 py-1 ${color.bg} ${color.tags && color.tags[2].text} text-xs font-medium rounded-full border ${color.tags && color.tags[2].border} flex justify-center items-center gap-1.5`}
        >
          <BrandIcon name={s} />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

function BrandIcon({ name }: { name: string }) {
  const Icon = getBrandIcon(name);
  return Icon ? (
    // eslint-disable-next-line react-hooks/static-components
    <Icon className="" aria-hidden="true" focusable="false" />
  ) : null;
}
