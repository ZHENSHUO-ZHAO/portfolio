import {
  useExperiencePageContext,
  type Stat,
} from "../../contexts/experienceContext";

export default function ExperiencePageHeader({
  headingClassName,
}: {
  headingClassName: string;
}) {
  const content = useExperiencePageContext();

  return (
    <div className="flex flex-col justify-start items-start gap-2 min-[860px]:flex-row min-[860px]:justify-between min-[860px]:items-center min-[860px]:gap-0">
      <div className={`${headingClassName} space-y-2 min-[860px]:space-y-4`}>
        <h1>{content.pageTitle}</h1>
        <p className="text-secondary font-medium text-lg sm:text-xl">
          {content.introduction}
        </p>
      </div>

      <dl className="flex gap-6">
        {content.stats.map((s) => (
          <Stat stat={s} key={s.unit} />
        ))}
      </dl>
    </div>
  );
}

function Stat({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col gap-2 justify-stretch items-center">
      <dd className="text-xl text-center sm:text-2xl font-bold">
        {stat.amount}
      </dd>
      <dt className="text-muted text-center text-xs sm:text-sm">{stat.unit}</dt>
    </div>
  );
}
