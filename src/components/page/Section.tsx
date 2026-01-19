import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type { Heading as Heading, IconColor } from "../../contexts/pageContext";
import SectionHeading from "./SectionHeading";

export default function Section({
  headingData,
  id,
  children,
  maxWidth = "",
  bgChildren,
  invertColor,
  tagColor,
}: {
  headingData: Heading;
  id: string;
  children: ReactNode;
  maxWidth?: string;
  bgChildren?: ReactNode;
  invertColor?: boolean;
  tagColor?: IconColor;
}) {
  return (
    <section
      className={`relative ${maxWidth} py-16 md:py-20 lg:py-24`}
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      {
        <SectionHeading
          data={headingData}
          invertColor={invertColor}
          tagColor={tagColor}
        />
      }
      {children}
    </section>
  );
}
