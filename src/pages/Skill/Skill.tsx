import { ContactCardSection } from "../../components/page/ContactCardSection";
import LearningCardSection from "../../components/page/LearningCardSection";
import Page from "../../components/page/Page";
import PageHeader from "../../components/page/PageHeader";
import Section from "../../components/page/Section";
import { useSkillPageContext, type Skill } from "../../contexts/skillContext";
import Competency from "./Competency";
import Evolution from "./Evolution";
import Overview from "./Overview";
import Stack from "./Stack";

export default function Skill() {
  const content = useSkillPageContext();

  return (
    <Page
      id={content.pageId}
      headerComponent={
        <PageHeader header={content.header} stats={content.stats} />
      }
    >
      <Section
        id="skill-overview-section"
        headingData={content.overview.heading}
        bgChildren={<div className="size-full bg-color-invert" />}
        invertColor
      >
        <Overview data={content.overview.items} />
      </Section>

      <Section
        id="technical-proficiencies-section"
        headingData={content.stacks.heading}
        maxWidth="mx-auto max-w-4xl"
        bgChildren={<div className="size-full dark:bg-slate-950" />}
      >
        <Stack data={content.stacks.items} />
      </Section>

      <Section
        id="core-competencies-section"
        headingData={content.competency.heading}
        maxWidth="mx-auto max-w-4xl"
        bgChildren={
          <div className="size-full bg-slate-100 dark:bg-slate-900" />
        }
      >
        <Competency data={content.competency.items} />
      </Section>

      <Section
        id="skill-evolution-section"
        headingData={content.evolution.heading}
        bgChildren={<div className="size-full dark:bg-slate-950" />}
      >
        <Evolution data={content.evolution.items} />
      </Section>

      <LearningCardSection
        headingData={content.learning.heading}
        items={content.learning.items}
        bgChildren={
          <div className="size-full bg-linear-to-br from-tone1-100/20 dark:from-tone1-950/20 to-tone5-100/20 dark:to-tone1-950/20" />
        }
        id="continuous-learning-section"
      />

      <ContactCardSection
        id="collaborate-section"
        headingData={content.contact.heading}
        links={content.contact.items}
        bgChildren={<div className="size-full dark:bg-slate-950" />}
      />
    </Page>
  );
}
