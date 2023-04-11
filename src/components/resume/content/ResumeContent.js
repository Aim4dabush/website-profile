//components
import Resume from "../../../assets/image/tech_resume.pdf";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.iframeContainer}>
      <embed className={styles.resume} src={Resume} />
    </div>
  );
};

export default ResumeContent;
