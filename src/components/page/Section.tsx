import type { ReactNode } from "react";
import FullBleedContainer from "./FullBleedContainer";
import type {
  Heading as Heading,
  HeadingColor,
  IconColor,
} from "../../contexts/pageContext";
import SectionHeading from "./SectionHeading";

export default function Section({
  headingData,
  id,
  children,
  maxWidth = "",
  bgChildren,
  invertColor,
  tagColor,
  paddingY = "py-16 md:py-20",
  ref,
}: {
  headingData?: Heading;
  id: string;
  children: ReactNode;
  maxWidth?: string;
  bgChildren?: ReactNode;
  invertColor?: boolean | HeadingColor;
  tagColor?: IconColor;
  paddingY?: string;
  ref?: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={ref}
      className={`relative ${maxWidth} ${paddingY}`}
      aria-labelledby={id}
      id={id}
    >
      <FullBleedContainer>{bgChildren}</FullBleedContainer>
      {headingData && (
        <SectionHeading
          data={headingData}
          invertColor={invertColor}
          tagColor={tagColor}
        />
      )}
      {children}
    </section>
  );
}
