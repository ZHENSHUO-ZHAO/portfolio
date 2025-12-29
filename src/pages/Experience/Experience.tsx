import {
  useExperiencePageContext,
  type Job,
} from "../../contexts/experienceContext";
import { jobSlug } from "../../utils/util";
import PageBase, { ItemList, Section } from "../PageBase";

export default function Experience() {
  const content = useExperiencePageContext();

  return (
    <PageBase content={content}>
      {content.jobs.map((j) => (
        <Item key={j.time} jobData={j} />
      ))}
    </PageBase>
  );
}

function Item({ jobData }: { jobData: Job }) {
  const jobId = jobSlug(jobData.time, jobData.title, jobData.company);
  const headingStyle = "mt-4 sm:mt-6";

  return (
    <Section
      id={jobId}
      title={jobData.title}
      headerChildren={
        <div className="my-2 text-neutral-600">
          <p className="text-neutral-900 font-medium">{jobData.company}</p>
          <p>
            <time>{jobData.time}</time>
          </p>
          <p>{`${jobData.location.city}, ${jobData.location.country}`}</p>
        </div>
      }
    >
      <h3 className={headingStyle}>Achievements</h3>
      <ItemList listData={jobData.tasks} />
      {jobData.products && (
        <>
          <h3 className={headingStyle}>Notable Products</h3>
          <ItemList listData={jobData.products} />
        </>
      )}
      {jobData.markets && (
        <>
          <h3 className={headingStyle}>Markets</h3>
          <ItemList listData={jobData.markets} />
        </>
      )}
      <h3 className={headingStyle}>Skills</h3>
      <ItemList listData={jobData.skills} />
    </Section>
  );
}
