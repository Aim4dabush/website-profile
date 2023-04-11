//components
import HomeContent from "../../components/home/content/HomeContent";
import HomeHero from "../../components/home/hero/HomeHero";
import HomeTitle from "../../components/home/hero-title/HomeTitle";

//styles
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeHero />
      <HomeTitle />
      <HomeContent />
    </div>
  );
};

export default Home;
