import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Project/Project";
import Skill from "./pages/Skill/Skill";
import Education from "./pages/Education/Education";
import Hobby from "./pages/Hobby/Hobby";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="skill" element={<Skill />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="hobby" element={<Hobby />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
