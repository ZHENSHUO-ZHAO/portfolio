import { useHobbyPageContext } from "../../contexts/hobbyContext";
import type { DescriptiveItem } from "../../contexts/pageContext";
import { slugify } from "../../utils/util";
import PageBase from "../PageBase";

export default function Hobby() {
  const content = useHobbyPageContext();
  const dailyId = slugify(content.daily.title);

  return (
    <PageBase content={content} headerElement={HobbyPageHeader}>
      <Item
        title={content.qualifications.title}
        items={content.qualifications.certificates}
      />
      <Item title={content.benefits.title} items={content.benefits.reasons} />
      <section aria-labelledby={dailyId}>
        <h2 id={dailyId}>{content.daily.title}</h2>
        <p>{content.daily.desc}</p>
      </section>
    </PageBase>
  );
}

function HobbyPageHeader() {
  const content = useHobbyPageContext();

  return (
    <>
      <h1>{content.header.title}</h1>
      <p>{content.header.desc}</p>
      <ul>
        {content.header.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </>
  );
}

function Item({ title, items }: { title: string; items: DescriptiveItem[] }) {
  const titleId = slugify(title);

  return (
    <section aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <article>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
