import type { ReactNode } from "react";
import type { ContextPageBase } from "../contexts/pageContext";
import { h1Style, h2Style, h3Style } from "../utils/util";

export default function PageBase({
  content,
  headerElement,
  headerClassName,
  children,
}: {
  content: ContextPageBase;
  headerElement?: (headingClassName: string) => ReactNode;
  headerClassName?: string;
  children: ReactNode;
}) {
  const headingClassName = `${h1Style} mb-2`;
  return (
    <main className="px-4">
      <header className={`mb-2 ${headerClassName || ""}`}>
        {headerElement ? (
          headerElement(headingClassName)
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
}: {
  id: string;
  title: string;
  children: ReactNode;
  headerChildren?: ReactNode;
  headingClassName?: string;
}) {
  const h2ClassName = `${h2Style} mb-2 ${headingClassName || ""}`;

  return (
    <section
      className="mb-10 text-sm leading-relaxed sm:text-base sm:leading-loose"
      aria-labelledby={id}
    >
      {headerChildren ? (
        <header>
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

      {children}
    </section>
  );
}

export function ArticleList({
  listData,
  ordered,
}: {
  listData: { title: string; desc: string }[];
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

function Articles({
  listData,
}: {
  listData: { title: string; desc: string }[];
}) {
  return (
    <>
      {listData.map((data) => (
        <li key={data.title}>
          <article>
            <h3 className={h3Style}>{data.title}</h3>
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
