import {
  useProjectPageContext,
  type ProjectCategory,
  type ProjectItem,
} from "../../contexts/projectContext";

export default function Project() {
  const content = useProjectPageContext();

  return (
    <main>
      <Category categoryData={content.projects.commercial} />
      <Category categoryData={content.projects.edutainment} />
      <Category categoryData={content.projects.research} />
    </main>
  );
}

function Category({ categoryData }: { categoryData: ProjectCategory }) {
  return (
    <section>
      <h2>{categoryData.category}</h2>
      <ol>
        {categoryData.items.map((item, i) => (
          <Item key={i} itemData={item} />
        ))}
      </ol>
    </section>
  );
}

function Item({ itemData }: { itemData: ProjectItem }) {
  return (
    <li>
      <h3>{itemData.title}</h3>
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
          <h5>Releases:</h5>
          <ol>
            {itemData.releases.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        </>
      )}
      <h5>Skills</h5>
      {
        <ol>
          {itemData.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      }
    </li>
  );
}
