//images
import Aloha from "../../../assets/image/page-hero/aloha.png";

//styles
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return <img className={styles.img} src={Aloha} alt="aloha" />;
};

export default HomeHero;
