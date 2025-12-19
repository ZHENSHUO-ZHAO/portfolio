import {
  useProjectPageContext,
  type ProjectCategory,
  type ProjectItem,
} from "../../contexts/projectContext";
import { jobSlug, slugify } from "../../utils/util";
import PageBase from "../PageBase";

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
    <section aria-labelledby={categoryId}>
      <h2 id={categoryId}>{categoryData.category}</h2>
      <ol>
        {categoryData.items.map((item) => (
          <Item
            key={jobSlug(item.time, item.title, item.company)}
            itemData={item}
          />
        ))}
      </ol>
    </section>
  );
}

function Item({ itemData }: { itemData: ProjectItem }) {
  const projectId = jobSlug(itemData.time, itemData.title, itemData.company);

  return (
    <li>
      <article aria-labelledby={projectId}>
        <h3 id={projectId}>{itemData.title}</h3>
        <h4>{itemData.company}</h4>
        <p>
          <time>{itemData.time}</time>
        </p>
        <p>{itemData.desc}</p>
        <p>
          <strong>Role:</strong> {itemData.role}
        </p>
        {itemData.releases && (
          <>
            <h4>Releases:</h4>
            <ol>
              {itemData.releases.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </>
        )}
        <h4>Skills</h4>
        {
          <ol>
            {itemData.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        }
      </article>
    </li>
  );
}
