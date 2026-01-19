import { CardSection } from "../../components/page/CardSection";
import { FourHorizontalCards } from "../../components/page/FourHorizontalCards";
import Header from "../../components/page/Header";
import HeaderBackground from "../../components/page/HeaderBackground";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import { useAboutPageContext } from "../../contexts/aboutContext";
import Aim from "./Aim";
import Journey from "./Journey";
import Leisure from "./Leisure";
// import Philosophy from "./Philosophy";
// import Strength from "./Strength";

export default function About() {
  const content = useAboutPageContext();

  return (
    <Page
      headerComponent={
        <Header data={content.header} bgChildren={<HeaderBackground />} />
      }
    >
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
          <div className="size-full bg-linear-to-br from-white via-slate-50 to-(--color-tone3-50)" />
        }
      >
        <Leisure
          details={content.leisure.details}
          items={content.leisure.items}
        />
      </Section>

      <CardSection
        id="collaborate-section"
        headingData={content.contact.heading}
        invertColor
        showCard
        tagColor={{
          icon: "text-(--color-tone4-300)",
          text: "text-white",
          bg: "bg-white/20",
        }}
        links={content.contact.items}
      >
        {/* <Journey data={content.journey.items} /> */}
        <div></div>
      </CardSection>

      {/* <Section id="journey-heading" title="My Professional Journey">
        <Journey journey={content.journey} />
      </Section>

      <Section id="philosophy-heading" title="My Engineering Philosophy">
        <Philosophy philosophy={content.philosophy} />
      </Section>

      <Section id="aim-heading" title="What I'm Looking For">
        <Aim desc={content.aim.desc} roles={content.aim.roles} />
      </Section>

      <Section id="leisure-heading" title="Outside of Work">
        <Leisure desc={content.leisure.desc} tags={content.leisure.tags} />
      </Section> */}
    </Page>
  );
}
