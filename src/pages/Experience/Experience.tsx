import { useExperiencePageContext } from "../../contexts/experienceContext";

export default function Experience() {
  const experienceContent = useExperiencePageContext();

  return <div>{experienceContent.title}</div>;
}
