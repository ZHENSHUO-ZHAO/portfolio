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
  return (
    <div className="relative size-full flex flex-col justify-center items-center">
      <PcRouter routes={navList} />
      <MobileRouter routes={navList} />
      <div
        className={`max-w-4xl ${
          location.pathname !== "/" ? "pt-23 lg:pt-22" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
