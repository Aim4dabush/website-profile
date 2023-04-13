//components
import Resume_1 from "../../../assets/tech_resume-1.jpg";
import Resume_2 from "../../../assets/tech_resume-2.jpg";

//styles
import styles from "./ResumeContent.module.scss";

const ResumeContent = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href="https://drive.google.com/file/d/1bGaFXDadSQQ5JvfIa-dzRRD0qcZvUW1B/view?usp=share_link"
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        Download Resume
      </a>
      <div className={styles.resumeContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.resume} src={Resume_1} alt="Resume page 1" />
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.resume} src={Resume_2} alt="Resume page 2" />
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
