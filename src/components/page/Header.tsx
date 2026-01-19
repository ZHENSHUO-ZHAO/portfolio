import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type { Header } from "../../contexts/pageContext";
import React from "react";

export default function Header({
  data,
  children,
  bgChildren,
}: {
  data: Header;
  children?: ReactNode;
  bgChildren?: ReactNode;
}) {
  return (
    <header className="relative mx-auto max-w-4xl">
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      <div className="relative h-full pt-28 pb-12 md:pt-34 md:pb-16 lg:pt-40 lg:pb-20">
        <div
          className={`inline-flex gap-2 items-center px-4 py-1 bg-(--color-bg-header-tag)/90 border border-(--color-border-header-tag) rounded-full text-(--color-text-header-tag) text-xs md:text-sm font-semibold mb-6`}
        >
          <data.tag.icon aria-hidden="true" focusable="false" />
          {data.tag.text && <span>{data.tag.text}</span>}
        </div>
        <h1 className="mb-6">{data.title}</h1>
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
              {s.map((chunk, j) =>
                chunk.style ? (
                  <span key={`s_${j}`} className={chunk.style}>
                    {chunk.text}
                  </span>
                ) : (
                  <React.Fragment key={`s_${j}`}>{chunk.text}</React.Fragment>
                )
              )}
            </p>
          );
        })}
        {children}
      </div>
    </header>
  );
}
