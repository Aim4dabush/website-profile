//images
import Edward from "../../../assets/image/me.png";

//styles
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.img} src={Edward} alt="edward" />
    </div>
  );
};

export default Hero;
