import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type { Heading as Heading, IconColor } from "../../contexts/pageContext";
import SectionHeading from "./SectionHeading";

export function CardSection({
  headingData,
  id,
  bgChildren,
  invertColor,
  showCard,
  tagColor,
  links,
}: {
  headingData: Heading;
  id: string;
  bgChildren?: ReactNode;
  invertColor?: boolean;
  showCard?: boolean;
  tagColor?: IconColor;
  links: Heading[];
}) {
  return (
    <section
      className="relative mx-auto max-w-4xl py-16 md:py-20 lg:py-24"
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      {showCard ? (
        <div className="relative w-full p-8 sm:p-16 rounded-2xl sm:rounded-3xl shadow-2xl bg-linear-to-br from-(--color-tone1-600) to-(--color-tone1-700)">
          <SectionHeading
            data={headingData}
            invertColor={invertColor}
            tagColor={tagColor}
            bottomMargin="mb-4 md:mb-10"
          />
          <ContactButtons links={links} invertColor={invertColor} />
        </div>
      ) : (
        <>
          <SectionHeading
            data={headingData}
            invertColor={invertColor}
            tagColor={tagColor}
            bottomMargin="mb-4 md:mb-10"
          />
          <ContactButtons links={links} invertColor={invertColor} />
        </>
      )}
    </section>
  );
}

function ContactButtons({
  links,
  invertColor,
}: {
  links: Heading[];
  invertColor?: boolean;
}) {
  const Icon1 = links[0].tag?.icon;
  const Icon2 = links[1].tag?.icon;

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm xs:text-base">
      <a
        href={`${links[0]}`}
        className={`px-8 py-4 ${invertColor ? "bg-white text-(--color-tone1-700)" : "text-white bg-(--color-tone1-600)"}  rounded-xl font-semibold flex gap-2 justify-center items-center`}
      >
        {Icon1 && <Icon1 />}
        {links[0].title}
      </a>
      <a
        href={`${links[1]}`}
        className={`px-8 py-4 bg-white/10 backdrop-blur-sm ${invertColor ? "text-white border-white/30" : "border-slate-200 text-secondary"} border-2 rounded-xl font-semibold flex gap-2 justify-center items-center`}
      >
        {Icon2 && <Icon2 />}
        {links[1].title}
      </a>
    </div>
  );
}
