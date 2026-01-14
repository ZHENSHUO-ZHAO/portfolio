import { CalendarCog } from "lucide-react";

export default function Aim({
  desc,
  roles,
}: {
  desc: string;
  roles: string[];
}) {
  return (
    <>
      <p className="text-muted pb-4">{desc}</p>
      <ul className="grid grid-cols-1 min-[430px]:grid-cols-2 min-[622px]:grid-cols-3 gap-4">
        {roles.map((r) => (
          <li
            key={r}
            className="p-5 bg-slate-200 border border-slate-300 rounded-lg space-y-2"
          >
            <div className="size-8 bg-sky-700 rounded-lg flex justify-center items-center">
              <CalendarCog className="stroke-white size-5" />
            </div>
            <span className="block font-semibold">{r}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
