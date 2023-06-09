//components
import DetailsContent from "../../components/project-details/content/DetailsContent";
import DetailsHero from "../../components/project-details/hero/DetailsHero";
import DetailsTitle from "../../components/project-details/hero-title/DetailsTitle";

//styles
import styles from "./ProjectDetails.module.scss";

const ProjectDetails = () => {
  return (
    <section className={styles.container}>
      <DetailsHero />
      <DetailsTitle />
      <DetailsContent />
    </section>
  );
};

export default ProjectDetails;
