import {
  useProjectPageContext,
  type ProjectCategory,
  type ProjectItem,
} from "../../contexts/projectContext";
import { slugify } from "../../utils/util";
import React, { useEffect, useState, type ReactNode } from "react";
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
import ProjectOutlineFx from "./ProjectOutlineFx";
import { useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { shadowAnim, transition, upAnim_2px } from "../../utils/constants";

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
      <p className="w-full text-center text-slate-600 dark:text-slate-400 text-sm md:text-base lg:text-lg mb-8 md:mb-12">
        <span className="font-semibold">{categoryData.category}</span>
        <span>: {categoryData.definition}</span>
      </p>

      <div className="w-full space-y-6 md:space-y-7 lg:space-y-8">
        {categoryData.items.map((item) => (
          <Item
            key={item.id}
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
  const { hash } = useLocation();
  const [showFx, setShowFx] = useState(false);

  useEffect(() => {
    if (!hash) return;
    if (hash !== `#${itemData.id}`) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowFx(true);

    const timer = setTimeout(() => {
      setShowFx(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [hash, itemData.id]);

  return (
    <article
      aria-labelledby={itemData.id}
      id={itemData.id}
      className={`relative bg-linear-to-br ${color.bg} to-white dark:to-slate-900 border ${color.border} rounded-2xl p-5 md:p-7 lg:p-8 shadow-sm`}
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
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
        className={`px-3 md:px-4 py-2 w-fit ${color.icon.bg} text-white text-xs font-semibold rounded-full mb-6 flex flex-wrap gap-1 items-center`}
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
            itemClassname={`gap-1.5 px-3 md:px-4 py-1 md:py-2 ${color.tags![0].bg} rounded-lg text-sm font-medium ${color.tags![0].icon} border ${color.tags![0].border}
            ${color.tags![0].shadow} ${upAnim_2px}  ${transition}`}
            defaultIcon={FaStar}
          />
        </SubSection>
      )}

      {/* Skills */}
      <SubSection title="Key Technologies" color={color}>
        <SkillList
          data={itemData.skills}
          ulClassName="gap-2"
          liClassName={`flex justify-center items-center gap-1.5 px-3 md:px-4 py-1 md:py-2 ${color.tags![0].bg} ${color.tags![0].icon} text-sm font-medium rounded-lg border ${color.tags![0].border}
          ${color.tags![0].shadow} ${upAnim_2px} ${transition}`}
        />
      </SubSection>

      {/* Tags */}
      <TagList
        data={itemData.tags}
        containerClassName="gap-2 md:gap-3"
        itemClassname={`gap-2 px-3 md:px-4 py-2 ${color.tags![1].bg} rounded-lg text-sm font-medium ${color.tags![1].text}
        ${color.tags![1].shadow} ${upAnim_2px} ${transition}`}
      />

      <AnimatePresence>{showFx && <ProjectOutlineFx />}</AnimatePresence>
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
      className={`bg-white dark:bg-slate-950/50 rounded-xl p-4 md:p-5 border ${color.border} mb-4 md:mb-6`}
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
    icon: { text: "", bg: "bg-tone1-600" },
    bg: "from-tone1-50/70 dark:from-tone1-900/30",
    border: "border-tone1-600/10 dark:border-tone1-300/10",
    tags: [
      {
        text: "text-tone1-900 dark:text-tone1-400", // For sub-section heading
        icon: "text-tone1-600 [&>span]:text-tone1-700 dark:text-tone1-400 dark:[&>span]:text-tone1-200", // For sub-section tag list
        bg: "bg-tone1-100/30 dark:bg-tone1-800/30", // For sub-section tag list
        border: "border-tone1-600/10 dark:border-tone1-700/80", // For sub-section tag list
        shadow: shadowAnim.tone1,
      },
      {
        text: "text-tone1-600 [&>span]:text-tone1-700 dark:text-tone1-400 dark:[&>span]:text-tone1-200", // For bottom tag list
        bg: "bg-tone1-600/10 dark:bg-tone1-900/40", // For bottom tag list
        shadow: shadowAnim.tone1,
      },
    ],
  },
  {
    icon: { text: "", bg: "bg-tone3-600" },
    bg: "from-tone3-50/70 dark:from-tone3-900/30",
    border: "border-tone3-600/10 dark:border-tone3-300/10",
    tags: [
      {
        text: "text-tone3-900 dark:text-tone3-400", // For sub-section heading
        icon: "text-tone3-600 [&>span]:text-tone3-700 dark:text-tone3-400 dark:[&>span]:text-tone3-200", // For sub-section tag list
        bg: "bg-tone3-100/30 dark:bg-tone3-800/30", // For sub-section tag list
        border: "border-tone3-600/10 dark:border-tone3-700/80", // For sub-section tag list
        shadow: shadowAnim.tone3,
      },
      {
        text: "text-tone3-600 [&>span]:text-tone3-700 dark:text-tone3-400 dark:[&>span]:text-tone3-200", // For bottom tag list
        bg: "bg-tone3-600/10 dark:bg-tone3-900/40", // For bottom tag list
        shadow: shadowAnim.tone3,
      },
    ],
  },
  {
    icon: { text: "", bg: "bg-tone5-600" },
    bg: "from-tone5-50/70 dark:from-tone5-900/30",
    border: "border-tone5-600/10 dark:border-tone5-300/10",
    tags: [
      {
        text: "text-tone5-900 dark:text-tone5-400", // For sub-section heading
        icon: "text-tone5-600 [&>span]:text-tone5-700 dark:text-tone5-400 dark:[&>span]:text-tone5-200", // For sub-section tag list
        bg: "bg-tone5-100/30 dark:bg-tone5-800/30", // For sub-section tag list
        border: "border-tone5-600/10 dark:border-tone5-700/80", // For sub-section tag list
        shadow: shadowAnim.tone5,
      },
      {
        text: "text-tone5-600 [&>span]:text-tone5-700 dark:text-tone5-400 dark:[&>span]:text-tone5-200", // For bottom tag list
        bg: "bg-tone5-600/10 dark:bg-tone5-900/40", // For bottom tag list
        shadow: shadowAnim.tone5,
      },
    ],
  },
];
