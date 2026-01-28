import { useEffect, useRef, useState } from "react";
import useMeasure from "../../hooks/measureHook";
import { NavLink } from "react-router";
import type { RouterData } from "../../App";
import { AnimatePresence, motion, stagger, type Variants } from "motion/react";
import { routerBgColor } from "./PcRouter";

export default function MobileRouter({ routes }: { routes: RouterData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, size] = useMeasure();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // Set the focus back to the toggle button when a NavLink is clicked. The aria-hidden of the nav element is set to true, while the focus in still on its child NavLink, which causes a Blocked aria-hidden warning from the browser. Hence, automatically shift the focus back to the toggle button to avoid this.
    toggleRef.current?.focus();
    setIsOpen(false);
  };

  return (
    <motion.div
      className={`fixed inset-0 z-50 lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      custom={size.height}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <MenuToggle ref={toggleRef} isOpen={isOpen} setIsOpen={setIsOpen} />
      <aside ref={ref} className="absolute inset-0">
        <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
        <nav
          aria-label="Navigation Menu"
          aria-hidden={!isOpen}
          className={`relative overflow-y-auto pt-17 w-fit min-w-23 max-w-full h-screen ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <BackgroundClip />
          <div className="relative">
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col gap-2"
                  id="mobile-navigation"
                >
                  {routes.map((item, i, arr) => (
                    <motion.li variants={itemVariants} key={item.title}>
                      <NavLink
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) =>
                          `relative pl-9 pr-20 mr-3 py-1 whitespace-nowrap flex items-center gap-4 text-slate-600 font-semibold ${
                            isActive
                              ? `border-l-4 ${i === arr.length - 1 ? "border-l-coffee-300 bg-coffee-400/20" : "border-l-accent bg-complement/10"}`
                              : "border-l-4 border-l-transparent"
                          }`
                        }
                        onClick={handleClick}
                      >
                        <item.icon size={20} />
                        <span className="text-lg">{item.title}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </aside>
    </motion.div>
  );
}

function MenuToggle({
  isOpen,
  setIsOpen,
  ref,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.Ref<HTMLButtonElement> | undefined;
}) {
  return (
    <button
      ref={ref}
      className="fixed top-5 left-8 z-1 size-10 p-2 cursor-pointer pointer-events-auto"
      onClick={() => setIsOpen((state) => !state)}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-controls="mobile-navigation"
    >
      <svg className="size-full" viewBox="0 0 23 23">
        <Path
          d="M 2 2.5 L 21 2.5"
          variants={{
            open: { d: "M 2 2.5 L 21 20.5" },
            closed: { d: "M 2 2.5 L 21 2.5" },
          }}
        />
        <Path
          d="M 2 11.5 L 21 11.5"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          d="M 2 20.5 L 21 20.5"
          variants={{
            open: { d: "M 2 20.5 L 21 2.5" },
            closed: { d: "M 2 20.5 L 21 20.5" },
          }}
        />
      </svg>
    </button>
  );
}

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

function Path(pathProps: PathProps) {
  return (
    <motion.path
      className="fill-transparent stroke-3 stroke-slate-800"
      strokeLinecap="round"
      {...pathProps}
    />
  );
}

const backgroundVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 52px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(24px at 52px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const listVariants: Variants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function BackgroundClip() {
  return (
    <motion.div
      variants={backgroundVariants}
      className={`absolute inset-0 pointer-events-none border-r border-white backdrop-blur-lg rounded-r-2xl mr-3 ${routerBgColor}`}
      style={{
        boxShadow: "5px 0 5px rgb(0 0 0 / 30%)",
      }}
    />
  );
}
