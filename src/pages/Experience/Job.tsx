import { type Job } from "../../contexts/experienceContext";
import { jobSlug } from "../../utils/util";
import Task from "./Task";
import { FaLocationDot } from "react-icons/fa6";
import Product from "./Product";
import Skill from "./Skill";
import type { CardColor } from "../../contexts/pageContext";
import { motion } from "motion/react";
import { useContext } from "react";
import { SettingContext } from "../../contexts/settingContext";

export function Job({ job, color }: { job: Job; color: CardColor }) {
  const jobId = jobSlug(job.time, job.title, job.company);
  const { deviceWidth } = useContext(SettingContext);

  return (
    <li
      id={jobId}
      className="flex gap-1 sm:gap-6 flex-col sm:flex-row p-5 sm:p-0 rounded-xl border sm:border-none border-slate-200 dark:border-slate-700 shadow-sm sm:shadow-none perspective-[1000px] backdrop-blur-xs sm:backdrop-blur-none"
    >
      <motion.div
        className="relative z-10 origin-left sm:origin-right w-full sm:w-44 md:w-3xs lg:w-xs xl:w-lg flex-none flex flex-col sm:items-end sm:text-right"
        initial={{
          opacity: 0,
          rotateY: deviceWidth.pixel >= 640 ? "-90deg" : "90deg",
        }}
        whileInView={{ opacity: 1, rotateY: "0deg" }}
        viewport={{ once: true }}
      >
        {/* Time */}
        <div className="relative mb-2 md:mb-4">
          <time
            className={`px-2 md:px-3 py-1 ${color.bg} border ${color.tags && color.tags[0].border} rounded-full ${color.tags && color.tags[0].text} text-xs md:text-sm font-semibold inline-flex gap-2 justify-start items-center`}
          >
            {/* Decorative bullet point smaller than sm */}
            <span
              aria-hidden="true"
              className={`size-3 ${color.tags && color.tags[0].bg} rounded-full inline-block sm:hidden`}
            />
            <span>{job.time}</span>
          </time>
          {/* Decorative bullet point for sizes equal or greater than sm */}
          <div
            aria-hidden="true"
            className="absolute h-px w-9 right-0 translate-x-full top-1/2 -translate-y-1/2 hidden sm:block"
          >
            <div
              className={`absolute size-2 rounded-full right-0 translate-x-full top-1/2 -translate-y-1/2 ${color.tags && color.tags[0].bg}`}
            >
              <div className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent border border-slate-200 dark:border-slate-400 inset-shadow-xs" />
            </div>
          </div>
          <div
            aria-hidden="true"
            className={`absolute h-px w-9 right-0 translate-x-full top-1/2 -translate-y-1/2 ${color.tags && color.tags[0].bg} hidden sm:block`}
          />
        </div>

        {/* Job title */}
        <h3 className="text-lg md:text-lg lg:text-xl xl:text-2xl mb-1 md:mb-2">
          {job.title}
        </h3>

        {/* Company */}
        <p
          className={`text-sm md:text-base lg:text-lg font-medium ${color.icon.text} mb-2 md:mb-4`}
        >
          {job.company}
        </p>

        {/* Location */}
        <p className="text-muted mb-3 md:mb-4 flex gap-1 items-center text-xs md:text-sm">
          <FaLocationDot className="" />
          <span className="">{`${job.location.city}, ${job.location.country}`}</span>
        </p>
      </motion.div>

      {/* Job details */}
      <motion.div
        className="origin-left flex-1 rounded-xl sm:p-4 md:p-6 sm:border sm:border-slate-200 dark:sm:border-slate-700 sm:shadow-sm sm:bg-white/10 dark:sm:bg-slate-900/10 sm:backdrop-blur-xs"
        initial={{ opacity: 0, rotateY: "90deg" }}
        whileInView={{ opacity: 1, rotateY: "0deg" }}
        viewport={{ once: true }}
      >
        <Task tasks={job.tasks} color={color} />

        {/* Product List */}
        {job.products && (
          <Product
            products={job.products}
            markets={job.markets}
            color={color}
          />
        )}

        {/* Skill List */}
        <Skill data={job.skills} color={color} />
      </motion.div>
    </li>
  );
}
