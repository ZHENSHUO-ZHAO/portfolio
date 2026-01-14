import { type Job } from "../../contexts/experienceContext";
import { jobSlug } from "../../utils/util";
import { Section } from "../PageBase";
import JobTagList, { TextTag } from "./JobTagList";
import Task from "./Task";
import { HiCalendar } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";

export function Job({ job }: { job: Job }) {
  const jobId = jobSlug(job.time, job.title, job.company);
  const headingStyle = "text-lg font-medium";

  return (
    <Section
      id={jobId}
      title={job.title}
      className="bg-white border border-slate-300 rounded-lg px-7 py-5! space-y-4"
      headingClassName="text-xl mb-1! pb-0!"
      childrenContainerClassName="space-y-4"
      headerChildren={
        <>
          <p className="text-neutral-600 font-medium">{job.company}</p>
          <div className="flex flex-col gap-0 min-[552px]:flex-row min-[552px]:gap-8">
            <p className="text-muted flex gap-1 items-center">
              <HiCalendar />
              <time className="text-sm">{job.time}</time>
            </p>
            <p className="text-muted flex gap-1 items-center">
              <HiLocationMarker />
              <span className="text-sm">{`${job.location.city}, ${job.location.country}`}</span>
            </p>
          </div>
        </>
      }
    >
      <Task tasks={job.tasks} headingStyle={headingStyle} />

      {/* Product List */}
      {job.products && (
        <JobTagList
          title="Launched Products"
          headingStyle={headingStyle}
          liStyle="bg-accent/20 text-sky-700"
          tagComponent={TextTag}
          data={job.products}
        />
      )}

      {/* Market List */}
      {job.markets && (
        <JobTagList
          title="Markets"
          headingStyle={headingStyle}
          liStyle="bg-accent/20 text-sky-700"
          tagComponent={TextTag}
          data={job.markets}
        />
      )}

      {/* Skill List */}
      {job.skills && (
        <JobTagList
          title="Expertise & Technologies"
          headingStyle={headingStyle}
          liStyle="bg-complement/20 text-emerald-700"
          tagComponent={TextTag}
          data={job.skills}
        />
      )}
    </Section>
  );
}
