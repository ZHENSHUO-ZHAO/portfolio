import { useAboutPageContext } from "../../contexts/aboutContext";
import PageBase, { Section } from "../PageBase";
import { AboutPageHeader } from "./AboutPageHeader";
import Aim from "./Aim";
import Journey from "./Journey";
import Leisure from "./Leisure";
import Philosophy from "./Philosophy";

export default function About() {
  const content = useAboutPageContext();

  return (
    <PageBase
      content={content}
      headerElement={AboutPageHeader}
      headerClassName="pb-8"
    >
      <Section id="journey-heading" title="My Professional Journey">
        <Journey journey={content.journey} />
      </Section>

      <Section id="philosophy-heading" title="My Engineering Philosophy">
        <Philosophy philosophy={content.philosophy} />
      </Section>

      <Section id="aim-heading" title="What I'm Looking For">
        <Aim desc={content.aim.desc} roles={content.aim.roles} />
      </Section>

      <Section id="leisure-heading" title="Outside of Work">
        <Leisure desc={content.leisure.desc} tags={content.leisure.tags} />
      </Section>
    </PageBase>
  );
}
