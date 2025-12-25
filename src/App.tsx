import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import MobileRouter from "./components/router/MobileRouter";
import PcRouter from "./components/router/PcRouter";

export type RouterData = { to: string; title: string; end?: boolean }[];

const navList: RouterData = [
  { to: "/", title: "Home", end: true },
  { to: "/about", title: "About" },
  { to: "/experience", title: "Experience" },
  { to: "/project", title: "Project" },
  { to: "/skill", title: "Skill" },
  { to: "/education", title: "Education" },
  { to: "/hobby", title: "Hobby" },
];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <div className="relative size-full flex flex-col justify-center items-center">
      <PcRouter routes={navList} />
      <MobileRouter routes={navList} />
      <div className="pt-23 max-w-4xl lg:pt-10 ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
