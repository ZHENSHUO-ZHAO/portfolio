import { useExperiencePageContext } from "../../contexts/experienceContext";
import Page from "../../components/page/Page";
import Header from "../../components/page/Header";
import HeaderBackground from "../../components/page/HeaderBackground";
import Section from "../../components/page/Section";
import JobList from "./JobList";
import { routerHeight } from "../../components/router/PcRouter";
import useScrollToHash from "../../hooks/scrollToHashHook";

export default function Experience() {
  const content = useExperiencePageContext();
  useScrollToHash(routerHeight);

  return (
    <Page
      headerComponent={
        <Header data={content.header} bgChildren={<HeaderBackground />}>
          <ol className="flex flex-wrap gap-4 text-sm">
            {content.stats.map((s) => (
              <li className="flex gap-2 items-center text-muted" key={s.unit}>
                {s.icon && <s.icon />}
                <span>{`${s.amount} ${s.unit}`}</span>
              </li>
            ))}
          </ol>
        </Header>
      }
    >
      <Section
        id="career-timeline-section"
        headingData={content.career.heading}
        bgChildren={<div className="size-full bg-white" />}
        maxWidth="max-w-4xl lg:max-w-5xl xl:max-w-7xl"
      >
        <JobList data={content.career.items} />
      </Section>
    </Page>
  );
}
