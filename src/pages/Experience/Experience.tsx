import { useLocation } from "react-router";
import { useExperiencePageContext } from "../../contexts/experienceContext";
import PageBase from "../PageBase";
import ExperiencePageHeader from "./ExperiencePageHeader";
import { Job as JobItem } from "./Job";
import { useEffect } from "react";

export default function Experience() {
  const content = useExperiencePageContext();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [hash]);

  return (
    <PageBase
      content={content}
      headerElement={ExperiencePageHeader}
      headerClassName="pb-8"
    >
      <div className="flex flex-col gap-6 items-stretch pb-10">
        {content.jobs.map((j) => (
          <JobItem key={j.time} job={j} />
        ))}
      </div>
    </PageBase>
  );
}
