import { useHobbyPageContext } from "../../contexts/hobbyContext";
import type { DescriptiveItem } from "../../contexts/pageContext";
import PageBase from "../PageBase";

export default function Hobby() {
  const content = useHobbyPageContext();

  return (
    <PageBase content={content}>
      <section>
        <h2>{content.header.title}</h2>
        <p>{content.header.desc}</p>
        <ul>
          {content.header.interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </section>
      <Item
        title={content.qualifications.title}
        items={content.qualifications.certificates}
      />
      <Item title={content.benefits.title} items={content.benefits.reasons} />
      <section>
        <h3>{content.daily.title}</h3>
        <p>{content.daily.desc}</p>
      </section>
    </PageBase>
  );
}

function Item({ title, items }: { title: string; items: DescriptiveItem[] }) {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <article>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
