import { createContext } from "react";

export type ThemeContext = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContext>({
  darkMode: false,
  toggleDarkMode: () => {},
});
