import { useProjectPageContext } from "../../contexts/projectContext";

export default function Project() {
  const projectContent = useProjectPageContext();

  return <div>{projectContent.title}</div>;
}
