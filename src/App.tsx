import { Outlet } from "react-router";
import MobileRouter from "./components/router/MobileRouter";
import PcRouter from "./components/router/PcRouter";
import {
  House,
  CircleUserRound,
  BriefcaseBusiness,
  FolderGit2,
  Cpu,
  GraduationCap,
  Coffee,
  type LucideProps,
} from "lucide-react";
import useMeasure from "./hooks/measureHook";
import { useMemo } from "react";
import { SettingContext } from "./contexts/settingContext";
import { getRem } from "./utils/util";

export type RouterData = {
  to: string;
  title: string;
  end?: boolean;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}[];

const navList: RouterData = [
  { to: "/", title: "Home", end: true, icon: House },
  { to: "/about", title: "About", icon: CircleUserRound },
  { to: "/experience", title: "Experience", icon: BriefcaseBusiness },
  { to: "/project", title: "Project", icon: FolderGit2 },
  { to: "/skill", title: "Skill", icon: Cpu },
  { to: "/education", title: "Education", icon: GraduationCap },
  { to: "/hobby", title: "Hobby", icon: Coffee },
];

function App() {
  const [ref, size] = useMeasure<HTMLDivElement>();
  const deviceWidth: { pixel: number; rem: number } = useMemo(() => {
    return { pixel: size.width, rem: getRem(size.width) };
  }, [size]);

  return (
    <div
      ref={ref}
      className="relative size-full flex flex-col justify-center items-center"
    >
      <PcRouter routes={navList} />
      <MobileRouter routes={navList} />
      <div className="mx-8 lg:mx-0 max-w-4xl">
        <SettingContext value={{ deviceWidth }}>
          <Outlet />
        </SettingContext>
      </div>
    </div>
  );
}

export default App;
