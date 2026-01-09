import { useHomePageContext } from "../../contexts/homeContext";
import PageBase, { Section } from "../PageBase";
import Highlights from "./Highlights";
import HomePageHeader from "./HomePageHeader";
import Snapshots from "./Snapshots";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <Section id="highlights" title="Highlights">
        <Highlights listData={content.highlight} />
      </Section>

      <Section id="snapshots" title="Snapshots">
        <Snapshots snapshot={content.snapshot} />
      </Section>

      <Section id="bio" title="About me" headingClassName="sr-only">
        <p>{content.bio}</p>
      </Section>
    </PageBase>
  );
}
