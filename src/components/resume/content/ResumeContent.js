//components
import Iframe from "react-iframe";
import Resume from "../../../assets/image/Tech Resume.pdf";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.iframeContainer}>
      <Iframe allowFullScreen="true" className={styles.resume} src={Resume} />
    </div>
  );
};

export default ResumeContent;
