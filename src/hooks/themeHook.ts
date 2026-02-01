import { useCallback, useEffect, useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  const toggleDarkMode = useCallback(
    () =>
      setDarkMode((cur) => {
        localStorage.setItem("theme", !cur ? "dark" : "light");
        return !cur;
      }),
    [],
  );

  useEffect(() => {
    const root = document.documentElement;

    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode] as const;
}
