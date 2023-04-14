import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaSass,
} from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailsContent.module.scss";

const DetailsContent = () => {
  const { title } = useParams();
  const data = useSelector((state) => state.projects.projects);
  const project = data.find((item) => {
    return item.id === title;
  });
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
    project.languages.forEach((language) => {
      let langIcon = faLanguages.find((lang) => {
        return language.id === lang.id;
      });
      filterArr.push(langIcon);
      setArr(filterArr);
    });
  }, [project]);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.imgWrapper}>
        <img className={styles.frame} src={project.image} alt={project.title} />
      </div>
      <div className={styles.contentWrapper}>
        <h2>{project.title}</h2>
        <p>
          {project.description} Responsive: {project.responsive}
        </p>
        <div className={styles.siteWrapper}>
          <p className={styles.link}>
            Github: <a href={project.github}>{project.github}</a>
          </p>
          <p className={styles.link}>
            Site: <a href={project.deploySite}>{project.deploySite}</a>
          </p>
        </div>
        <div className={styles.languageWrapper}>
          {arr.map((icon) => {
            return icon.icon;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
