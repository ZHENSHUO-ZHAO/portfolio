import {
  useExperiencePageContext,
  type Job,
} from "../../contexts/experienceContext";

export default function Experience() {
  const experienceContent = useExperiencePageContext();

  return (
    <main>
      {experienceContent.jobs.map((j, i) => (
        <Item key={i} jobData={j} />
      ))}
    </main>
  );
}

function Item({ jobData }: { jobData: Job }) {
  return (
    <section>
      <header>
        <h2>{jobData.title}</h2>
        <p>{jobData.company}</p>
        <p>
          <time>{jobData.time}</time>
        </p>
        <p>{`${jobData.location.city}, ${jobData.location.country}`}</p>
      </header>
      <h3>Achievements</h3>
      <ul>
        {jobData.tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {jobData.products && (
        <>
          <h3>Notable Products</h3>
          <ul>
            {jobData.products.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </>
      )}
      {jobData.markets && (
        <>
          <h3>Markets</h3>
          <ul>
            {jobData.markets.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </>
      )}
      <h3>Skills</h3>
      <ul>
        {jobData.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
