import { useHomePageContext } from "../../contexts/homeContext";
import PageBase, { Section } from "../PageBase";
import Bio from "./Bio";
import Highlights from "./Highlights";
import HomePageHeader from "./HomePageHeader";
import Snapshots from "./Snapshots";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <Section
        id="highlights"
        title="Highlights"
        headingClassName="text-center"
      >
        <Highlights listData={content.highlight} />
      </Section>

      <Section id="snapshots" title="Snapshots" className="text-center">
        <Snapshots snapshot={content.snapshot} />
      </Section>

      <Section id="bio" title={content.bio.title} className="text-center">
        <Bio bio={content.bio.desc} />
      </Section>
    </PageBase>
  );
}
