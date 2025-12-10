import { useHobbyPageContext } from "../../contexts/hobbyContext";

export default function Hobby() {
  const hobbyContent = useHobbyPageContext();

  return <div>{hobbyContent.title}</div>;
}
