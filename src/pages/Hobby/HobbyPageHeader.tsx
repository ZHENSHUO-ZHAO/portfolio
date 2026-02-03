import Header from "../../components/page/Header";
import HeaderBackground from "../../components/page/HeaderBackground";
import type { HobbyHeader } from "../../contexts/hobbyContext";

export default function HobbyPageHeader({ header }: { header: HobbyHeader }) {
  return (
    <Header
      data={header}
      bgChildren={
        <HeaderBackground
          colors={[
            "bg-amber-200/30 dark:bg-amber-500/10",
            "bg-orange-200/30 dark:bg-orange-500/10",
            "bg-yellow-200/20 dark:bg-yellow-500/10",
          ]}
        />
      }
      tagColor={{
        text: "text-coffee-700 dark:text-amber-400",
        bg: "bg-amber-100 dark:bg-amber-500/20",
        border: "border-amber-200 dark:border-amber-500/30",
      }}
    >
      <p className="text-sm md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-4 md:mb-8">
        {header.interestHeading}
      </p>
      <ol className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
        {header.interest.map((i, j) => (
          <li
            key={`interest${j}`}
            className="flex gap-1 md:gap-2 items-center flex-wrap px-3 md:px-5 py-2 bg-white dark:bg-slate-800/50 border-2 border-coffee-200 dark:border-amber-500/30 rounded-lg md:rounded-xl text-coffee-700 dark:text-amber-400 font-semibold text-sm md:text-base shadow-sm dark:shadow-coffee-500"
          >
            {i.icon && <i.icon />}
            <span>{i.text}</span>
          </li>
        ))}
      </ol>
    </Header>
  );
}
