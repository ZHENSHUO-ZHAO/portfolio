import { useHomePageContext } from "../../contexts/homeContext";

export default function Home() {
  const homeContent = useHomePageContext();

  return <div>{homeContent.title}</div>;
}
