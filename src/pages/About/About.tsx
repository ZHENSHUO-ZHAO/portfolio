import { useAboutPageContext } from "../../contexts/aboutContext";

export default function About() {
  const aboutContent = useAboutPageContext();

  return <div>{aboutContent.title}</div>;
}
