import {
  useEducationPageContext,
  type Degree,
} from "../../contexts/educationContext";
import PageBase from "../PageBase";

export default function Education() {
  const content = useEducationPageContext();
  return (
    <PageBase content={content}>
      {content.degrees.map((d, i) => (
        <Item key={i} degreeData={d} />
      ))}
    </PageBase>
  );
}

function Item({ degreeData }: { degreeData: Degree }) {
  return (
    <section>
      <header>
        <h2>{degreeData.qualification}</h2>
        <p>{degreeData.university}</p>
        <p>{degreeData.time}</p>
      </header>
      {degreeData.gpa && (
        <>
          <h3>GPA</h3>
          <p>{degreeData.gpa}</p>
        </>
      )}
      <h3>Achievements</h3>
      {degreeData.achievements.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </section>
  );
}
