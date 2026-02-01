import { ContactCardSection } from "../../components/page/ContactCardSection";
import Page from "../../components/page/Page";
import Section from "../../components/page/Section";
import { useHobbyPageContext } from "../../contexts/hobbyContext";
import Certification from "./Certification";
import Comparison from "./Comparison";
import Connection from "./Connection";
import ExplainSection from "./ExplainSection";
import Gallery from "./Gallery";
import HobbyPageHeader from "./HobbyPageHeader";

export default function Hobby() {
  const content = useHobbyPageContext();

  return (
    <Page headerComponent={<HobbyPageHeader header={content.header} />}>
      <ExplainSection
        data={content.craft}
        id="coffee-intro-section"
        imagePosition="left"
      />

      <Section
        id="sca-certification-section"
        headingData={content.certification.heading}
        bgChildren={
          <div className="size-full bg-linear-to-br from-coffee-800 via-coffee-700 to-amber-900" />
        }
        invertColor={{ title: "text-white", desc: "text-amber-100" }}
        tagColor={{
          icon: "text-amber-200",
          text: "text-amber-200",
          bg: "bg-white/10",
          border: "border-amber-100/10",
        }}
      >
        <Certification data={content.certification.items} />
      </Section>

      <Section
        id="connection-section"
        headingData={content.connection.heading}
        bgChildren={<div className="size-full bg-amber-50" />}
        tagColor={{
          icon: "text-coffee-700",
          text: "text-coffee-700",
          bg: "bg-amber-100",
          border: "border-amber-200",
        }}
      >
        <Connection data={content.connection.items} />
      </Section>

      <ExplainSection
        data={content.exploration}
        id="coffee-scene-exploration-section"
        imagePosition="right"
      />

      <Section
        id="coffee-and-engineering-section"
        headingData={content.comparison.heading}
        bgChildren={
          <div className="size-full bg-linear-to-br from-slate-900 to-coffee-800" />
        }
        invertColor={{ title: "text-white", desc: "text-amber-100" }}
      >
        <Comparison data={content.comparison} />
      </Section>

      <Section
        id="hobby-gallery-section"
        headingData={content.gallery.heading}
        bgChildren={<div className="size-full bg-amber-50" />}
      >
        <Gallery data={content.gallery.items} />
      </Section>

      <ContactCardSection
        id="contact-section"
        headingData={content.contact.heading}
        links={content.contact.items}
        tagColor={{
          icon: "text-coffee-700",
          text: "text-coffee-600",
          bg: "bg-white border-4 border-amber-100",
        }}
        buttonsColor={[
          {
            text: "text-white",
            bg: "bg-coffee-600 hover:bg-coffee-500 active:bg-coffee-500",
            shadow:
              "shadow-coffee-700/20 hover:shadow-coffee-600/20 active:shadow-coffee-600/20",
          },
          {
            text: "text-secondary",
            bg: "bg-slate-50 hover:bg-white active:bg-white",
            border: "border-slate-200",
          },
        ]}
      />
    </Page>
  );
}
