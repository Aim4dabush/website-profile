//components
import Iframe from "react-iframe";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.iframeContainer}>
      <Iframe
        allowFullScreen="true"
        className={styles.resume}
        src={process.env.PUBLIC_URL + "/tech_resume.pdf"}
      />
    </div>
  );
};

export default ResumeContent;
