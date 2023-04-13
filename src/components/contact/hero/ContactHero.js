//images
import Pipeline from "../../../assets/page-hero/pipeline.png";

//styles
import styles from "./ContactHero.module.scss";

const HomeHero = () => {
  return <img className={styles.img} src={Pipeline} alt="pipeline" />;
};

export default HomeHero;
