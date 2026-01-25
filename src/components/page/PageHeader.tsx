import Header from "./Header";
import {
  type Header as HeaderType,
  type Stat,
} from "../../contexts/pageContext";
import HeaderBackground from "./HeaderBackground";

export default function PageHeader({
  header,
  stats,
}: {
  header: HeaderType;
  stats?: Stat[];
}) {
  return (
    <Header data={header} bgChildren={<HeaderBackground />}>
      <ol className="flex flex-wrap gap-4 text-sm">
        {stats &&
          stats.map((s) => (
            <li className="flex gap-2 items-center text-muted" key={s.unit}>
              {s.icon && <s.icon />}
              <span>{`${s.amount} ${s.unit}`}</span>
            </li>
          ))}
      </ol>
    </Header>
  );
}
