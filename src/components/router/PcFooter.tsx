import { LuMoon, LuSun } from "react-icons/lu";
import { useFooterContext } from "../../contexts/footerContext";
import { useContext, useState } from "react";
import { motion } from "motion/react";
import { FaAngleUp } from "react-icons/fa6";
import { ThemeContext } from "../../contexts/themeContext";
import ContactLink from "../page/ContactLink";

export default function PcFooter() {
  const content = useFooterContext();
  const theme = useContext(ThemeContext);
  const [hide, setHide] = useState(true);

  return (
    <footer
      className={`z-50 fixed bottom-0 inset-x-0 hidden lg:flex flex-col items-center ${hide ? "translate-y-[calc(100%-1.5rem)]" : "translate-y-0"} transition-transform`}
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
      <div className="relative w-full bg-slate-200/85 backdrop-blur-md rounded-t-4xl px-[calc((100%-56rem-10px)*0.5)] py-2 flex justify-between items-center">
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
        <p className="absolute inset-x-0 my-auto text-center text-slate-400 text-xs md:text-sm pointer-events-none">
          {content.declaration.replace(
            "{{year}}",
            `${new Date().getFullYear()}`,
          )}
        </p>

        {/* Contacts */}
        <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl">
          {content.contact.map((c) => (
            <ContactLink
              key={c.href}
              data={c}
              className="text-slate-400 hover:text-slate-500 transition"
            >
              <c.icon />
            </ContactLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
