import { motion, stagger, type Variants } from "motion/react";
import { useContext } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useFooterContext } from "../../contexts/footerContext";
import { ThemeContext } from "../../contexts/themeContext";
import ContactLink from "../page/ContactLink";

export default function MobileFooter() {
  const content = useFooterContext();
  const theme = useContext(ThemeContext);

  return (
    <motion.div
      variants={containerVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="w-[calc(100%-0.75rem)] shrink-0 flex flex-col items-center space-y-3 mb-15"
    >
      <motion.div
        variants={itemVariants}
        className="w-full px-9 flex justify-between items-center"
      >
        {/* Light/Dark mode toggle */}
        <button
          className="relative flex items-center gap-1 p-0.5 text-xl bg-slate-300/80 dark:bg-slate-600/80 text-slate-500/80 dark:text-slate-100/80 rounded-full cursor-pointer"
          onClick={theme.toggleDarkMode}
        >
          <div
            className={`absolute inset-0 flex items-center gap-1 p-0.5 ${theme.darkMode ? "justify-end" : "justify-start"}`}
          >
            <motion.div
              layout
              className="aspect-square h-full bg-white/80 dark:bg-slate-800/80 rounded-full"
            />
          </div>
          <div className="relative aspect-square p-1">
            <LuSun />
          </div>
          <div className="relative aspect-square p-1">
            <LuMoon />
          </div>
        </button>

        {/* Contacts */}
        <div className="flex items-center gap-2.5 text-2xl">
          {content.contact.map((c) => (
            <ContactLink
              key={c.href}
              data={c}
              className="text-slate-600/80 hover:text-slate-500/80 active:text-slate-500/80
              dark:text-slate-400/80 dark:hover:text-slate-300/80 dark:active:text-slate-300/80
              transition"
            >
              <c.icon />
            </ContactLink>
          ))}
        </div>
      </motion.div>

      {/* Splitter */}
      <motion.div
        variants={itemVariants}
        className="w-full h-px bg-linear-to-r from-transparent via-slate-400 dark:via-slate-500 to-transparent"
      />

      {/* Declaration */}
      <motion.p
        variants={itemVariants}
        className="text-slate-400 dark:text-slate-500 text-xs md:text-sm"
      >
        {content.declaration.replace("{{year}}", `${new Date().getFullYear()}`)}
      </motion.p>
    </motion.div>
  );
}

const containerVariants: Variants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.7 }) },
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
