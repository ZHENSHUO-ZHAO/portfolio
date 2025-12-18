import { useHomePageContext } from "../../contexts/homeContext";
import PageBase from "../PageBase";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <section>
        <h2>Highlights</h2>
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
      <section>
        <h2>Snapshots</h2>
        {content.snapshot.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </section>
      <p>{content.bio}</p>
    </PageBase>
  );
}

function HomePageHeader() {
  const content = useHomePageContext();

  return (
    <>
      <h1>{content.name}</h1>
      <ul>
        {content.roles.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <p>{content.statement}</p>
    </>
  );
}
