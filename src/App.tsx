import { Outlet } from "react-router";
import MobileRouter from "./components/router/MobileRouter";
import PcRouter from "./components/router/PcRouter";
import useMeasure from "./hooks/measureHook";
import { useMemo } from "react";
import { SettingContext } from "./contexts/settingContext";
import { getRem } from "./utils/util";
import type { IconType } from "react-icons";
import {
  LuBriefcaseBusiness,
  LuCircleUserRound,
  LuCoffee,
  LuCpu,
  LuFolderGit2,
  LuGraduationCap,
  LuHouse,
} from "react-icons/lu";
import { ThemeContext } from "./contexts/themeContext";
import useTheme from "./hooks/themeHook";
import PcFooter from "./components/router/PcFooter";

export type RouterData = {
  to: string;
  title: string;
  end?: boolean;
  icon: IconType;
}[];

const navList: RouterData = [
  { to: "/", title: "Home", end: true, icon: LuHouse },
  { to: "/about", title: "About", icon: LuCircleUserRound },
  { to: "/experience", title: "Experience", icon: LuBriefcaseBusiness },
  { to: "/project", title: "Project", icon: LuFolderGit2 },
  { to: "/skill", title: "Skill", icon: LuCpu },
  { to: "/education", title: "Education", icon: LuGraduationCap },
  { to: "/hobby", title: "Hobby", icon: LuCoffee },
];

function App() {
  const [ref, size] = useMeasure<HTMLDivElement>();
  const deviceWidth: { pixel: number; rem: number } = useMemo(() => {
    return { pixel: size.width, rem: getRem(size.width) };
  }, [size]);
  const [darkMode, toggleDarkMode] = useTheme();

  return (
    <div
      ref={ref}
      className="relative size-full flex flex-col justify-center items-center"
    >
      <ThemeContext value={{ darkMode, toggleDarkMode }}>
        <PcRouter routes={navList} />
        <MobileRouter routes={navList} />
        <SettingContext value={{ deviceWidth }}>
          <Outlet />
        </SettingContext>

        <PcFooter />
      </ThemeContext>
    </div>
  );
}

export default App;
