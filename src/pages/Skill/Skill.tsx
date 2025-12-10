import { useSkillPageContext } from "../../contexts/skillContext";

export default function Skill() {
  const skillContent = useSkillPageContext();

  return <div>{skillContent.title}</div>;
}
