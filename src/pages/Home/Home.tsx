import { useContext } from "react";
import ColorBends from "../../components/backgroundFx/ColorBends";
import { ContactCardSection } from "../../components/page/ContactCardSection";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import { useHomePageContext } from "../../contexts/homeContext";
import Bio from "./Bio";
import Highlights from "./Highlights";
import HomePageHeader from "./HomePageHeader";
import Snapshots from "./Snapshots";
import { ThemeContext } from "../../contexts/themeContext";
import { SettingContext } from "../../contexts/settingContext";

export default function Home() {
  const content = useHomePageContext();
  const theme = useContext(ThemeContext);
  const { deviceWidth } = useContext(SettingContext);

  return (
    <Page
      headerComponent={
        <HomePageHeader
          data={content.header}
          bgChildren={
            <div className="size-full opacity-40 dark:opacity-60">
              <ColorBends
                colors={
                  theme.darkMode
                    ? ["#0295b3", "#02b3a7", "#02b378"]
                    : ["#00b1cc", "#00bdaa", "#00d97b"]
                }
                warpStrength={0.95}
                noise={0}
                transparent
                autoRotate={3}
                scale={deviceWidth.pixel >= 640 ? 1 : 0.5}
                usePreliminaryAlpha={theme.darkMode}
              />
            </div>
          }
        />
      }
    >
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
          icon: {
            icon: "text-white",
            text: "text-white",
            bg: "bg-white/10",
          },
          border: "border-white/30",
          bg: "",
        }}
        links={content.contact.items}
        bgChildren={
          <div className="size-full bg-linear-to-br from-cyan-50 to-slate-50 dark:from-sky-950 dark:to-slate-950" />
        }
      />
    </Page>
  );
}
