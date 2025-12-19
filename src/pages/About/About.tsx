import { useAboutPageContext } from "../../contexts/aboutContext";
import PageBase from "../PageBase";

export default function About() {
  const content = useAboutPageContext();

  return (
    <PageBase content={content} headerElement={AboutPageHeader}>
      <section aria-labelledby="strength-heading">
        <h2 id="strength-heading">My strongest work combines:</h2>
        <ul>
          {content.strength.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="journey-heading">
        <h2 id="journey-heading">My Professional Journey</h2>
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
      <section aria-labelledby="philosophy-heading">
        <h2 id="philosophy-heading">My Engineering Philosophy</h2>
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
      <section aria-labelledby="aim-heading">
        <h2 id="aim-heading">What I'm Looking For</h2>
        <p>{content.aim.desc}</p>
        <ul>
          {content.aim.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="leisure-heading">
        <h2 id="leisure-heading">Outside of Work</h2>
        <p>{content.leisure}</p>
      </section>
    </PageBase>
  );
}

function AboutPageHeader() {
  const content = useAboutPageContext();

  return (
    <>
      <h1>{content.pageTitle}</h1>
      <p>{content.introduction} </p>
    </>
  );
}
