import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type {
  ContactButtonInfo,
  Heading as Heading,
  IconColor,
} from "../../contexts/pageContext";
import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export function ContactCardSection({
  headingData,
  id,
  bgChildren,
  invertColor,
  links,
  tagColor,
  buttonsColor,
}: {
  headingData: Heading;
  id: string;
  bgChildren?: ReactNode;
  invertColor?: boolean;
  links: ContactButtonInfo[];
  tagColor?: IconColor;
  buttonsColor?: IconColor[];
}) {
  const tagColorTmp: IconColor = tagColor
    ? tagColor
    : invertColor
      ? tagColorInvert
      : tagColorNormal;

  return (
    <section
      className="relative mx-auto max-w-4xl py-16 md:py-20 lg:py-24"
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      {invertColor ? (
        <div className="relative w-full p-8 sm:p-16 rounded-2xl sm:rounded-3xl shadow-2xl bg-linear-to-br from-tone1-600 to-tone1-700">
          <SectionHeading
            data={headingData}
            invertColor={invertColor}
            tagColor={tagColorTmp}
            bottomMargin="mb-4 md:mb-10"
          />
          <ContactButtons
            links={links}
            invertColor={invertColor}
            buttonsColor={buttonsColor}
          />
        </div>
      ) : (
        <>
          <SectionHeading
            data={headingData}
            invertColor={invertColor}
            tagColor={tagColorTmp}
            bottomMargin="mb-4 md:mb-10"
          />
          <ContactButtons
            links={links}
            invertColor={invertColor}
            buttonsColor={buttonsColor}
          />
        </>
      )}
    </section>
  );
}

function ContactButtons({
  links,
  invertColor,
  buttonsColor,
}: {
  links: ContactButtonInfo[];
  invertColor?: boolean;
  buttonsColor?: IconColor[];
}) {
  const Icon1 = links[0].heading.tag?.icon;
  const Icon2 = links[1].heading.tag?.icon;
  const buttonsColorTmp = buttonsColor
    ? buttonsColor
    : invertColor
      ? buttonsColorInvert
      : buttonsColorNormal;

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm xs:text-base">
      <ContactLink
        data={links[0].contact}
        className={`px-8 py-4 ${buttonsColorTmp[0].text} ${buttonsColorTmp[0].bg} ${buttonsColorTmp[0].shadow} shadow-lg rounded-xl font-semibold flex gap-2 justify-center items-center`}
      >
        {Icon1 && <Icon1 />}
        {links[0].heading.title}
      </ContactLink>
      {/* <a
        href={`${links[0]}`}
        className={`px-8 py-4 ${buttonsColorTmp[0].text} ${buttonsColorTmp[0].bg} ${buttonsColorTmp[0].shadow} shadow-lg rounded-xl font-semibold flex gap-2 justify-center items-center`}
      >
        {Icon1 && <Icon1 />}
        {links[0].heading.title}
      </a> */}
      <ContactLink
        data={links[1].contact}
        className={`px-8 py-4 bg-white/10 backdrop-blur-sm ${buttonsColorTmp[1].text} ${buttonsColorTmp[1].border} border-2 rounded-xl font-semibold flex gap-2 justify-center items-center`}
      >
        {Icon2 && <Icon2 />}
        {links[1].heading.title}
      </ContactLink>
      {/* <a
        href={`${links[1]}`}
        className={`px-8 py-4 bg-white/10 backdrop-blur-sm ${buttonsColorTmp[1].text} ${buttonsColorTmp[1].border} border-2 rounded-xl font-semibold flex gap-2 justify-center items-center`}
      >
        {Icon2 && <Icon2 />}
        {links[1].heading.title}
      </a> */}
    </div>
  );
}

const tagColorNormal: IconColor = {
  icon: "text-tone5-300",
  text: "text-secondary",
  bg: "bg-white border-4 border-slate-100",
};

const tagColorInvert: IconColor = {
  icon: "text-tone5-300",
  text: "text-white",
  bg: "bg-white/20",
};

const buttonsColorNormal: IconColor[] = [
  { text: "text-white", bg: "bg-tone1-600", shadow: "shadow-tone1-600/20" },
  { text: "text-secondary", bg: "", border: "border-slate-200" },
];

const buttonsColorInvert: IconColor[] = [
  { text: "text-tone1-700", bg: "bg-white", shadow: "shadow-white/20" },
  { text: "text-white", bg: "", border: "border-white/30" },
];
