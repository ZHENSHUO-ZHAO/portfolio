import { useContext, type ReactNode } from "react";
import { type HomeHeader } from "../../contexts/homeContext";
import Portrait from "./Portrait";
import CtaButton from "./CtaButton";
import { mixColor } from "../../utils/util";
import { SettingContext } from "../../contexts/settingContext";
import FullBleedContainer from "../../components/page/FullBleedContainer";
import HybridStatement from "../../components/page/HybridStatement";
import type { IconColor } from "../../contexts/pageContext";
import GlassSurface from "../../components/glassFx/GlassSurface";

export default function HomePageHeader({
  data,
  bgChildren,
}: {
  data: HomeHeader;
  bgChildren?: ReactNode;
}) {
  const IconPrimary = data.cta[0].icon;
  const IconSecondary = data.cta[1].icon;
  const { deviceWidth } = useContext(SettingContext);

  return (
    <header className="relative lg:mx-8">
      <FullBleedContainer interactive={true}>{bgChildren}</FullBleedContainer>
      <div className="relative h-full pb-12 md:pb-16 lg:pb-20 pt-20 md:pt-25 xl:pt-60 flex flex-col-reverse xl:flex-row gap-4 xl:gap-15 items-center xl:justify-center">
        <div className="text-center xl:text-left">
          {/* Tag */}
          <div className="inline-flex gap-1 md:gap-2 items-center px-3 md:px-4 py-1 bg-tone1-50/70 dark:bg-tone1-900/70 border border-tone1-200 rounded-full text-tone1-700 dark:text-tone1-200 text-xs md:text-sm font-semibold mb-4 md:mb-5 lg:mb-6 pointer-events-none">
            <data.tag.icon
              aria-hidden="true"
              focusable="false"
              className="text-tone4-300 dark:text-yellow-200 animate-pulse"
            />
            {data.tag.text && <span>{data.tag.text}</span>}
          </div>

          {/* Name */}
          <h1 className="font-display text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 md:mb-5 lg:mb-6 pointer-events-none">
            {data.title}
          </h1>

          {/* Roles */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-y-3 gap-2 md:gap-3 mb-6 md:mb-7 lg:mb-8 pointer-events-none">
            {data.roles.map((r, i) => {
              const color: IconColor = roleColors[i];

              return (
                <span
                  key={r}
                  className={`px-3 md:px-4 py-1.5 md:py-2 bg-linear-to-r ${color.bg} text-xs md:text-sm lg:text-base text-white rounded-lg font-semibold shadow-lg ${color.shadow}`}
                >
                  {r}
                </span>
              );
            })}
          </div>

          {/* Statement */}
          {deviceWidth.pixel >= 1024
            ? data.statement.map((s, i) => (
                <p
                  key={`p_${i}`}
                  className="text-base md:text-xl lg:text-2xl font-medium mb-8 md:mb-9 lg:mb-10"
                >
                  <HybridStatement data={s} />
                </p>
              ))
            : data.altStatement.map((s, i) => (
                <p
                  key={`p_${i}`}
                  className="text-base md:text-xl lg:text-2xl font-medium mb-8 md:mb-9 lg:mb-10"
                >
                  <HybridStatement data={s} />
                </p>
              ))}

          {/* CTA */}
          <ul className="mt-8 w-full flex flex-col min-[500px]:flex-row gap-5 min-[500px]:gap-4 justify-center items-stretch min-[500px]:items-center text-sm md:text-base">
            <CtaButton
              gradientColor={ctaColors.primary.gradient}
              link="/project"
              bgColor={`${ctaColors.primary.bg} relative`}
              useNavLink
              priority="primary"
              className="flex-2"
              bgFx={
                <div className="absolute inset-0">
                  <GlassSurface
                    borderWidth={1}
                    displace={3}
                    greenOffset={0}
                    blueOffset={0}
                    width="100%"
                    height="100%"
                    borderRadius={9999}
                    className="shadow-none!"
                  />
                  <div className="absolute inset-0 bg-sky-300/8 dark:bg-accent/5 rounded-full" />
                </div>
              }
            >
              {<IconPrimary />}
              <span className="font-semibold">{data.cta[0].text}</span>
            </CtaButton>
            <CtaButton
              gradientColor={ctaColors.secondary.gradient}
              link="/about"
              bgColor={`${ctaColors.secondary.bg} backdrop-blur-sm`}
              priority="secondary"
              className="flex-1"
            >
              <IconSecondary />
              <span className="font-semibold">{data.cta[1].text}</span>
            </CtaButton>
          </ul>
        </div>

        <Portrait
          data={data.portrait}
          className="relative xl:w-1/3 max-w-[180px] xl:max-w-[300px] mb-4 md:mb-5 xl:mb-0 pointer-events-none"
        />
      </div>
    </header>
  );
}

const roleColors: IconColor[] = [
  {
    bg: "from-tone1-500/70 to-tone1-600/70",
    shadow: "shadow-tone1-500/30",
    text: "",
  },
  {
    bg: "from-tone2-500/70 to-tone2-600/70",
    shadow: "shadow-tone2-500/30",
    text: "",
  },
  {
    bg: "from-tone3-500/70 to-tone3-600/70",
    shadow: "shadow-tone3-500/30",
    text: "",
  },
  {
    bg: "from-tone4-500/70 to-tone4-600/70",
    shadow: "shadow-tone4-500/30",
    text: "",
  },
];

type CtaColor = { bg: string; gradient: string[] };

const ctaColors: { primary: CtaColor; secondary: CtaColor } = {
  primary: {
    bg: "transparent",
    gradient: [
      "var(--color-complement)",
      "transparent",
      "var(--color-accent)",
      "var(--color-complement)",
      "transparent",
      "var(--color-accent)",
      "var(--color-complement)",
    ],
  },
  secondary: {
    bg: "bg-slate-400/20 dark:bg-slate-400/30",
    gradient: [
      mixColor(10, "var(--color-cta-secondary)", "transparent"),
      "transparent",
      mixColor(60, "var(--color-cta-secondary)", "transparent"),
      mixColor(10, "var(--color-cta-secondary)", "transparent"),
      "transparent",
      mixColor(60, "var(--color-cta-secondary)", "transparent"),
      mixColor(10, "var(--color-cta-secondary)", "transparent"),
    ],
  },
};
