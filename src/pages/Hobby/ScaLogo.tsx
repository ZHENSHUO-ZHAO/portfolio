import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import scaLogo from "../../assets/images/hobby/certificate/sca_log.webp";

export default function ScaLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [maxTranslateY, setMaxTranslateY] = useState(0);

  // Measure container height vs image height
  useLayoutEffect(() => {
    if (containerRef.current && imgRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const imgHeight = imgRef.current.offsetHeight;
      setMaxTranslateY(Math.max(containerHeight - imgHeight, 0));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0, maxTranslateY, maxTranslateY],
  );

  return (
    <div
      ref={containerRef}
      className="relative size-full bg-radial from-coffee-700 via-coffee-700 to-coffee-800 dark:from-amber-950 dark:via-coffee-900 dark:to-coffee-950"
    >
      <motion.img
        ref={imgRef}
        src={scaLogo}
        className="relative mx-auto w-full max-w-[600px] aspect-square object-contain opacity-10"
        alt="The logo of the Specialty Coffee Association."
        style={{ translateY: y }}
      />
    </div>
  );
}
