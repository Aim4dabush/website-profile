import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaSass,
} from "react-icons/fa";

//styles
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ id, img, languages, title }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const filterArr = [];
    const faLanguages = [
      {
        id: 1,
        icon: <FaCss3Alt />,
      },
      {
        id: 2,
        icon: <FaHtml5 />,
      },
      {
        id: 3,
        icon: <FaJsSquare />,
      },
      {
        id: 4,
        icon: <FaBootstrap />,
      },
      {
        id: 5,
        icon: <FaReact />,
      },
      {
        id: 6,
        icon: <FaSass />,
      },
    ];
    languages.forEach((language) => {
      let langIcon = faLanguages.find((lang) => {
        return language.id === lang.id;
      });
      filterArr.push(langIcon);
      setArr(filterArr);
    });
  }, [languages]);

  return (
    <NavLink to={`/projects/${id}`} className={styles.cardLink}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <img className={styles.img} src={img} alt={title} />
        </div>
        <div className={styles.cardHeader}>
          <h3>{title}</h3>
        </div>
        <div className={styles.cardContent}>
          {arr.map((icon) => {
            return <div key={icon.id}>{icon.icon}</div>;
          })}
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectCard;
