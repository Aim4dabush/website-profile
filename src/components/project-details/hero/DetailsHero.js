//images
import Makapuu from "../../../assets/image/page-hero/makapuu.png";

//styles
import styles from "./DetailsHero.module.scss";

const DetailsHero = () => {
  return <img className={styles.img} src={Makapuu} alt="makapuu" />;
};

export default DetailsHero;
