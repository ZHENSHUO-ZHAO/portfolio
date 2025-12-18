import { NavLink, Outlet } from "react-router";

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
  return (
    <>
      <header>
        <nav aria-label="Primary">
          <ul>
            {navList.map((item) => (
              <li key={item.title}>
                <NavLink to={item.to} end={item.end}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
