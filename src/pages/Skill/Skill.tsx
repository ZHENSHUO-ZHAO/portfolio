import { useSkillPageContext, type Skill } from "../../contexts/skillContext";
import { slugify } from "../../utils/util";
import PageBase, { ItemList, Section } from "../PageBase";

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
    <Section id={skillId} title={stack.category}>
      <ItemList listData={stack.skills} />
    </Section>
  );
}
