import {
  useEducationPageContext,
  type Degree,
} from "../../contexts/educationContext";
import { slugify } from "../../utils/util";
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
          <p className="text-neutral-900 font-medium">
            {degreeData.university}
          </p>
          <p className="text-sm text-neutral-600">
            <time>{degreeData.time}</time>
          </p>
        </div>
      }
    >
      {degreeData.gpa && (
        <>
          <h3 className="inline-block mr-2 mt-2">GPA: </h3>
          <p className="inline-block">{degreeData.gpa}</p>
        </>
      )}
      <h3 className="mt-4 mb-1">Achievements</h3>
      <ul className="space-y-1">
        {degreeData.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </Section>
  );
}
