export default function Task({
  tasks,
  headingStyle,
}: {
  tasks: string[];
  headingStyle: string;
}) {
  return (
    <div>
      <h3 className={`${headingStyle}`}>Achievements</h3>
      <ul>
        {tasks.map((t) => (
          <li key={t} className="flex items-start gap-2 text-neutral-600">
            <div
              aria-hidden="true"
              role="presentation"
              tabIndex={-1}
              className="flex-none relative h-full w-1 text-transparent"
            >
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1  bg-muted rounded-full drop-shadow-xs drop-shadow-muted" />
              A
            </div>
            <span className="block">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
