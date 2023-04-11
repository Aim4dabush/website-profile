//images
import Makapuu from "../../../assets/image/page-hero/makapuu.png";

//styles
import styles from "./ProjectsHero.module.scss";

const HomeHero = () => {
  return <img className={styles.img} src={Makapuu} alt="makapuu" />;
};

export default HomeHero;
