//images
import Lanikai from "../../../assets/image/page-hero/Lanikai.png";

//styles
import styles from "./AboutHero.module.scss";

const HomeHero = () => {
  return <img className={styles.img} src={Lanikai} alt="lanikai" />;
};

export default HomeHero;
