import { NavLink } from "react-router";
import { useHomePageContext } from "../../contexts/homeContext";
import PageBase, { ArticleList, Section } from "../PageBase";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <Section id="highlights" title="Highlights">
        <ArticleList listData={content.highlight} />
      </Section>

      <Section id="snapshots" title="Snapshots">
        <ul className="space-y-2">
          {content.snapshot.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section id="bio" title="About me" headingClassName="sr-only">
        <p>{content.bio}</p>
      </Section>
    </PageBase>
  );
}

function HomePageHeader() {
  const content = useHomePageContext();

  return (
    <div className="h-screen flex flex-col gap-7 justify-center items-center">
      <h1 className="text-3xl font-bold font-display tracking-tight leading-[1.05] sm:text-5xl lg:text-6xl">
        {content.name}
      </h1>
      <ul
        aria-label="Professional roles"
        className="flex flex-row flex-wrap gap-x-2 gap-y-0 justify-center"
      >
        {content.roles.map((r) => (
          <li
            key={r}
            className="whitespace-nowrap text-base font-medium leading-snug lg:text-lg"
          >
            {r}
          </li>
        ))}
      </ul>
      <ul className="w-full flex flex-col gap-4 items-center text-base text-slate-800">
        <li>
          <NavLink to="/project">View My Projects</NavLink>
        </li>
        <li>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
      <p className="text-base text-center max-w-prose lg:text-lg">
        {content.statement}
      </p>
    </div>
  );
}
