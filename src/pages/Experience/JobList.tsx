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
      text: "text-(--color-tone1-600)",
      bg: "",
    }, // For company name
    bg: "bg-(--color-tone1-50)/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-(--color-tone1-700)",
        bg: "bg-(--color-tone1-500)", // For the bullet point
        icon: "text-(--color-tone1-700)/80",
        border: "border-(--color-tone1-500)",
      }, // For time, checkmark, products titles and markets
      { text: "text-(--color-tone1-900)", bg: "" }, // For products heading
      {
        text: "text-(--color-tone1-700)",
        bg: "",
        border: "border-(--color-tone1-700)/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-(--color-tone2-600)",
      bg: "",
    }, // For company name
    bg: "bg-(--color-tone2-50)/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-(--color-tone2-700)",
        bg: "bg-(--color-tone2-500)", // For the bullet point
        icon: "text-(--color-tone2-700)/80",
        border: "border-(--color-tone2-500)",
      }, // For time, checkmark, products titles and markets
      { text: "text-(--color-tone2-900)", bg: "" }, // For products heading
      {
        text: "text-(--color-tone2-700)",
        bg: "",
        border: "border-(--color-tone2-700)/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-(--color-tone3-600)",
      bg: "",
    }, // For company name
    bg: "bg-(--color-tone3-50)/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-(--color-tone3-700)",
        bg: "bg-(--color-tone3-500)", // For the bullet point
        icon: "text-(--color-tone3-700)/80",
        border: "border-(--color-tone3-500)",
      }, // For time, checkmark, products titles and markets
      { text: "text-(--color-tone3-900)", bg: "" }, // For products heading
      {
        text: "text-(--color-tone3-700)",
        bg: "",
        border: "border-(--color-tone3-700)/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-(--color-tone4-600)",
      bg: "",
    }, // For company name
    bg: "bg-(--color-tone4-50)/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-(--color-tone4-700)",
        bg: "bg-(--color-tone4-500)", // For the bullet point
        icon: "text-(--color-tone4-700)/80",
        border: "border-(--color-tone4-500)",
      }, // For time, checkmark, products titles and markets
      { text: "text-(--color-tone4-900)", bg: "" }, // For products heading
      {
        text: "text-(--color-tone4-700)",
        bg: "",
        border: "border-(--color-tone4-700)/30",
      }, // For skills
    ],
  },
  {
    icon: {
      text: "text-(--color-tone5-600)",
      bg: "",
    }, // For company name
    bg: "bg-(--color-tone5-50)/40", // For the bg of all the sub-sections
    border: "",
    tags: [
      {
        text: "text-(--color-tone5-700)",
        bg: "bg-(--color-tone5-500)", // For the bullet point
        icon: "text-(--color-tone5-700)/80",
        border: "border-(--color-tone5-500)",
      }, // For time, checkmark, products titles and markets
      { text: "text-(--color-tone5-900)", bg: "" }, // For products heading
      {
        text: "text-(--color-tone5-700)",
        bg: "",
        border: "border-(--color-tone5-700)/30",
      }, // For skills
    ],
  },
];

// For ping-pong pattern
const cycle: number = cardColors.length * 2 - 2;
