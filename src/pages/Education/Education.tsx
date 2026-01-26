import LearningCardSection from "../../components/page/LearningCardSection";
import Page from "../../components/page/Page";
import PageHeader from "../../components/page/PageHeader";
import Section from "../../components/page/Section";
import { useEducationPageContext } from "../../contexts/educationContext";
import Foundation from "./Foundation";
import Timeline from "./Timeline";
// import PageBase, { Section } from "../PageBase";

export default function Education() {
  const content = useEducationPageContext();
  return (
    <Page
      headerComponent={
        <PageHeader header={content.header} stats={content.stats} />
      }
    >
      <Section
        id="education-overview-section"
        headingData={content.foundation.heading}
        bgChildren={<div className="size-full bg-color-invert" />}
        invertColor
      >
        <Foundation data={content.foundation.items} />
      </Section>

      <Section
        id="academic-timeline-section"
        headingData={content.timeline.heading}
        maxWidth="mx-auto max-w-4xl"
      >
        <Timeline data={content.timeline.items} />
      </Section>

      <LearningCardSection
        headingData={content.learning.heading}
        items={content.learning.items}
        id="learning-philosophy-section"
        invertColor
      />
    </Page>
  );
}
