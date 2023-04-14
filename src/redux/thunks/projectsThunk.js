import { projectsActions } from "../slices/projectsSlice";
import { docs } from "../../firebase/firebaseConfig";
import { getDocs } from "firebase/firestore";

export const getProjects = () => {
  return async (dispatch) => {
    const res = await getDocs(docs);
    const arr = [];
    res.forEach((doc) => {
      if (!doc.id) {
        return;
      }
      let data = doc.data();
      arr.push({
        id: doc.id,
        title: data.title,
        image: data.image,
        description: data.description,
        github: data.github,
        deploySite: data.deploySite,
        responsive: data.responsive,
        languages: data.languages,
      });
    });

    dispatch(projectsActions.setProjects(arr));
  };
};
