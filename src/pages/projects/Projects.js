//components
import ProjectsContent from "../../components/projects/content/ProjectsContent";
import ProjectsHero from "../../components/projects/hero/ProjectsHero";
import ProjectsTitle from "../../components/projects/hero-title/ProjectsTitle";

//styles
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.container}>
      <ProjectsHero />
      <ProjectsTitle />
      <ProjectsContent />
    </section>
  );
};

export default Projects;
