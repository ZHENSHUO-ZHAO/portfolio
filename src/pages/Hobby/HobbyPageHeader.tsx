import Header from "../../components/page/Header";
import HeaderBackground from "../../components/page/HeaderBackground";
import type { HobbyHeader } from "../../contexts/hobbyContext";

export default function HobbyPageHeader({ header }: { header: HobbyHeader }) {
  return (
    <Header
      data={header}
      bgChildren={
        <HeaderBackground
          colors={["bg-amber-200/30", "bg-orange-200/30", "bg-yellow-200/20"]}
        />
      }
      tagColor={{
        text: "text-coffee-700",
        bg: "bg-amber-100",
        border: "border-amber-200",
      }}
    >
      <p className="text-sm md:text-lg lg:text-xl text-slate-600 mb-4 md:mb-8">
        {header.interestHeading}
      </p>
      <ol className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
        {header.interest.map((i, j) => (
          <li
            key={`interest${j}`}
            className="flex gap-1 md:gap-2 items-center flex-wrap px-3 md:px-5 py-2 bg-white border-2 border-coffee-200 rounded-lg md:rounded-xl text-coffee-700 font-semibold text-sm md:text-base shadow-sm"
          >
            {i.icon && <i.icon />}
            <span>{i.text}</span>
          </li>
        ))}
      </ol>
    </Header>
  );
}
