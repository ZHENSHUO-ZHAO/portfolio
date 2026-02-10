import { motion, type Variants } from "motion/react";
import FloatingLines from "../backgroundFx/FloatingLines";

const ambientBlob = (
  scaleTo: number,
  opacityFrom: number,
  opacityTo: number,
  drift: number,
  duration: number,
): Variants => ({
  animate: {
    scale: [1, scaleTo, 1],
    opacity: [opacityFrom, opacityTo, opacityFrom],
    x: [0, drift, -drift * 0.6, 0],
    y: [0, -drift * 0.6, drift, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

export default function HeaderBackground({
  colors = [
    "bg-(--color-bg1-header)/30",
    "bg-(--color-bg2-header)/30",
    "bg-(--color-bg3-header)/20",
  ],
  floatingLineGradient = ["#00687a", "#008074", "#017a5c"],
}: {
  colors?: string[];
  floatingLineGradient?: string[];
}) {
  return (
    <div className="relative size-full overflow-hidden">
      <FloatingLines
        // linesGradient={["#7a2500", "#803a00", "#7a5a01"]}
        linesGradient={floatingLineGradient}
        enabledWaves={["middle"]}
        lineCount={5}
        lineDistance={50}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
      <motion.div
        variants={ambientBlob(1.05, 0.85, 0.95, 4, 48)}
        animate="animate"
        className={`absolute top-1/4 left-1/4 lg:left-1/5 w-[600px] h-[400px] lg:w-[700px] lg:h-[500px] ${colors[0]} rounded-full blur-2xl lg:blur-3xl opacity-50`}
      />
      <motion.div
        variants={ambientBlob(1.08, 0.75, 0.9, 6, 65)}
        animate="animate"
        className={`absolute top-32 right-1/3 lg:right-1/4 w-[400px] h-[300px] lg:w-[500px] lg:h-[400px] ${colors[1]} rounded-full blur-2xl lg:blur-3xl opacity-40`}
      />
      <motion.div
        variants={ambientBlob(1.06, 0.65, 0.8, 3, 80)}
        animate="animate"
        className={`absolute bottom-0 left-1/2 lg:left-1/3 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] ${colors[2]} rounded-full blur-2xl lg:blur-3xl opacity-30`}
      />
    </div>
  );
}
