import {
  useEducationPageContext,
  type Degree,
} from "../../contexts/educationContext";
import { slugify } from "../../utils/util";
import PageBase from "../PageBase";

export default function Education() {
  const content = useEducationPageContext();
  return (
    <PageBase content={content}>
      {content.degrees.map((d) => (
        <Item key={d.time} degreeData={d} />
      ))}
    </PageBase>
  );
}

function Item({ degreeData }: { degreeData: Degree }) {
  const degreeId = slugify(degreeData.qualification);

  return (
    <section aria-labelledby={degreeId}>
      <header>
        <h2 id={degreeId}>{degreeData.qualification}</h2>
        <p>{degreeData.university}</p>
        <p>
          <time>{degreeData.time}</time>
        </p>
      </header>
      {degreeData.gpa && (
        <>
          <h3>GPA</h3>
          <p>{degreeData.gpa}</p>
        </>
      )}
      <h3>Achievements</h3>
      <ul>
        {degreeData.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
