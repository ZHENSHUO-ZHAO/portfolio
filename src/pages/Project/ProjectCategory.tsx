import {
  useProjectPageContext,
  type ProjectCategory,
  type ProjectItem,
} from "../../contexts/projectContext";
import { jobSlug, slugify } from "../../utils/util";
import React, { type ReactNode } from "react";
import {
  FaBuilding,
  FaCalendar,
  FaStar,
  FaUser,
  FaArrowRight,
} from "react-icons/fa6";
import SkillList from "../../components/page/SkillList";
import type { CardColor, Tag } from "../../contexts/pageContext";
import type { IconType } from "react-icons";

export default function ProjectCategory({
  category,
}: {
  category: "commercial" | "edutainment" | "research";
}) {
  const categoryData: ProjectCategory =
    useProjectPageContext().projects[category];
  const categoryId = slugify(categoryData.category);
  const categoryIndex = Object.keys(useProjectPageContext().projects).indexOf(
    category,
  );

  return (
    <section className="relative" aria-labelledby={categoryId} id={categoryId}>
      <p className="w-full text-center text-slate-600 text-sm md:text-base lg:text-lg mb-8 md:mb-12">
        <span className="font-semibold">{categoryData.category}</span>
        <span>: {categoryData.definition}</span>
      </p>

      <div className="w-full space-y-6 md:space-y-7 lg:space-y-8">
        {categoryData.items.map((item) => (
          <Item
            key={jobSlug(item.time, item.title || "", item.company)}
            itemData={item}
            color={projectColors[categoryIndex]}
          />
        ))}
      </div>
    </section>
  );
}

function Item({
  itemData,
  color,
}: {
  itemData: ProjectItem;
  color: CardColor;
}) {
  const projectId = jobSlug(
    itemData.time,
    itemData.title || "",
    itemData.company,
  );

  return (
    <article
      aria-labelledby={projectId}
      id={projectId}
      className={`bg-linear-to-br ${color.bg} to-white border ${color.border} rounded-2xl p-5 md:p-7 lg:p-8 shadow-sm`}
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
        {itemData.title}
      </h3>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 font-semibold sm:font-normal text-sm text-slate-500 mb-3">
        {/* Company */}
        <span className="flex items-center gap-1">
          {itemData.isSelfemployed ? <FaUser /> : <FaBuilding />}
          <span>{itemData.company}</span>
        </span>

        {/* Time */}
        <span className="flex items-center gap-1">
          <FaCalendar />
          <time>{itemData.time}</time>
        </span>
      </div>

      {/* Roles */}
      <div
        className={`px-3 md:px-4 py-2 w-fit ${color.icon.bg} text-white text-xs font-semibold rounded-full mb-3 md:mb-4 flex flex-wrap gap-1 items-center`}
      >
        {itemData.roles.map((r, i) => (
          <React.Fragment key={`role_${i}`}>
            {i > 0 && <FaArrowRight />}
            <span>{r}</span>
          </React.Fragment>
        ))}
      </div>

      {/* Description */}
      <p className="text-base mb-4 md:mb-6">{itemData.desc}</p>

      {/* Release Titles */}
      {itemData.releases && (
        <SubSection title="Released Titles" color={color}>
          <TagList
            data={itemData.releases}
            containerClassName="gap-2"
            itemClassname={`gap-1.5 px-3 md:px-4 py-1 md:py-2 ${color.tags![0].bg} rounded-lg text-sm font-medium ${color.tags![0].icon} border ${color.tags![0].border}`}
            defaultIcon={FaStar}
          />
        </SubSection>
      )}

      {/* Skills */}
      <SubSection title="Key Technologies" color={color}>
        <SkillList
          data={itemData.skills}
          ulClassName="gap-2"
          liClassName={`flex justify-center items-center gap-1.5 px-3 md:px-4 py-1 md:py-2 ${color.tags![0].bg} ${color.tags![0].icon} text-sm font-medium rounded-lg border ${color.tags![0].border}`}
        />
      </SubSection>

      {/* Tags */}
      <TagList
        data={itemData.tags}
        containerClassName="gap-2 md:gap-3"
        itemClassname={`gap-2 px-3 md:px-4 py-2 ${color.tags![1].bg} rounded-lg text-sm font-medium ${color.tags![1].text}`}
      />
    </article>
  );
}

function SubSection({
  title,
  color,
  children,
}: {
  title: string;
  color: CardColor;
  children: ReactNode;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-4 md:p-5 border ${color.border} mb-4 md:mb-6`}
    >
      <p
        className={`text-xs font-bold ${color.tags![0].text} uppercase mb-2 md:mb-3`}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function TagList({
  data,
  containerClassName,
  itemClassname,
  defaultIcon,
}: {
  data: string[] | Tag[];
  containerClassName: string;
  itemClassname: string;
  defaultIcon?: IconType;
}) {
  const Icon = defaultIcon;

  return (
    <div className={`flex flex-wrap ${containerClassName}`}>
      {data.map((d) =>
        typeof d === "string" ? (
          <div key={d} className={`flex items-center ${itemClassname}`}>
            {Icon && <Icon />}
            <span>{d}</span>
          </div>
        ) : (
          <div key={d.text} className={`flex items-center ${itemClassname}`}>
            <d.icon />
            <span>{d.text}</span>
          </div>
        ),
      )}
    </div>
  );
}

const projectColors: CardColor[] = [
  {
    icon: { text: "", bg: "bg-(--color-tone1-600)" },
    bg: "from-(--color-tone1-50)/70",
    border: "border-(--color-tone1-600)/10",
    tags: [
      {
        text: "text-(--color-tone1-900)",
        icon: "text-(--color-tone1-700)",
        bg: "bg-(--color-tone1-100)/30",
        border: "border-(--color-tone1-600)/10",
      },
      {
        text: "text-(--color-tone1-700)",
        bg: "bg-(--color-tone1-600)/10",
      },
    ],
  },
  {
    icon: { text: "", bg: "bg-(--color-tone3-600)" },
    bg: "from-(--color-tone3-50)/70",
    border: "border-(--color-tone3-600)/10",
    tags: [
      {
        text: "text-(--color-tone3-900)",
        icon: "text-(--color-tone3-700)",
        bg: "bg-(--color-tone3-100)/30",
        border: "border-(--color-tone3-600)/10",
      },
      {
        text: "text-(--color-tone3-700)",
        bg: "bg-(--color-tone3-600)/10",
      },
    ],
  },
  {
    icon: { text: "", bg: "bg-(--color-tone5-600)" },
    bg: "from-(--color-tone5-50)/70",
    border: "border-(--color-tone5-600)/10",
    tags: [
      {
        text: "text-(--color-tone5-900)",
        icon: "text-(--color-tone5-700)",
        bg: "bg-(--color-tone5-100)/30",
        border: "border-(--color-tone5-600)/10",
      },
      {
        text: "text-(--color-tone5-700)",
        bg: "bg-(--color-tone5-600)/10",
      },
    ],
  },
];
