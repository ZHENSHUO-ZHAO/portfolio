import type { Job as JobType } from "../../contexts/experienceContext";
import type { CardColor } from "../../contexts/pageContext";
import { shadowAnim } from "../../utils/constants";
import { Job } from "./Job";

export default function JobList({ data }: { data: JobType[] }) {
  return (
    <ol className="relative flex flex-col gap-6 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-13 xl:px-10">
      {data.map((j, i) => {
        const pos = i % cycle;
        const color = cardColors[pos < cardColors.length ? pos : cycle - pos];
        return <Job key={j.time} job={j} color={color} />;
      })}
    </ol>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      text: "text-tone1-600 dark:text-tone1-400",
      bg: "",
    }, // For company name
    bg: "bg-tone1-50/40 dark:bg-tone1-500/10", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone1-700 dark:text-tone1-400",
        bg: "bg-tone1-500", // For the bullet point
        icon: "text-tone1-700/80 dark:text-tone1-400", // For markets
        border: "border-tone1-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone1-900 dark:text-tone1-400", bg: "" }, // For products heading
      {
        text: "text-tone1-600 [&>span]:text-tone1-700 dark:text-tone1-400 dark:[&>span]:text-tone1-200",
        bg: "",
        border: "border-tone1-700/30 dark:border-tone1-500/20",
        shadow: shadowAnim.tone1,
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone2-600 dark:text-tone2-400",
      bg: "",
    }, // For company name
    bg: "bg-tone2-50/40 dark:bg-tone2-500/10", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone2-700 dark:text-tone2-400",
        bg: "bg-tone2-500", // For the bullet point
        icon: "text-tone2-700/80 dark:text-tone2-400", // For markets
        border: "border-tone2-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone2-900 dark:text-tone2-400", bg: "" }, // For products heading
      {
        text: "text-tone2-600 [&>span]:text-tone2-700 dark:text-tone2-400 dark:[&>span]:text-tone2-200",
        bg: "",
        border: "border-tone2-700/30 dark:border-tone2-500/20",
        shadow: shadowAnim.tone2,
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone3-600 dark:text-tone3-400",
      bg: "",
    }, // For company name
    bg: "bg-tone3-50/40 dark:bg-tone3-500/10", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone3-700 dark:text-tone3-400",
        bg: "bg-tone3-500", // For the bullet point
        icon: "text-tone3-700/80 dark:text-tone3-400", // For markets
        border: "border-tone3-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone3-900 dark:text-tone3-400", bg: "" }, // For products heading
      {
        text: "text-tone3-600 [&>span]:text-tone3-700 dark:text-tone3-400 dark:[&>span]:text-tone3-200",
        bg: "",
        border: "border-tone3-700/30 dark:border-tone3-500/20",
        shadow: shadowAnim.tone3,
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone4-600 dark:text-tone4-400",
      bg: "",
    }, // For company name
    bg: "bg-tone4-50/40 dark:bg-tone4-500/10", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone4-700 dark:text-tone4-400",
        bg: "bg-tone4-500", // For the bullet point
        icon: "text-tone4-700/80 dark:text-tone4-400", // For markets
        border: "border-tone4-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone4-900 dark:text-tone4-400", bg: "" }, // For products heading
      {
        text: "text-tone4-600 [&>span]:text-tone4-700 dark:text-tone4-400 dark:[&>span]:text-tone4-200",
        bg: "",
        border: "border-tone4-700/30 dark:border-tone4-500/20",
        shadow: shadowAnim.tone4,
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone5-600 dark:text-tone5-400",
      bg: "",
    }, // For company name
    bg: "bg-tone5-50/40 dark:bg-tone5-500/10", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone5-700 dark:text-tone5-400",
        bg: "bg-tone5-500", // For the bullet point
        icon: "text-tone5-700/80 dark:text-tone5-400", // For markets
        border: "border-tone5-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone5-900 dark:text-tone5-400", bg: "" }, // For products heading
      {
        text: "text-tone5-600 [&>span]:text-tone5-700 dark:text-tone5-400 dark:[&>span]:text-tone5-200",
        bg: "",
        border: "border-tone5-700/30 dark:border-tone5-500/20",
        shadow: shadowAnim.tone5,
      }, // For skills
    ],
  },
];

// For ping-pong pattern
const cycle: number = cardColors.length * 2 - 2;
