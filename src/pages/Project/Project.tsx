import { Outlet } from "react-router";
import Header from "../../components/page/Header";
import HeaderBackground from "../../components/page/HeaderBackground";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import { useProjectPageContext } from "../../contexts/projectContext";
import { routerHeight } from "../../components/router/PcRouter";
import useScrollToHash from "../../hooks/scrollToHashHook";
import CategoryNav from "./CategoryNav";
import { useRef } from "react";
import Impact from "./Impact";
import { CardSection } from "../../components/page/CardSection";

export default function Project() {
  const content = useProjectPageContext();
  useScrollToHash(routerHeight + 120);
  const ref = useRef<HTMLElement>(null);

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

      <CardSection
        id="collaborate-section"
        headingData={content.contact.heading}
        tagColor={{
          icon: "text-(--color-tone4-300)",
          text: "text-secondary",
          bg: "bg-white border-4 border-slate-100",
        }}
        links={content.contact.items}
      />
    </Page>
  );
}
