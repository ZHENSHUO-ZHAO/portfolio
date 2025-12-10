import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <>
      <div>My Portfolio</div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/skill">Skill</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/hobby">Hobby</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
