import { useExperiencePageContext } from "../../contexts/experienceContext";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import JobList from "./JobList";
import { routerHeight } from "../../components/router/PcRouter";
import useScrollToHash from "../../hooks/scrollToHashHook";
import PageHeader from "../../components/page/PageHeader";

export default function Experience() {
  const content = useExperiencePageContext();
  useScrollToHash(routerHeight);

  return (
    <Page
      headerComponent={
        <PageHeader header={content.header} stats={content.stats} />
      }
    >
      <Section
        id="career-timeline-section"
        headingData={content.career.heading}
        bgChildren={<div className="size-full bg-white" />}
        maxWidth="lg:mx-8 xl:mx-0"
      >
        <JobList data={content.career.items} />
      </Section>
    </Page>
  );
}
