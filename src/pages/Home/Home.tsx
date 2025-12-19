import { useHomePageContext } from "../../contexts/homeContext";
import PageBase from "../PageBase";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <section aria-labelledby="highlights">
        <h2 id="highlights">Highlights</h2>
        <ul>
          {content.highlight.map((h) => (
            <li key={h.title}>
              <article>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="snapshots">
        <h2 id="snapshots">Snapshots</h2>
        <ul>
          {content.snapshot.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="bio">
        <h2 id="bio" className="sr-only">
          About me
        </h2>
        <p>{content.bio}</p>
      </section>
    </PageBase>
  );
}

function HomePageHeader() {
  const content = useHomePageContext();

  return (
    <>
      <h1>{content.name}</h1>
      <ul aria-label="Professional roles">
        {content.roles.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <p>{content.statement}</p>
    </>
  );
}
