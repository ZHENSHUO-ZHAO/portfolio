import { useCallback, useContext } from "react";
import { useHomePageContext } from "../../contexts/homeContext";
import Portrait from "./Portrait";
import React from "react";
import CtaButton from "./CtaButton";
import { FileDown, MessageCircleMore, ScanSearch } from "lucide-react";
import { mixColor } from "../../utils/util";
import { SettingContext } from "../../contexts/settingContext";

export default function HomePageHeader({
  headingClassName,
}: {
  headingClassName: string;
}) {
  const content = useHomePageContext();
  const { deviceWidth } = useContext(SettingContext);

  const getRoles = useCallback(() => {
    // When screen size is less than 640 px (40rem), change to the roles from 1 row to 2 rows.
    const rows = deviceWidth.rem >= 40 ? 1 : 2;
    const itemsPerRow = content.roles.length / rows;
    const newRoles = [];
    for (let i = 0; i < rows; i++) {
      if (i < rows - 1) {
        newRoles.push(
          content.roles.slice(i * itemsPerRow, (i + 1) * itemsPerRow)
        );
      } else {
        newRoles.push(
          content.roles.slice(i * itemsPerRow, content.roles.length)
        );
      }
    }
    return newRoles;
  }, [deviceWidth, content.roles]);

  return (
    <div
      className={`${headingClassName} flex flex-col gap-4 justify-center items-center`}
    >
      <Portrait />
      <h1 className="text-center text-2xl font-extrabold font-display tracking-tight xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {content.name}
      </h1>
      <ul
        aria-label="Professional roles"
        className="flex flex-col justify-center items-center"
      >
        {getRoles().map((row, i) => (
          <div
            key={`RoleRow_${i}`}
            className="flex gap-2 justify-center items-center"
          >
            {row.map((r, j, array) => (
              <React.Fragment key={r}>
                <li className="whitespace-nowrap text-base font-medium lg:text-lg">
                  {r}
                </li>
                {j < array.length - 1 && (
                  <div className="h-3 w-px border-r border-r-slate-500/50 border-l border-l-slate-200/50 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </ul>
      <p className="text-sm px-6 py-4 sm:whitespace-pre-line sm:text-center">
        {content.statement}
      </p>
      <ul className="my-8 w-full flex flex-col sm:flex-row gap-8 lg:gap-12 justify-center items-center text-base text-slate-800">
        <CtaButton
          gradientColor={[
            "var(--color-accent)",
            "transparent",
            "var(--color-complement)",
            "var(--color-accent)",
          ]}
          link="/project"
          useNavLink
          priority="primary"
        >
          <ScanSearch width={20} />
          <span className="font-medium">View Projects</span>
        </CtaButton>
        <CtaButton
          gradientColor={[
            mixColor(5, "var(--color-accent)", "transparent"),
            mixColor(60, "var(--color-accent)", "transparent"),
            mixColor(10, "var(--color-accent)", "transparent"),
          ]}
          link="/resume.pdf"
          bgColor="bg-accent/20"
          linkProps={{ download: true }}
          priority="secondary"
        >
          <FileDown width={20} />
          Download CV
        </CtaButton>
        <CtaButton
          gradientColor={[
            mixColor(5, "var(--color-complement)", "transparent"),
            mixColor(40, "var(--color-complement)", "transparent"),
            mixColor(10, "var(--color-complement)", "transparent"),
          ]}
          link="/contact"
          bgColor="bg-complement/10"
          priority="tertiary"
        >
          <MessageCircleMore width={20} />
          Contact
        </CtaButton>
      </ul>
      {/* <div className="bg-card rounded-r-md border-l-4 border-l-accent mb-8"> */}
      {/* <p className="text-sm px-6 py-4 sm:whitespace-pre-line sm:text-center">
        {content.statement}
      </p> */}
      {/* </div> */}
    </div>
  );
}
