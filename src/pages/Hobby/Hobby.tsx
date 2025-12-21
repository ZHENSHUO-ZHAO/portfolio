import { useHobbyPageContext } from "../../contexts/hobbyContext";
import type { DescriptiveItem } from "../../contexts/pageContext";
import { slugify } from "../../utils/util";
import PageBase, { ArticleList, ItemList, Section } from "../PageBase";

export default function Hobby() {
  const content = useHobbyPageContext();
  const dailyId = slugify(content.daily.title);

  return (
    <PageBase
      content={content}
      headerElement={HobbyPageHeader}
      headerClassName="mb-8"
    >
      <Item
        title={content.qualifications.title}
        items={content.qualifications.certificates}
      />
      <Item title={content.benefits.title} items={content.benefits.reasons} />
      <Section id={dailyId} title={content.daily.title}>
        <p>{content.daily.desc}</p>
      </Section>
    </PageBase>
  );
}

function HobbyPageHeader(headingClassName: string) {
  const content = useHobbyPageContext();

  return (
    <>
      <h1 className={headingClassName}>{content.header.title}</h1>
      <p>{content.header.desc}</p>
      <ItemList listData={content.header.interests} />
    </>
  );
}

function Item({ title, items }: { title: string; items: DescriptiveItem[] }) {
  const titleId = slugify(title);

  return (
    <Section id={titleId} title={title}>
      <ArticleList listData={items} />
    </Section>
  );
}
