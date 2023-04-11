import { NavLink } from "react-router-dom";

//style
import styles from "./HomeContent.module.scss";

const HomeContent = () => {
  return (
    <p className={styles.contentContainer}>
      <span className={styles.aloha}></span>!{" "}
      <span className={styles.welcome}></span> to my website. You'll find my{" "}
      <NavLink className={styles.link} to={"/resume"}>
        resume
      </NavLink>
      ,{" "}
      <NavLink className={styles.link} to={"/projects"}>
        projects
      </NavLink>
      , and a way to{" "}
      <NavLink className={styles.link} to={"/contact"}>
        contact
      </NavLink>{" "}
      me. If you have the ability, you can simply hover Hawaiian words to get
      translations. I hope you enjoy surfing my site.
    </p>
  );
};

export default HomeContent;
