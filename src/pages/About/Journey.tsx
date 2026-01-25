// import { CalendarCog } from "lucide-react";
import type { CardColor, Heading } from "../../contexts/pageContext";

export default function Journey({ data }: { data: Heading[] }) {
  return (
    <ol className="relative w-full grid grid-cols-1 gap-y-6">
      {data.map((j, i, arr) => (
        <JourneyItem
          key={j.title}
          data={j}
          color={cardColors[i]}
          invert={i === arr.length - 1}
        />
      ))}
    </ol>
  );
}

function JourneyItem({
  data,
  color,
  invert,
}: {
  data: Heading;
  color: CardColor;
  invert?: boolean;
}) {
  return (
    <li
      className={`rounded-2xl p-5 md:p-8 flex flex-col xs:flex-row gap-3 xs:gap-4 md:gap-6 border-l-4 ${color.bg} ${color.border}`}
    >
      <div
        className={`flex-none size-10 xs:size-12 md:size-14 rounded-xl flex justify-center items-center text-lg xs:text-xl md:text-2xl ${color.icon.text} ${color.icon.bg}`}
      >
        {data.tag && <data.tag.icon />}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-2 md:gap-4 mb-3">
          <h3 className={`${invert && "title-color-invert"}`}>{data.title}</h3>
          {data.tag?.text && (
            <span
              className={`px-3 py-1 text-xs md:text-sm font-semibold rounded-full ${color.tags ? color.tags[0].text : ""} ${color.tags ? color.tags[0].bg : ""}`}
            >
              {data.tag?.text}
            </span>
          )}
        </div>
        <p className={`text-sm md:text-lg ${invert && "text-color-invert"}`}>
          {data.desc}
        </p>
      </div>
    </li>
  );
}

const cardColors: CardColor[] = [
  {
    icon: {
      text: "text-tone1-400",
      bg: "bg-tone1-100",
    },
    bg: "bg-white",
    border: "border-tone1-400",
    tags: [
      {
        text: "text-tone1-700",
        bg: "bg-tone1-50",
      },
    ],
  },
  {
    icon: {
      text: "text-tone2-400",
      bg: "bg-tone2-100",
    },
    bg: "bg-white",
    border: "border-tone2-400",
    tags: [
      {
        text: "text-tone2-700",
        bg: "bg-tone2-50",
      },
    ],
  },
  {
    icon: {
      text: "text-tone3-400",
      bg: "bg-tone3-100",
    },
    bg: "bg-white",
    border: "border-tone3-400",
    tags: [
      {
        text: "text-tone3-700",
        bg: "bg-tone3-50",
      },
    ],
  },
  {
    icon: {
      text: "text-tone4-400",
      bg: "bg-tone4-100",
    },
    bg: "bg-white",
    border: "border-tone4-400",
    tags: [
      {
        text: "text-tone4-700",
        bg: "bg-tone4-50",
      },
    ],
  },
  {
    icon: {
      text: "text-tone1-400",
      bg: "bg-tone1-500/20",
    },
    bg: "bg-color-invert",
    border: "border-tone1-400",
  },
];

// export default function Journey({ journey }: { journey: DescriptiveItem[] }) {
//   return (
//     <ol className="space-y-12">
//       <Articles listData={journey.slice(0, -1)} />
//       <BaseArticle data={journey[journey.length - 1]} />
//     </ol>
//   );
// }

// function Articles({ listData }: { listData: DescriptiveItem[] }) {
//   return (
//     <>
//       {listData.map((data) => (
//         <li
//           key={data.title}
//           className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 gap-y-2"
//         >
//           <div className="size-16 bg-sky-600 rounded-full flex justify-center items-center">
//             <CalendarCog className="stroke-white size-10" />
//           </div>
//           <div className="flex flex-col justify-center">
//             <h3>{data.title}</h3>
//             <span className="text-sm font-semibold text-muted block">
//               {data.subtitle}
//             </span>
//           </div>
//           <p className="col-span-2 sm:col-start-2 sm:col-span-1">{data.desc}</p>
//         </li>
//       ))}
//     </>
//   );
// }

// function BaseArticle({ data }: { data: DescriptiveItem }) {
//   return (
//     <li key={data.title} className="w-full rounded-xl bg-gray-700">
//       <article className="text-white p-6 space-y-4">
//         <h3 className="text-white">{data.title}</h3>
//         <p className="text-white">{data.desc}</p>
//       </article>
//     </li>
//   );
// }
