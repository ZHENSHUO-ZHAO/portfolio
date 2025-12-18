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
import { homeContent, HomePageContext } from "./contexts/homeContext";
import { aboutContent, AboutPageContext } from "./contexts/aboutContext.ts";
import {
  experienceContent,
  ExperiencePageContext,
} from "./contexts/experienceContext.ts";
import {
  projectContent,
  ProjectPageContext,
} from "./contexts/projectContext.ts";
import { skillContent, SkillPageContext } from "./contexts/skillContext.ts";
import {
  educationContent,
  EducationPageContext,
} from "./contexts/educationContext.ts";
import { hobbyContent, HobbyPageContext } from "./contexts/hobbyContext.ts";
import type { ContextPageBase } from "./contexts/pageContext.ts";

const routes: {
  path?: string;
  content: ContextPageBase;
  PageContext: React.Context<unknown>;
  PageComponent: React.ComponentType;
}[] = [
  {
    content: homeContent,
    PageContext: HomePageContext as React.Context<unknown>,
    PageComponent: Home,
  },
  {
    path: "about",
    content: aboutContent,
    PageContext: AboutPageContext as React.Context<unknown>,
    PageComponent: About,
  },
  {
    path: "experience",
    content: experienceContent,
    PageContext: ExperiencePageContext as React.Context<unknown>,
    PageComponent: Experience,
  },
  {
    path: "project",
    content: projectContent,
    PageContext: ProjectPageContext as React.Context<unknown>,
    PageComponent: Project,
  },
  {
    path: "skill",
    content: skillContent,
    PageContext: SkillPageContext as React.Context<unknown>,
    PageComponent: Skill,
  },
  {
    path: "education",
    content: educationContent,
    PageContext: EducationPageContext as React.Context<unknown>,
    PageComponent: Education,
  },
  {
    path: "hobby",
    content: hobbyContent,
    PageContext: HobbyPageContext as React.Context<unknown>,
    PageComponent: Hobby,
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {routes.map((route) => (
            <Route
              index={route.path === undefined}
              path={route.path}
              element={
                <route.PageContext value={route.content}>
                  <route.PageComponent />
                </route.PageContext>
              }
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
