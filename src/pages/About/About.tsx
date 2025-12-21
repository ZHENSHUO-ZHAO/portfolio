import { useAboutPageContext } from "../../contexts/aboutContext";
import PageBase, { ArticleList, Section } from "../PageBase";

export default function About() {
  const content = useAboutPageContext();

  return (
    <PageBase
      content={content}
      headerElement={AboutPageHeader}
      headerClassName="mb-8"
    >
      <Section id="strength-heading" title="My strongest work combines:">
        <ul>
          {content.strength.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section id="journey-heading" title="My Professional Journey">
        <ArticleList listData={content.journey} ordered />
      </Section>

      <Section id="philosophy-heading" title="My Engineering Philosophy">
        <ArticleList listData={content.philosophy} />
      </Section>

      <Section id="aim-heading" title="What I'm Looking For">
        <p>{content.aim.desc}</p>
        <ul>
          {content.aim.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>

      <Section id="leisure-heading" title="Outside of Work">
        <p>{content.leisure}</p>
      </Section>
    </PageBase>
  );
}

function AboutPageHeader(headingClassName: string) {
  const content = useAboutPageContext();

  return (
    <>
      <h1 className={headingClassName}>{content.pageTitle}</h1>
      <p>{content.introduction} </p>
    </>
  );
}
