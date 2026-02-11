import SkillList from "../../components/page/SkillList";
import type { CardColor } from "../../contexts/pageContext";
import { transition, upAnim_2px } from "../../utils/constants";

export default function Skill({
  data,
  color,
}: {
  data: string[];
  color: CardColor;
}) {
  return (
    <SkillList
      data={data}
      ulClassName="relative flex flex-wrap gap-1.5 md:gap-2"
      liClassName={`px-2 md:px-3 py-1 ${color.bg} ${color.tags && color.tags[2].text} text-xs font-medium rounded-full border ${color.tags && color.tags[2].border} flex justify-center items-center gap-1.5 ${color.tags && color.tags[2].shadow} ${upAnim_2px} ${transition}`}
    />
  );
}
