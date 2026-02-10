import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type { Header, IconColor } from "../../contexts/pageContext";
import HybridStatement from "./HybridStatement";

export default function Header({
  data,
  children,
  bgChildren,
  tagColor = {
    text: "text-(--color-text-header-tag)",
    bg: "bg-(--color-bg-header-tag)",
    border: "border-(--color-border-header-tag)",
  },
  interactiveBg = false,
}: {
  data: Header;
  children?: ReactNode;
  bgChildren?: ReactNode;
  tagColor?: IconColor;
  interactiveBg?: boolean;
}) {
  return (
    <header className="relative mx-auto max-w-4xl">
      <FullBleedContainer interactive={interactiveBg}>
        {bgChildren}
      </FullBleedContainer>
      <div className="relative h-full pt-28 pb-12 md:pt-34 md:pb-16 lg:pt-40 lg:pb-20">
        <div
          className={`inline-flex gap-2 items-center px-4 py-1 ${tagColor.bg} border ${tagColor.border} rounded-full ${tagColor.text} text-xs md:text-sm font-semibold mb-6`}
        >
          <data.tag.icon aria-hidden="true" focusable="false" />
          {data.tag.text && <span>{data.tag.text}</span>}
        </div>
        <h1 className="mb-6">
          {data.hybridTitle ? (
            <HybridStatement data={data.hybridTitle} />
          ) : (
            data.title
          )}
        </h1>
        {data.statement.map((s, i) => {
          return (
            <p
              key={`p_${i}`}
              className={`${
                i === 0
                  ? "text-base md:text-xl lg:text-2xl"
                  : "text-sm md:text-lg lg:text-xl"
              } mb-8`}
            >
              <HybridStatement data={s} />
            </p>
          );
        })}
        {children}
      </div>
    </header>
  );
}
