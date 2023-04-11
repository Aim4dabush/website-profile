//components
import AboutExperience from "./experience/AboutExperience";
import AboutMessage from "./message/AboutMessage";

//styles
import styles from "./AboutContent.module.scss";

const AboutContent = () => {
  return (
    <div className={styles.contentContainer}>
      <AboutMessage />
      <AboutExperience />
    </div>
  );
};

export default AboutContent;
