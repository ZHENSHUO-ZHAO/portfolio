import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import ImageSlide from "../../components/page/ImageSlide";
import type { Image } from "../../contexts/pageContext";

export default function Slideshow({
  data,
  interval = 3000,
  className,
}: {
  data: Image[];
  interval?: number;
  className?: string;
}) {
  const controlsA = useAnimation();
  const controlsB = useAnimation();
  // const index = useRef(0);

  const [index, setIndex] = useState(0);
  const [top, setTop] = useState(0); // which slide is on top (0 or 1)
  const [slides, setSlides] = useState<[Image, Image]>([
    data[0],
    data[1 % data.length],
  ]);

  useEffect(() => {
    const tick = async () => {
      const topIndex = top;
      const bottomIndex = 1 - top;

      const activeControls = top === 0 ? controlsA : controlsB;
      const inactiveControls = top !== 0 ? controlsA : controlsB;

      inactiveControls.set({ opacity: 0, scale: 1.02, filter: "blur(4px)" });
      inactiveControls.start({
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
      });

      // fade out ONLY the top slide
      await activeControls.start({
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
        transition: { duration: 0.6, ease: "easeOut" },
      });

      // advance global index
      // index.current = (index.current + 1) % data.length;
      const newIndex = (index + 1) % data.length;
      setIndex(newIndex);

      // update the hidden slide ONLY
      setSlides((cur) => {
        const next = [...cur] as [Image, Image];
        next[topIndex] = data[(newIndex + 1) % data.length];
        return next;
      });

      // swap z-index role
      setTop(bottomIndex);

      // reset animation instantly
      requestAnimationFrame(() => {
        activeControls.set({
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        });
      });
    };

    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [controlsA, controlsB, data, interval, top, index]);

  return (
    <div
      className={`relative size-full ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image slideshow"
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {index + 1} of {data.length}
      </div>

      {/* Slides */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          role="group"
          aria-roledescription="slide"
          aria-label="Image slide"
          aria-hidden={i !== top}
          className={`absolute inset-0 will-change-auto ${i === top ? "z-10" : "z-0"}`}
          animate={i === 0 ? controlsA : controlsB}
          initial={{ opacity: 1, scale: 1 }}
        >
          <ImageSlide data={slides[i]} />
        </motion.div>
      ))}

      {/* Pagination */}
      <div
        className="absolute z-20 pointer-events-none inset-x-0 bottom-2"
        aria-hidden="true"
      >
        <div className="relative overflow-clip h-5 w-12 mx-auto backdrop-blur-xs rounded-lg">
          <div className="absolute -inset-10 rotate-12 flex">
            <div className="flex-1 bg-slate-50/70 dark:bg-slate-600/70" />
            <div className="flex-1 bg-slate-300/70 dark:bg-slate-700/70" />
          </div>
          <div className="absolute inset-0 flex items-center text-center text-xs">
            <span className="flex-1 text-slate-700/80 dark:text-slate-300/80">
              {index + 1}
            </span>
            <span className="flex-1 text-slate-600/80 dark:text-slate-400/80">
              {data.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
