import { NavLink } from "react-router";
import { useHomePageContext } from "../../contexts/homeContext";
import PageBase, { ArticleList, Section } from "../PageBase";
import { useMemo } from "react";
import React from "react";
import useMeasure from "../../hooks/measureHook";
import { FileDown, MessageCircleMore, ScanSearch } from "lucide-react";
import GlowOutline from "../../components/glowOutline/GlowOutline";
import { motion, type Variants } from "motion/react";
import portrait from "../../assets/images/home/portrait.png";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <Section id="highlights" title="Highlights">
        <ArticleList listData={content.highlight} />
      </Section>

      <Section id="snapshots" title="Snapshots">
        <ul className="space-y-2">
          {content.snapshot.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section id="bio" title="About me" headingClassName="sr-only">
        <p>{content.bio}</p>
      </Section>
    </PageBase>
  );
}

function HomePageHeader() {
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
          gradientColor="var(--color-accent), transparent, var(--color-complement), var(--color-accent)"
          link="/project"
          useNavLink
          priority="primary"
        >
          <ScanSearch width={20} />
          <span className="font-medium">View Projects</span>
        </CtaButton>
        <CtaButton
          gradientColor="color-mix(in oklch, var(--color-accent) 5%, transparent), color-mix(in oklch, var(--color-accent) 60%, transparent), color-mix(in oklch, var(--color-accent) 10%, transparent)"
          link="/resume.pdf"
          bgColor="bg-accent/20"
          linkProps={{ download: true }}
          priority="secondary"
        >
          <FileDown width={20} />
          Download CV
        </CtaButton>
        <CtaButton
          gradientColor="color-mix(in oklch, var(--color-complement) 5%, transparent), color-mix(in oklch, var(--color-complement) 40%, transparent), color-mix(in oklch, var(--color-complement) 10%, transparent"
          link="/contact"
          bgColor="bg-complement/10"
          priority="tertiary"
        >
          <MessageCircleMore width={20} />
          Contact
        </CtaButton>
        {/* <li className={ctaLiClass}>
          <GlowOutline
            gradient="linear-gradient(160deg, var(--color-accent), transparent, var(--color-complement), var(--color-accent))"
            rounded="rounded-full"
          />
          <NavLink to="/project" className={`${ctaAClass} `}>
            <ScanSearch width={20} />
            View Projects
          </NavLink>
        </li>
        <li className={ctaLiClass}>
          <GlowOutline
            gradient="linear-gradient(160deg, color-mix(in oklch, var(--color-accent) 5%, transparent), color-mix(in oklch, var(--color-accent) 60%, transparent), color-mix(in oklch, var(--color-accent) 10%, transparent))"
            rounded="rounded-full"
          />
          <a
            href="/resume.pdf"
            download
            className={`${ctaAClass} bg-accent/20`}
          >
            <FileDown width={20} />
            Download CV
          </a>
        </li>
        <li className={ctaLiClass}>
          <GlowOutline
            gradient="linear-gradient(160deg, color-mix(in oklch, var(--color-complement) 5%, transparent), color-mix(in oklch, var(--color-complement) 40%, transparent), color-mix(in oklch, var(--color-complement) 10%, transparent)"
            rounded="rounded-full"
          />
          <a href="/contact" className={`${ctaAClass} bg-complement/10`}>
            <MessageCircleMore width={20} />
            Contact Me
          </a>
        </li> */}
      </ul>
      <div className="bg-slate-600/10 rounded-r-md border-l-4 border-l-accent mb-8">
        <p className="text-base max-w-prose px-6 py-2 lg:text-lg sm:whitespace-pre-line sm:text-center">
          {content.statement}
        </p>
      </div>
    </div>
  );
}

function CtaButton({
  gradientColor,
  link,
  bgColor,
  useNavLink,
  linkProps,
  children,
  priority,
}: {
  gradientColor: string;
  link: string;
  bgColor?: string;
  useNavLink?: boolean;
  linkProps?: object;
  children: React.ReactNode;
  priority: "primary" | "secondary" | "tertiary";
}) {
  const linkStyle = "flex justify-center gap-2 rounded-full px-6 py-2";
  const glowVariants: Variants = {
    rest: {
      background: `linear-gradient(520deg, ${gradientColor})`,
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
    hover: {
      background: [
        `linear-gradient(160deg, ${gradientColor})`,
        `linear-gradient(220deg, ${gradientColor})`,
        `linear-gradient(350deg, ${gradientColor})`,
        `linear-gradient(400deg, ${gradientColor})`,
        `linear-gradient(520deg, ${gradientColor})`,
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.li
      className={`relative flex-1 ${
        priority === "primary"
          ? "w-[280px] sm:max-w-[210px]"
          : priority === "secondary"
          ? "w-[200px] sm:max-w-[180px]"
          : "w-[200px] sm:max-w-[150px]"
      }`}
      animate="rest"
      whileHover="hover"
      whileTap="hover"
      tabIndex={-1}
    >
      <GlowOutline
        gradient={{ variants: glowVariants }}
        rounded="rounded-full"
      />
      {useNavLink ? (
        <NavLink
          to={link}
          className={`${linkStyle} ${bgColor || ""} text-slate-800`}
        >
          {children}
        </NavLink>
      ) : (
        <a
          href={link}
          className={`${linkStyle} ${bgColor || ""} text-slate-500`}
          {...linkProps}
        >
          {children}
        </a>
      )}
    </motion.li>
  );
}

function Portrait() {
  return (
    <>
      <svg viewBox="0 0 100 150" className="absolute w-0 h-0">
        <defs>
          <mask id="portrait-mask" maskContentUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="0.6667" fill="white" />

            <ellipse cx="0.5" cy="0.6667" rx="0.5" ry="0.3333" fill="white" />
          </mask>
        </defs>
      </svg>

      <div className="relative w-30 sm:w-50 aspect-[1/1.5]">
        <div className="absolute aspect-square bottom-0 w-full">
          <GlowOutline
            gradient="conic-gradient(from 0deg, transparent, color-mix(in oklch, var(--color-accent) 10%, transparent), var(--color-complement), var(--color-accent), var(--color-complement), color-mix(in oklch, var(--color-accent) 10%, transparent), transparent)"
            rounded="rounded-full"
          />
        </div>
        <div
          className="w-full h-full"
          style={{
            mask: "url(#portrait-mask)",
            WebkitMask: "url(#portrait-mask)",
          }}
        >
          <div className="relative size-full grid grid-cols-1 place-items-end">
            <div className="relative w-full col-start-1 row-start-1 aspect-square rounded-full " />
            <img
              src={portrait}
              alt="Portrait of Vincent Zhao"
              className="relative w-full col-start-1 row-start-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
