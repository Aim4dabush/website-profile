//components
import AboutContent from "../../components/about/content/AboutContent";
import AboutHero from "../../components/about/hero/AboutHero";
import AboutTitle from "../../components/about/hero-title/AboutTitle";

//styles
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <AboutHero />
      <AboutTitle />
      <AboutContent />
    </div>
  );
};

export default About;
