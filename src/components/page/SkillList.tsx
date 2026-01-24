import BrandIcon from "./BrandIcon";

export default function SkillList({
  data,
  ulClassName,
  liClassName,
}: {
  data: string[];
  ulClassName: string;
  liClassName: string;
}) {
  return (
    <ul className={`flex flex-wrap ${ulClassName}`}>
      {data.map((s) => (
        <li key={s} className={`${liClassName}`}>
          <BrandIcon name={s} />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}
