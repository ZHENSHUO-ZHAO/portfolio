import { useHomePageContext } from "../../contexts/homeContext";

export default function Home() {
  const content = useHomePageContext();

  return (
    <main>
      <header>
        <h1>{content.name}</h1>
        <ul>
          {content.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p>{content.statement}</p>
      </header>
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
    </main>
  );
}
