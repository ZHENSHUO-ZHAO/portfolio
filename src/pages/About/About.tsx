import { ContactCardSection } from "../../components/page/ContactCardSection";
import { FourHorizontalCards } from "../../components/page/FourHorizontalCards";
import Page from "../../components/page/Page";
import PageHeader from "../../components/page/PageHeader";
import Section from "../../components/page/Section";
import { useAboutPageContext } from "../../contexts/aboutContext";
import Aim from "./Aim";
import Journey from "./Journey";
import Leisure from "./Leisure";

export default function About() {
  const content = useAboutPageContext();

  return (
    <Page headerComponent={<PageHeader header={content.header} />}>
      <Section
        id="strengths-section"
        headingData={content.strength.heading}
        bgChildren={<div className="size-full bg-white" />}
      >
        <FourHorizontalCards data={content.strength.items} />
      </Section>

      <Section
        id="journey-section"
        headingData={content.journey.heading}
        maxWidth="mx-auto max-w-4xl"
        bgChildren={<div className="size-full bg-color-normal" />}
      >
        <Journey data={content.journey.items} />
      </Section>

      <Section
        id="philosophy-section"
        headingData={content.philosophy.heading}
        bgChildren={<div className="size-full bg-white" />}
      >
        <FourHorizontalCards data={content.philosophy.items} />
      </Section>

      <Section
        id="aim-section"
        headingData={content.aim.heading}
        bgChildren={<div className="size-full bg-color-invert" />}
        invertColor
      >
        <Aim data={content.aim.items} />
      </Section>

      <Section
        id="leisure-section"
        headingData={content.leisure.heading}
        bgChildren={
          <div className="size-full bg-linear-to-br from-white via-slate-50 to-tone3-50" />
        }
      >
        <Leisure
          details={content.leisure.details}
          items={content.leisure.items}
        />
      </Section>

      <ContactCardSection
        id="collaborate-section"
        headingData={content.contact.heading}
        invertColor
        links={content.contact.items}
      />
    </Page>
  );
}
