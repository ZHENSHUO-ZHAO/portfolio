import { useContext, useMemo } from "react";
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

  const roles = useMemo(() => {
    // When screen size is less than 600px, change to the roles from 1 row to 2 rows.
    const rows = deviceWidth.pixel >= 600 ? 1 : 2;
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
      className={`${headingClassName} mx-2 lg:mx-4 min-h-[80dvh] flex justify-center items-center`}
    >
      <div className="lg:flex lg:gap-15 sm:justify-between sm:items-center">
        {/* <div className="sm:flex sm:flex-row sm:gap-10 md:gap-13 lg:gap-15 sm:justify-between sm:items-center"> */}
        {/* <Portrait className="w-1/2 max-w-[220px] mx-auto mb-4 sm:mb-0 sm:w-auto sm:flex-3 min-[44rem]:flex-2 md:flex-1 lg:flex-2" /> */}
        <Portrait className="w-1/2 max-w-[220px] mx-auto mb-8 lg:flex-2 lg:mb-0" />
        {/* <div className="sm:flex-4 min-[44rem]:flex-4 md:flex-3 lg:flex-8 flex flex-col items-stretch sm:items-start"> */}
        <div className="lg:flex-8 flex flex-col items-stretch lg:items-start">
          <h1 className="text-center text-xl min-[370px]:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight">
            {content.name}
          </h1>
          <ul
            aria-label="Professional roles"
            className="flex flex-col justify-center items-center lg:items-start"
          >
            {roles.map((row, i) => (
              <li
                key={`RoleRow_${i}`}
                className="flex gap-2 justify-center items-center"
              >
                {row.map((r, j, array) => (
                  <React.Fragment key={r}>
                    <span className="whitespace-nowrap text-base font-medium lg:text-lg">
                      {r}
                    </span>
                    {j < array.length - 1 && (
                      <div className="h-3 w-px border-r border-r-slate-500/50 border-l border-l-slate-200/50 rounded-full" />
                    )}
                  </React.Fragment>
                ))}
              </li>
            ))}
          </ul>
          <p className="text-sm py-4 text-left min-[475px]:text-center lg:text-left whitespace-normal min-[475px]:whitespace-pre-line lg:whitespace-normal">
            {content.statement}
          </p>
          <ul className="mt-8 w-full flex flex-wrap gap-x-4 gap-y-7 justify-start items-center text-base text-slate-800">
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
              className="flex-1"
            >
              <ScanSearch width={20} />
              <span className="font-medium">Projects</span>
            </CtaButton>
            <div className="flex-1 flex gap-4 justify-stretch items-center">
              <CtaButton
                gradientColor={[
                  mixColor(5, "var(--color-slate-700)", "transparent"),
                  mixColor(60, "var(--color-slate-700)", "transparent"),
                  mixColor(10, "var(--color-slate-700)", "transparent"),
                ]}
                link="/resume.pdf"
                bgColor="bg-slate-400/20"
                linkProps={{ download: true }}
                priority="secondary"
                className="flex-3"
              >
                <FileDown width={20} />
                Resume
              </CtaButton>
              <CtaButton
                gradientColor={[
                  mixColor(5, "var(--color-slate-600)", "transparent"),
                  mixColor(40, "var(--color-slate-600)", "transparent"),
                  mixColor(10, "var(--color-slate-600)", "transparent"),
                ]}
                link="/contact"
                bgColor="bg-slate-300/20"
                priority="tertiary"
                className="flex-2"
              >
                <MessageCircleMore width={20} />
                Contact
              </CtaButton>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
