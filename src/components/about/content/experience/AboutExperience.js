//components
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaFontAwesome,
  FaGit,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiRedux, SiStyledcomponents } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

//styles
import styles from "./AboutExperience.module.scss";

const AboutExperience = () => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.iconWrapper}>
        <FaAngular />
        <FaBootstrap />
        <FaCss3Alt />
        <FaFigma />
        <IoLogoFirebase />
        <FaFontAwesome />
      </div>
      <div className={styles.iconWrapper}>
        <FaGit />
        <FaGithubSquare />
        <FaHtml5 />
        <FaJsSquare />
        <SiMongodb />
        <TbBrandNextjs />
      </div>
      <div className={styles.iconWrapper}>
        <FaNode />
        <FaNodeJs />
        <FaReact />
        <SiRedux />
        <FaSass />
        <SiStyledcomponents />
      </div>
    </div>
  );
};

export default AboutExperience;
