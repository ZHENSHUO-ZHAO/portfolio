import { Outlet } from "react-router";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import { useProjectPageContext } from "../../contexts/projectContext";
import { routerHeight } from "../../components/router/PcRouter";
import useScrollToHash from "../../hooks/scrollToHashHook";
import CategoryNav from "./CategoryNav";
import { useRef } from "react";
import Impact from "./Impact";
import { ContactCardSection } from "../../components/page/ContactCardSection";
import PageHeader from "../../components/page/PageHeader";

export default function Project() {
  const content = useProjectPageContext();
  useScrollToHash(routerHeight + 120);
  const ref = useRef<HTMLElement>(null);

  return (
    <Page
      headerComponent={
        <PageHeader header={content.header} stats={content.stats} />
      }
    >
      <Section
        ref={ref}
        id="projects-section"
        maxWidth="mx-auto max-w-4xl"
        bgChildren={<div className="size-full bg-color-normal" />}
        paddingY="pt-10 pb-16 md:pt-15 md:pb-20 lg:pt-15 lg:pb-24"
      >
        {/* Category switcher */}
        <CategoryNav data={content.projects} sectionRef={ref} />

        {/* Category content */}
        <Outlet />
      </Section>

      <Section
        id="project-impact-section"
        headingData={content.impact.heading}
        bgChildren={<div className="size-full bg-color-invert" />}
        invertColor
      >
        <Impact data={content.impact.items} />
      </Section>

      <ContactCardSection
        id="collaborate-section"
        headingData={content.contact.heading}
        links={content.contact.items}
        bgChildren={<div className="size-full dark:bg-slate-950" />}
      />
    </Page>
  );
}
