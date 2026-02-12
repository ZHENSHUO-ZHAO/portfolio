import { useExperiencePageContext } from "../../contexts/experienceContext";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import JobList from "./JobList";
import { routerHeight } from "../../components/router/PcRouter";
import useScrollToHash from "../../hooks/scrollToHashHook";
import PageHeader from "../../components/page/PageHeader";
import WavyParallax from "../../components/backgroundFx/WavyParallax";

export default function Experience() {
  const content = useExperiencePageContext();
  useScrollToHash(routerHeight);

  return (
    <Page
      id={content.pageId}
      headerComponent={
        <PageHeader header={content.header} stats={content.stats} />
      }
    >
      <Section
        id="career-timeline-section"
        headingData={content.career.heading}
        bgChildren={<WavyParallax />}
        maxWidth="lg:mx-8 xl:mx-0"
      >
        <JobList data={content.career.items} />
      </Section>
    </Page>
  );
}
