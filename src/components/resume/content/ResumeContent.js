//components
import Iframe from "react-iframe";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.iframeContainer}>
      <embed
        alt="resume"
        className={styles.resume}
        src={process.env.PUBLIC_URL + "/tech_resume.pdf"}
      />
    </div>
  );
};

export default ResumeContent;
