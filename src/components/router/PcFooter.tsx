import { LuMoon, LuSun } from "react-icons/lu";
import { useFooterContext } from "../../contexts/footerContext";
import { useContext, useState } from "react";
import { motion } from "motion/react";
import { FaAngleUp } from "react-icons/fa6";
import { ThemeContext } from "../../contexts/themeContext";

export default function PcFooter() {
  const content = useFooterContext();
  const theme = useContext(ThemeContext);
  const [hide, setHide] = useState(true);

  return (
    <footer
      className={`fixed bottom-0 inset-x-0 hidden lg:flex flex-col items-center ${hide ? "translate-y-[calc(100%-1.5rem)]" : "translate-y-0"} transition-transform`}
    >
      {/* Open/Close button */}
      <button
        className="cursor-pointer w-20 h-6 bg-slate-200/85 backdrop-blur-md rounded-t-md pt-px text-slate-400 hover:text-slate-500 transition"
        onClick={() => setHide((cur) => !cur)}
      >
        <FaAngleUp
          className={`mx-auto ${hide ? "rotate-0" : "rotate-180"} transition-transform`}
        />
      </button>

      {/* Footer Bar */}
      <div className="w-full bg-slate-200/85 backdrop-blur-md rounded-t-2xl px-8 py-2 flex justify-between items-center">
        {/* Light/Dark mode toggle */}
        <button
          className="relative flex items-center gap-1 p-0.5 text-xl md:text-2xl bg-slate-300 text-slate-400 rounded-full cursor-pointer"
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

        {/* Declaration */}
        <p className="text-slate-400 text-xs md:text-sm">
          {content.declaration.replace(
            "{{year}}",
            `${new Date().getFullYear()}`,
          )}
        </p>

        {/* Contacts */}
        <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl">
          {content.contact.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.target}
              rel={c.rel}
              className="text-slate-400 hover:text-slate-500 transition"
            >
              <c.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
