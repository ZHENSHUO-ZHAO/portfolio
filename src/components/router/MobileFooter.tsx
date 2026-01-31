import { motion, stagger, type Variants } from "motion/react";
import { useContext } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useFooterContext } from "../../contexts/footerContext";
import { ThemeContext } from "../../contexts/themeContext";

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
          className="relative flex items-center gap-1 p-0.5 text-xl md:text-2xl bg-slate-300 text-slate-500 rounded-full cursor-pointer"
          onClick={theme.toggleDarkMode}
        >
          <div
            className={`absolute inset-0 flex items-center gap-1 p-0.5 ${theme.darkMode ? "justify-end" : "justify-start"}`}
          >
            <motion.div
              layout
              className="aspect-square h-full bg-white rounded-full"
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
        <div className="flex items-center gap-6 text-2xl">
          {content.contact.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.target}
              rel={c.rel}
              className="text-slate-600 hover:text-slate-500 transition"
            >
              <c.icon />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="w-full h-px bg-linear-to-r from-transparent via-slate-600 to-transparent"
      />

      {/* Declaration */}
      <motion.p
        variants={itemVariants}
        className="text-slate-600 text-xs md:text-sm"
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
