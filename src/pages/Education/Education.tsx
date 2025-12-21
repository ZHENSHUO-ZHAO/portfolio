import {
  useEducationPageContext,
  type Degree,
} from "../../contexts/educationContext";
import { h3Style, slugify } from "../../utils/util";
import PageBase, { Section } from "../PageBase";

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
    <Section
      id={degreeId}
      title={degreeData.qualification}
      headerChildren={
        <div className="my-2">
          <p>{degreeData.university}</p>
          <p>
            <time>{degreeData.time}</time>
          </p>
        </div>
      }
    >
      {degreeData.gpa && (
        <>
          <h3 className={`${h3Style} inline-block mr-2 mt-2`}>GPA: </h3>
          <p className="inline-block">{degreeData.gpa}</p>
        </>
      )}
      <h3 className={`${h3Style} mt-2`}>Achievements</h3>
      <ul>
        {degreeData.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </Section>
  );
}
