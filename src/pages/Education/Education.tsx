import { useEducationPageContext } from "../../contexts/educationContext";

export default function Education() {
  const educationContent = useEducationPageContext();
  return <div>{educationContent.title}</div>;
}
