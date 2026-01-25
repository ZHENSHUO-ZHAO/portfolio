import type { Job as JobType } from "../../contexts/experienceContext";
import type { CardColor } from "../../contexts/pageContext";
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
      text: "text-tone1-600",
      bg: "",
    }, // For company name
    bg: "bg-tone1-50/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone1-700",
        bg: "bg-tone1-500", // For the bullet point
        icon: "text-tone1-700/80",
        border: "border-tone1-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone1-900", bg: "" }, // For products heading
      {
        text: "text-tone1-700",
        bg: "",
        border: "border-tone1-700/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone2-600",
      bg: "",
    }, // For company name
    bg: "bg-tone2-50/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone2-700",
        bg: "bg-tone2-500", // For the bullet point
        icon: "text-tone2-700/80",
        border: "border-tone2-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone2-900", bg: "" }, // For products heading
      {
        text: "text-tone2-700",
        bg: "",
        border: "border-tone2-700/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone3-600",
      bg: "",
    }, // For company name
    bg: "bg-tone3-50/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone3-700",
        bg: "bg-tone3-500", // For the bullet point
        icon: "text-tone3-700/80",
        border: "border-tone3-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone3-900", bg: "" }, // For products heading
      {
        text: "text-tone3-700",
        bg: "",
        border: "border-tone3-700/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone4-600",
      bg: "",
    }, // For company name
    bg: "bg-tone4-50/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone4-700",
        bg: "bg-tone4-500", // For the bullet point
        icon: "text-tone4-700/80",
        border: "border-tone4-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone4-900", bg: "" }, // For products heading
      {
        text: "text-tone4-700",
        bg: "",
        border: "border-tone4-700/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-tone5-600",
      bg: "",
    }, // For company name
    bg: "bg-tone5-50/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-tone5-700",
        bg: "bg-tone5-500", // For the bullet point
        icon: "text-tone5-700/80",
        border: "border-tone5-500",
      }, // For time, checkmark, products titles and markets
      { text: "text-tone5-900", bg: "" }, // For products heading
      {
        text: "text-tone5-700",
        bg: "",
        border: "border-tone5-700/30",
      }, // For skills
    ],
  },
];

// For ping-pong pattern
const cycle: number = cardColors.length * 2 - 2;
