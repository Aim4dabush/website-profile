//components
import ResumeContent from "../../components/resume/content/ResumeContent";
import ResumeHero from "../../components/resume/hero/ResumeHero";
import ResumeTitle from "../../components/resume/hero-title/ResumeTitle";

//styles
import styles from "./Resume.module.scss";

const Resume = () => {
  return (
    <div className={styles.container}>
      <ResumeHero />
      <ResumeTitle />
      <ResumeContent />
    </div>
  );
};

export default Resume;
