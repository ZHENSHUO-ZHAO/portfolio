import { useSkillPageContext, type Skill } from "../../contexts/skillContext";
import { slugify } from "../../utils/util";
import PageBase from "../PageBase";

export default function Skill() {
  const content = useSkillPageContext();

  return (
    <PageBase content={content}>
      {content.stacks.map((s) => (
        <Item key={slugify(s.category)} stack={s} />
      ))}
    </PageBase>
  );
}

function Item({ stack }: { stack: Skill }) {
  const skillId = slugify(stack.category);

  return (
    <section aria-labelledby={skillId}>
      <h2 id={skillId}>{stack.category}</h2>
      <ul>
        {stack.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
