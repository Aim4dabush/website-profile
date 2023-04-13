//components
import ResumeContent from "../../components/resume/content/ResumeContent";
import ResumeHero from "../../components/resume/hero/ResumeHero";
import ResumeTitle from "../../components/resume/hero-title/ResumeTitle";

//styles
import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <section className={styles.container}>
      <ResumeHero />
      <ResumeTitle />
      <ResumeContent />
    </section>
  );
};

export default Resume;
