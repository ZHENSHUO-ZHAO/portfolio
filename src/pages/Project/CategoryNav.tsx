import { AnimatePresence, motion } from "motion/react";
import type { ProjectCategory } from "../../contexts/projectContext";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SettingContext } from "../../contexts/settingContext";
import type { CardColor } from "../../contexts/pageContext";

export default function CategoryNav({
  data,
  sectionRef,
}: {
  data: Record<string, ProjectCategory>;
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const ulRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const setting = useContext(SettingContext);
  const location = useLocation();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // When users navigate to the project page, it redirects to "project/commercial". So the pathname is "project/" before the redirect, and the category would become undefined if it were not set to the first category as the default value.
  const [activeCategory, setActiveCategory] = useState<string>(
    location.pathname.split("/")[2] || Object.keys(data)[0],
  );
  const navigate = useNavigate();

  const scrollUp = () => {
    let scrollTop = 0;
    const nav = navRef.current;
    const section = sectionRef.current;
    if (section && nav) {
      // The section refers to the section element containing this component. The section's offsetTop is its y position from the top of the page component. The scrollTop scrolls through the area, and then move down a bit, half of the nav's sticky top value, to avoid leaving too much empty space on the top.
      scrollTop =
        section.offsetTop - parseFloat(getComputedStyle(nav).top) * 0.5;
    }
    window.scrollTo({
      top: scrollTop,
      behavior: "instant",
    });
  };

  const handleClick = (category: string) => {
    scrollUp();
    setActiveCategory(category);
  };

  const scrollByItem = (direction: scrollDirection) => {
    const ul = ulRef.current;
    if (!ul) return;

    const links = Array.from(ul.children) as HTMLElement[];
    const currentIndex = links.findIndex(
      (el) => el.dataset.category === activeCategory,
    );

    let nextIndex = currentIndex;
    if (direction === "right" && currentIndex < links.length - 1) nextIndex++;
    if (direction === "left" && currentIndex > 0) nextIndex--;

    const nextLink = links[nextIndex];
    if (!nextLink) return;

    // The distance from the container’s left edge to the element’s left edge
    const offsetLeft = nextLink.offsetLeft;

    // Scroll so that the element is centered in the container
    const scrollTarget =
      offsetLeft - (ul.clientWidth - nextLink.clientWidth) / 2;

    ul.scrollTo({
      left: scrollTarget,
      behavior: "smooth", // only horizontal scroll
    });

    // Update the selected category
    setActiveCategory(nextLink.dataset.category!);
    scrollUp();
    navigate(nextLink.dataset.category!, { replace: false });
  };

  const scrollToActiveCategory = () => {
    const ul = ulRef.current;
    if (!ul) return;

    const links = Array.from(ul.children) as HTMLElement[];
    const activeLink = links.find(
      (el) => el.dataset.category === activeCategory,
    );
    if (!activeLink) return;

    const offsetLeft = activeLink.offsetLeft;
    const scrollTarget =
      Object.keys(data).indexOf(activeCategory) === 0
        ? 0
        : offsetLeft - (ul.clientWidth - activeLink.clientWidth) / 2;

    ul.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });
  };

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const updateScroll = useCallback(() => {
    const ul = ulRef.current;
    if (!ul) return;

    const pixel = setting.deviceWidth.pixel;
    if (pixel >= 520) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    } else {
      setCanScrollLeft(ul.scrollLeft > 0);
      setCanScrollRight(ul.scrollLeft + ul.clientWidth < ul.scrollWidth - 1);
    }
  }, [setting.deviceWidth.pixel]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateScroll();
    const ul = ulRef.current;
    if (!ul) return;
    ul.addEventListener("scrollend", updateScroll);
    return () => {
      ul.removeEventListener("scrollend", updateScroll);
    };
  }, [updateScroll, setting.deviceWidth]);

  useEffect(() => {
    // Scroll the nav to the active link
    scrollToActiveCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  return (
    <nav
      ref={navRef}
      aria-label="Project Category Navigation Bar"
      className="sticky top-20 lg:top-30 z-10 mb-4 w-full h-[46px] sm:h-[58px]"
    >
      {canScrollLeft && (
        <ScrollButton direction="left" callback={scrollByItem} />
      )}
      {canScrollRight && (
        <ScrollButton direction="right" callback={scrollByItem} />
      )}
      <ul
        ref={ulRef}
        className="absolute inset-x-0 flex items-center gap-2 sm:gap-4 rounded-full p-0.5 bg-slate-400/30 dark:bg-slate-700/70 backdrop-blur-sm overflow-x-scroll shadow-[0_10px_15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_18px_rgba(0,0,0,1)]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {Object.entries(data).map(([c, p], i) => (
          <li key={c} className="flex-1" data-category={c}>
            <NavLink
              to={c}
              className="relative flex justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3"
              onClick={() => handleClick(c)}
            >
              {({ isActive }) => (
                <>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="category-nav-bg"
                        className={`z-0 absolute inset-0 rounded-full ${navColors[i].bg}`}
                        transition={{
                          type: "tween",
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <p.icon
                    className={`z-10 relative ${activeCategory === c ? "text-white" : "text-muted"} text-base sm:text-xl transition-colors duration-500`}
                  />
                  <h2
                    className={`z-10 relative text-base sm:text-lg font-bold ${activeCategory === c ? "text-white" : "text-muted"} transition-colors duration-500`}
                  >
                    {c[0].toUpperCase() + c.slice(1)}
                  </h2>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="" />
    </nav>
  );
}

function ScrollButton({
  direction,
  callback,
}: {
  direction: scrollDirection;
  callback: (direction: scrollDirection) => void;
}) {
  return (
    <button
      onClick={() => callback(direction)}
      className={`absolute ${direction === "left" ? "-left-px" : "-right-px"} top-0 bottom-1 aspect-square px-2 z-20 flex items-center justify-center bg-slate-200/50 dark:bg-slate-500/50 backdrop-blur-xs rounded-full cursor-pointer border border-slate-200/50 dark:border-slate-500/50`}
    >
      {direction === "left" ? (
        <FaChevronLeft className="text-neutral-500 dark:text-neutral-300" />
      ) : (
        <FaChevronRight className="text-neutral-500 dark:text-neutral-300" />
      )}
    </button>
  );
}

type scrollDirection = "left" | "right";

const navColors: CardColor[] = [
  {
    icon: { text: "", bg: "" },
    bg: "bg-tone1-600/70 dark:bg-tone1-500/50",
    border: "",
  },
  {
    icon: { text: "", bg: "" },
    bg: "bg-tone3-600/70 dark:bg-tone3-500/50",
    border: "",
  },
  {
    icon: { text: "", bg: "" },
    bg: "bg-tone5-600/70 dark:bg-tone5-500/50",
    border: "",
  },
];
