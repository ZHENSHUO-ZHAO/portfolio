import { motion } from "motion/react";
import type { Connection } from "../../contexts/hobbyContext";
import { getMultipleRowAnimation } from "../../hooks/responsiveFadeInHook";

export default function Connection({ data }: { data: Connection[] }) {
  return (
    <div className="relative grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:mx-8">
      {data.map((c) => {
        const Icon = c.tag!.icon;

        return (
          <motion.div
            {...getMultipleRowAnimation()}
            key={c.title}
            className="last:md:col-span-2"
          >
            <div
              className="size-full bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border-2 border-amber-200 dark:border-slate-800
              hover:border-coffee-400 dark:hover:border-amber-500/50 hover:bg-transparent hover:translate-x-1 hover:lg:translate-x-3 hover:shadow-[0_20px_40px_rgba(120,53,15,0.15)] dark:hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)] hover:bg-linear-to-r hover:from-amber-800/5 dark:hover:from-amber-400/10 hover:to-transparent 
              active:border-coffee-400 dark:active:border-amber-500/50 active:bg-transparent active:translate-x-1 active:lg:translate-x-3 active:shadow-[0_20px_40px_rgba(120,53,15,0.15)] dark:active:shadow-[0_20px_40px_rgba(251,191,36,0.1)] active:bg-linear-to-r active:from-amber-800/5 dark:active:from-amber-400/10 active:to-transparent
              transition duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="size-11 md:size-12 lg:size-14 bg-amber-200 dark:bg-amber-500/20 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-coffee-700 dark:text-amber-400 text-lg md:text-xl lg:text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary mb-2 md:mb-3 lg:mb-4">
                    {c.desc}
                  </p>
                  <p className="text-xs md:text-sm text-muted">{c.detail}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
