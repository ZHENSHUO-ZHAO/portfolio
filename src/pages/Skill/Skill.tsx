import { useSkillPageContext, type Skill } from "../../contexts/skillContext";

export default function Skill() {
  const content = useSkillPageContext();

  return (
    <main>
      {content.stacks.map((s, i) => (
        <Item key={i} stack={s} />
      ))}
    </main>
  );
}

function Item({ stack }: { stack: Skill }) {
  return (
    <section>
      <h2>{stack.category}</h2>
      <ul>
        {stack.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
