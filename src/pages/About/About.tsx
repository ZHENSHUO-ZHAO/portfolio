import { useAboutPageContext } from "../../contexts/aboutContext";

export default function About() {
  const content = useAboutPageContext();

  return (
    <main>
      <header>
        <h1>Who am I?</h1>
        <p>{content.introduction} </p>
      </header>
      <section>
        <h2>My strongest work combines:</h2>
        <ul>
          {content.strength.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>My Professional Journey</h2>
        <ol>
          {content.journey.map((j) => (
            <li key={j.title}>
              <article>
                <h3>{j.title}</h3>
                <p>{j.desc}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h2>My Engineering Philosophy</h2>
        <ul>
          {content.philosophy.map((p) => (
            <li key={p.title}>
              <article>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>What I'm Looking For</h2>
        <p>{content.aim.desc}</p>
        <ul>
          {content.aim.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Outside of Work</h2>
        <p>{content.leisure}</p>
      </section>
    </main>
  );
}
