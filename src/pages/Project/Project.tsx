import {
  useProjectPageContext,
  type ProjectCategory,
  type ProjectItem,
} from "../../contexts/projectContext";
import { h3Style, h4Style, jobSlug, slugify } from "../../utils/util";
import PageBase, { ItemList, Section } from "../PageBase";

export default function Project() {
  const content = useProjectPageContext();

  return (
    <PageBase content={content}>
      <Category categoryData={content.projects.commercial} />
      <Category categoryData={content.projects.edutainment} />
      <Category categoryData={content.projects.research} />
    </PageBase>
  );
}

function Category({ categoryData }: { categoryData: ProjectCategory }) {
  const categoryId = slugify(categoryData.category);

  return (
    <Section id={categoryId} title={categoryData.category}>
      <ol className="space-y-6">
        {categoryData.items.map((item) => (
          <Item
            key={jobSlug(item.time, item.title, item.company)}
            itemData={item}
          />
        ))}
      </ol>
    </Section>
  );
}

function Item({ itemData }: { itemData: ProjectItem }) {
  const projectId = jobSlug(itemData.time, itemData.title, itemData.company);

  return (
    <li>
      <article aria-labelledby={projectId} className="space-y-2">
        <h3 className={h3Style} id={projectId}>
          {itemData.title}
        </h3>
        <div>
          <h4>{itemData.company}</h4>
          <p>
            <time>{itemData.time}</time>
          </p>
        </div>
        <p>{itemData.desc}</p>
        <div>
          <h4 className={h4Style}>Role</h4>
          <p> {itemData.role} </p>
        </div>
        {itemData.releases && (
          <div>
            <h4 className={h4Style}>Releases</h4>
            <ItemList listData={itemData.releases} ordered />
          </div>
        )}
        <div>
          <h4 className={h4Style}>Skills</h4>
          <ItemList listData={itemData.skills} ordered />
        </div>
      </article>
    </li>
  );
}
