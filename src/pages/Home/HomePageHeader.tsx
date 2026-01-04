import { useMemo } from "react";
import { useHomePageContext } from "../../contexts/homeContext";
import useMeasure from "../../hooks/measureHook";
import Portrait from "./Portrait";
import React from "react";
import CtaButton from "./CtaButton";
import { FileDown, MessageCircleMore, ScanSearch } from "lucide-react";

export default function HomePageHeader() {
  const content = useHomePageContext();
  const [ref, size] = useMeasure<HTMLDivElement>();

  const roles = useMemo(() => {
    // When screen size is less than 640 px, change to the roles from 1 row to 2 rows. 32 accounts for the px-4 of the content coded in the page base.
    const rows = size.width + 32 >= 640 ? 1 : 2;
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
  }, [size.width, content.roles]);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col gap-4 justify-center items-center"
    >
      <Portrait />
      <h1 className="text-center text-3xl font-extrabold font-display tracking-tight sm:text-5xl lg:text-6xl">
        {content.name}
      </h1>
      <ul
        aria-label="Professional roles"
        className="flex flex-col justify-center items-center"
      >
        {roles.map((row, i) => (
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
                  <div className="h-2/3 w-px border-r border-r-slate-500/50 border-l border-l-slate-200/50 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </ul>
      <ul className="my-8 w-full flex flex-col sm:flex-row gap-8 justify-center items-center text-base text-slate-800">
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
            "color-mix(in oklch, var(--color-accent) 5%, transparent)",
            "color-mix(in oklch, var(--color-accent) 60%, transparent)",
            "color-mix(in oklch, var(--color-accent) 10%, transparent)",
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
            "color-mix(in oklch, var(--color-complement) 5%, transparent)",
            "color-mix(in oklch, var(--color-complement) 40%, transparent)",
            "color-mix(in oklch, var(--color-complement) 10%, transparent",
          ]}
          link="/contact"
          bgColor="bg-complement/10"
          priority="tertiary"
        >
          <MessageCircleMore width={20} />
          Contact
        </CtaButton>
      </ul>
      <div className="bg-slate-600/10 rounded-r-md border-l-4 border-l-accent mb-8">
        <p className="text-base max-w-prose px-6 py-2 lg:text-lg sm:whitespace-pre-line sm:text-center">
          {content.statement}
        </p>
      </div>
    </div>
  );
}
