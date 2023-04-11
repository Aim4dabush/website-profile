//components
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

//styles
import styles from "./SocialMedia.module.scss";

const SocialMedia = ({ open }) => {
  return (
    <ul
      className={`${styles.list} ${open ? styles.menuOpen : styles.menuClose}`}
    >
      <li>
        <a
          className={styles.link}
          href="https://github.com/Aim4dabush"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className={styles.txt}>Github</span>
          <FaGithubSquare className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/ed-arasato-74614112a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className={styles.txt}>LinkedIn</span>
          <FaLinkedin className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
