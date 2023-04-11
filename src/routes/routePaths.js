import { Route, Routes } from "react-router-dom";

//components
import App from "../App";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import ProjectDetails from "../pages/project-details/ProjectDetails";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";

const routePaths = () => {
  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<Home />} />
        <Route element={<About />} path="about" />
        <Route element={<Contact />} path="contact" />
        <Route element={<Projects />} path="projects" />
        <Route element={<ProjectDetails />} path="projects/:title" />
        <Route element={<Resume />} path="resume" />
      </Route>
    </Routes>
  );
};

export default routePaths;
