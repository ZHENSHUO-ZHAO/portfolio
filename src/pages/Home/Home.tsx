import { ContactCardSection } from "../../components/page/ContactCardSection";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import { useHomePageContext } from "../../contexts/homeContext";
import Bio from "./Bio";
import Highlights from "./Highlights";
import HomePageHeader from "./HomePageHeader";
import Snapshots from "./Snapshots";

export default function Home() {
  const content = useHomePageContext();

  return (
    <Page headerComponent={<HomePageHeader data={content.header} />}>
      <Section
        id="project-highlight-section"
        headingData={content.highlight.heading}
        maxWidth="mx-auto max-w-4xl"
        tagColor={{
          icon: "text-cyan-700 dark:text-cyan-400",
          bg: "bg-cyan-50 dark:bg-cyan-500/20",
          text: "text-cyan-700 dark:text-cyan-400",
          border: "border-cyan-100 dark:border-cyan-500/30",
        }}
      >
        <Highlights data={content.highlight.items} />
      </Section>

      <Section
        id="career-snapshot-section"
        headingData={content.snapshot.heading}
        bgChildren={<div className="size-full bg-color-invert" />}
        invertColor
        tagColor={{
          icon: "text-white",
          bg: "bg-white/10 backdrop-blur-sm",
          text: "text-white",
          border: "border-white/20",
        }}
      >
        <Snapshots data={content.snapshot.items} />
      </Section>

      <Section
        id="quick-introduction-section"
        headingData={content.bio.heading}
        maxWidth="mx-auto max-w-4xl"
        tagColor={{
          icon: "text-sky-700 dark:text-sky-400",
          bg: "bg-sky-50 dark:bg-sky-500/20",
          text: "text-sky-700  dark:text-sky-400",
          border: "border-sky-100 dark:border-sky-500/30",
        }}
      >
        <Bio data={content.bio.intro} />
      </Section>

      <ContactCardSection
        id="collaborate-section"
        headingData={content.contact.heading}
        invertColor
        tagColor={{
          icon: "text-white",
          text: "text-white",
          bg: "bg-white/20",
        }}
        links={content.contact.items}
        bgChildren={
          <div className="size-full bg-linear-to-br from-cyan-50 to-slate-50 dark:from-sky-950 dark:to-slate-950" />
        }
      />
    </Page>
  );
}
