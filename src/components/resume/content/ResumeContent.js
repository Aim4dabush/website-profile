//components
import Resume from "../../../assets/tech_resume.pdf";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.resumeContainer}>
      <object className={styles.resume} data={Resume} type="application/pdf">
        Resume
      </object>
    </div>
  );
};

export default ResumeContent;
