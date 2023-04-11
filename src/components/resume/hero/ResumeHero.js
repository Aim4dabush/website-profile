//images
import Makapuu from "../../../assets/image/page-hero/makapuu2.png";

//styles
import styles from "./ResumeHero.module.scss";

const HomeHero = () => {
  return <img className={styles.img} src={Makapuu} alt="makapuu" />;
};

export default HomeHero;
