import {
  useProjectPageContext,
  type ProjectCategory,
  type ProjectItem,
} from "../../contexts/projectContext";
import { jobSlug, slugify } from "../../utils/util";
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
      <ol className="space-y-8 sm:space-y-10">
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
      <article aria-labelledby={projectId} className="space-y-3 sm:space-y-4">
        <h3 id={projectId}>{itemData.title}</h3>
        <div className="sm:flex sm:flex-row sm:items-baseline sm:gap-3">
          <p className="text-neutral-900 font-medium">{itemData.company}</p>
          <p className="text-sm text-muted">
            <time>{itemData.time}</time>
          </p>
        </div>
        <p>{itemData.desc}</p>
        <div>
          <h4>Role</h4>
          <p> {itemData.role} </p>
        </div>
        {itemData.releases && (
          <div>
            <h4>Releases</h4>
            <ItemList listData={itemData.releases} ordered />
          </div>
        )}
        <div>
          <h4>Skills</h4>
          <ItemList listData={itemData.skills} ordered />
        </div>
      </article>
    </li>
  );
}
