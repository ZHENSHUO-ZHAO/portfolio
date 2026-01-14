import { useExperiencePageContext } from "../../contexts/experienceContext";

export default function ExperiencePageHeader({
  headingClassName,
}: {
  headingClassName: string;
}) {
  const content = useExperiencePageContext();

  return (
    <div className={`${headingClassName} space-y-4`}>
      <h1>{content.pageTitle}</h1>
      <p className="text-secondary">{content.introduction}</p>
    </div>
  );
}
