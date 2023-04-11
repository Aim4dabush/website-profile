import { useState } from "react";

//components
import Hero from "./hero/Hero";
import PageLinks from "./page-links/PageLinks";
import SocialMedia from "./social-media/SocialMedia";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

//styles
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const hamburgerHandler = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.nav}>
      <Hero />
      <button className={styles.btn} onClick={hamburgerHandler}>
        {open ? (
          <FaRegWindowClose className={styles.close} />
        ) : (
          <FaBars className={styles.hamburger} />
        )}
      </button>
      <div className={`${styles.linkContainer} ${open && styles.border}`}>
        <SocialMedia open={open} />
        <PageLinks open={open} />
      </div>
    </nav>
  );
};

export default Navbar;
