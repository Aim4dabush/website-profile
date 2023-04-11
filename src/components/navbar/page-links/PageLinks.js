import { NavLink } from "react-router-dom";

//components
import {
  FaAddressCard,
  FaClipboardList,
  FaHome,
  FaLaptopCode,
  FaUser,
} from "react-icons/fa";

//styles
import styles from "./PageLinks.module.scss";

const PageLinks = ({ open }) => {
  return (
    <ul
      className={`${styles.list} ${open ? styles.menuOpen : styles.menuClose}`}
    >
      <li>
        <NavLink className={styles.link} to={"/"}>
          <span className={styles.txt}>Home</span>
          <FaHome className={styles.icon} />
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to={"/about"}>
          <span className={styles.txt}>About</span>
          <FaUser className={styles.icon} />
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to={"/resume"}>
          <span className={styles.txt}>Resume</span>
          <FaClipboardList className={styles.icon} />
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to={"/contact"}>
          <span className={styles.txt}>Contact</span>
          <FaAddressCard className={styles.icon} />
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to={"/projects"}>
          <span className={styles.txt}>Projects</span>
          <FaLaptopCode className={styles.icon} />
        </NavLink>
      </li>
    </ul>
  );
};

export default PageLinks;
