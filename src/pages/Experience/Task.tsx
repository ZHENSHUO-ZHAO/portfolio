import { FaCheck } from "react-icons/fa6";
import type { CardColor } from "../../contexts/pageContext";

export default function Task({
  tasks,
  color,
}: {
  tasks: string[];
  color: CardColor;
}) {
  return (
    <ul className="relative space-y-2 md:space-y-3 mb-4 md:mb-6">
      {tasks.map((t) => (
        <li
          key={t}
          className="flex items-start gap-3 text-neutral-700 dark:text-secondary"
        >
          <div
            aria-hidden="true"
            role="presentation"
            tabIndex={-1}
            className="mt-1 text-sm md:text-base"
          >
            <FaCheck className={`${color.tags && color.tags[0].text}`} />
          </div>
          <span className="block">{t}</span>
        </li>
      ))}
    </ul>
  );
}
