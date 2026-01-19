import type { ReactNode } from "react";
import type { ContextPageBase, DescriptiveItem } from "../contexts/pageContext";
import React from "react";

export default function PageBase({
  content,
  headerElement,
  headerClassName,
  headerComponent,
  children,
}: {
  content: ContextPageBase;
  headerElement?: ({
    headingClassName,
  }: {
    headingClassName: string;
  }) => ReactNode;
  headerClassName?: string;
  headerComponent?: ReactNode;
  children: ReactNode;
}) {
  const headingClassName = "relative pb-2";

  return (
    <main className="grid grid-cols-1 mx-8 lg:mx-0 max-w-4xl">
      <header className={`relative pb-4 pt-30 ${headerClassName || ""}`}>
        {headerElement ? (
          headerElement({ headingClassName })
        ) : headerComponent ? (
          headerComponent
        ) : (
          <h1 className={headingClassName}>{content.pageTitle}</h1>
        )}
      </header>
      {children}
    </main>
  );
}

export function Section({
  id,
  title,
  children,
  headerChildren,
  headingClassName,
  childrenContainerClassName,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  headerChildren?: ReactNode;
  headingClassName?: string;
  childrenContainerClassName?: string;
  className?: string;
}) {
  const h2ClassName = `relative pb-2 mb-2 ${headingClassName || ""}`;

  return (
    <section
      className={`relative pb-10 ${className}`}
      aria-labelledby={id}
      id={id}
    >
      {/* <FullBleedContainer /> */}
      {headerChildren ? (
        <header className="relative">
          <h2 className={h2ClassName} id={id}>
            {title}
          </h2>
          {headerChildren}
        </header>
      ) : (
        <h2 className={h2ClassName} id={id}>
          {title}
        </h2>
      )}
      <div className={`relative ${childrenContainerClassName ?? ""}`}>
        {children}
      </div>
    </section>
  );
}

export function ArticleList({
  listData,
  ordered,
}: {
  listData: DescriptiveItem[];
  ordered?: boolean;
}) {
  return (
    <>
      {ordered ? (
        <ol className="space-y-2">
          <Articles listData={listData} />
        </ol>
      ) : (
        <ul className="space-y-2">
          <Articles listData={listData} />
        </ul>
      )}
    </>
  );
}

function Articles({ listData }: { listData: DescriptiveItem[] }) {
  return (
    <>
      {listData.map((data) => (
        <li key={data.title}>
          <article>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </article>
        </li>
      ))}
    </>
  );
}

export function ItemList({
  listData,
  ordered,
}: {
  listData: string[];
  ordered?: boolean;
}) {
  const containerStyle = "flex flex-row flex-wrap gap-x-2 gap-y-1 sm:gap-y-0";

  return (
    <>
      {ordered ? (
        <ol className={containerStyle}>
          <Items listData={listData} />
        </ol>
      ) : (
        <ul className={containerStyle}>
          <Items listData={listData} />
        </ul>
      )}
    </>
  );
}

function Items({ listData }: { listData: string[] }) {
  return (
    <>
      {listData.map((data) => (
        <li key={data}>{data}</li>
      ))}
    </>
  );
}
