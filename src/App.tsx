import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router";

const navList: { to: string; title: string; end?: boolean }[] = [
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
      <header className="sticky top-4 w-full">
        <nav aria-label="Primary" className="overflow-x-auto">
          <ul className="flex gap-2 flex-nowrap mx-4 w-fit">
            {navList.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className="whitespace-nowrap text-lg font-normal"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="size-full pt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
