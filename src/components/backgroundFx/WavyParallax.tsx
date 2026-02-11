import { useContext, useLayoutEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SettingContext } from "../../contexts/settingContext";

export default function WavyParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [maxTranslateY, setMaxTranslateY] = useState(0);
  const { deviceWidth } = useContext(SettingContext);
  //   const offset = useRef<string[]>(deviceWidth.pixel >= 768 ? ["start 300px", "end 0px"] : ["start 300px", "end 0px"]);

  const offset = useMemo(() => {
    return deviceWidth.pixel >= 768 ? 100 : 130;
  }, [deviceWidth.pixel]);

  // Measure container height vs bg height
  useLayoutEffect(() => {
    if (containerRef.current && bgRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const bgHeight = bgRef.current.offsetHeight;
      setMaxTranslateY(Math.max(containerHeight - bgHeight, 0));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax (slow drift)
  const y = useTransform(scrollYProgress, [0, 1], [0, maxTranslateY]);

  return (
    <div className="relative size-full overflow-hidden bg-white dark:bg-slate-900/50">
      <div
        ref={containerRef}
        className="absolute inset-x-0 bottom-0"
        style={{ top: `${offset}px` }}
      >
        <motion.div
          ref={bgRef}
          style={{ y }}
          className="h-[75%] pointer-events-none will-change-transform text-slate-700 dark:text-slate-400"
        >
          <WavySvg />
        </motion.div>
      </div>
    </div>
  );
}

function WavySvg() {
  return (
    <svg
      viewBox="0 0 1200 1600"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveFade1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="waveFade2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="40%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="waveFade3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.03" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="waveFade4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        {/* Wave 1 - Top section */}
        <path
          fill="url(#waveFade1)"
          d="
            M 0 0
            C 200 40, 400 0, 600 30
            S 1000 60, 1200 20
            L 1200 120
            C 1000 80, 800 140, 600 100
            S 200 120, 0 100
            Z
          "
        />

        {/* Wave 2 - Upper middle */}
        <path
          fill="url(#waveFade2)"
          d="
            M 0 400
            C 240 360, 480 440, 720 410
            S 1040 360, 1200 400
            L 1200 520
            C 960 560, 720 500, 480 540
            S 240 560, 0 520
            Z
          "
        />

        {/* Wave 3 - Lower middle */}
        <path
          fill="url(#waveFade3)"
          d="
            M 0 900
            C 220 860, 460 940, 700 910
            S 1040 860, 1200 900
            L 1200 1040
            C 980 1080, 760 1000, 520 1040
            S 240 1080, 0 1040
            Z
          "
        />

        {/* Wave 4 - Bottom section */}
        <path
          fill="url(#waveFade4)"
          d="
            M 0 1450
            C 260 1500, 520 1400, 780 1460
            S 1080 1500, 1200 1450
            L 1200 1600
            L 0 1600
            Z
          "
        />
      </g>
    </svg>
  );
}
