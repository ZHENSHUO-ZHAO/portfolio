import { useHomePageContext } from "../../contexts/homeContext";
import PageBase, { ArticleList, Section } from "../PageBase";
import HomePageHeader from "./HomePageHeader";

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
