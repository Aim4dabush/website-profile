//components
import Resume from "../../../assets/image/tech_resume.pdf";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.iframeContainer}>
      <iframe className={styles.resume} src={Resume} title="pdf resume" />
    </div>
  );
};

export default ResumeContent;
