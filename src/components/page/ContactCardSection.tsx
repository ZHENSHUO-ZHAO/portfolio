import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type {
  ContactButtonInfo,
  Heading as Heading,
  IconColor,
} from "../../contexts/pageContext";
import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";
import { transition, upAnim_4px } from "../../utils/constants";

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
        <div className="relative">
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
        className={`px-8 py-4 ${buttonsColorTmp[0].text} ${buttonsColorTmp[0].bg} ${buttonsColorTmp[0].shadow} shadow-lg rounded-xl font-semibold flex gap-2 justify-center items-center ${upAnim_4px}  ${transition}`}
      >
        {Icon1 && <Icon1 />}
        {links[0].heading.title}
      </ContactLink>
      <ContactLink
        data={links[1].contact}
        className={`px-8 py-4 backdrop-blur-sm ${buttonsColorTmp[1].text} ${buttonsColorTmp[1].bg}  ${buttonsColorTmp[1].border} border-2 rounded-xl font-semibold flex gap-2 justify-center items-center ${upAnim_4px}  ${transition}`}
      >
        {Icon2 && <Icon2 />}
        {links[1].heading.title}
      </ContactLink>
    </div>
  );
}

const tagColorNormal: IconColor = {
  icon: "text-tone5-300",
  text: "text-secondary",
  bg: "bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-900",
};

const tagColorInvert: IconColor = {
  icon: "text-tone5-300",
  text: "text-white",
  bg: "bg-white/10 border-4 border-white/15",
};

const buttonsColorNormal: IconColor[] = [
  {
    text: "text-white",
    bg: "bg-tone1-700 dark:bg-tone1-600 hover:bg-tone1-600 dark:hover:bg-tone1-500 active:bg-tone1-600 dark:active:bg-tone1-500",
    shadow:
      "shadow-tone1-700/20 dark:shadow-tone1-600/50 hover:shadow-tone1-600/20 dark:hover:shadow-tone1-500/50 dark:active:shadow-tone1-500/50 active:shadow-tone1-600/20",
  },
  {
    text: "text-secondary",
    bg: "bg-slate-200 dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/40 active:bg-slate-100 dark:active:bg-white/40 ",
    border: "border-slate-200",
  },
];

const buttonsColorInvert: IconColor[] = [
  {
    text: "text-tone1-700",
    bg: "bg-sky-50 hover:bg-white active:bg-white",
    shadow: "shadow-white/20 hover:shadow-white/30 active:shadow-white/30",
  },
  {
    text: "text-white",
    bg: "bg-white/10 hover:bg-white/20 active:bg-white/20",
    border: "border-white/30",
  },
];
