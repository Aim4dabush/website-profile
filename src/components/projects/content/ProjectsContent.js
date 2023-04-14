import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegCircle,
} from "react-icons/fa";

//components
import ProjectCard from "./project-card/ProjectCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./ProjectsContent.module.scss";
import { useState } from "react";

const ProjectsContent = () => {
  const [current, setCurrent] = useState(0);
  const data = useSelector((state) => state.projects.projects);
  const length = data.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const dots = (current, length) => {
    let dotArr = [];
    let index = 0;
    while (index < length) {
      dotArr.push(
        <FaRegCircle
          key={index}
          className={`${styles.dot} ${
            index === current ? styles.currentDot : styles.nonCurrentDot
          }`}
        />
      );

      index++;
    }
    return dotArr;
  };

  return (
    <div className={styles.container}>
      <div className={styles.dotWrapper}>
        {dots(current, length).map((dot) => {
          return dot;
        })}
      </div>
      <div className={styles.projectWrapper}>
        <button className={styles.btn} onClick={prevSlide}>
          <FaAngleDoubleLeft
            className={`${styles.leftArrow} ${styles.arrow}`}
          />
        </button>
        {data.map((project, index) => {
          return (
            <div key={project.id} className={styles.card}>
              {index === current && (
                <ProjectCard
                  id={project.id}
                  img={project.image}
                  languages={project.languages}
                  title={project.title}
                />
              )}
            </div>
          );
        })}
        <button className={styles.btn} onClick={nextSlide}>
          <FaAngleDoubleRight
            className={`${styles.rightArrow} ${styles.arrow}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectsContent;
