import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getProjects } from "./redux/thunks/projectsThunk";

//components
import Navbar from "./components/navbar/Navbar";

//styles
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <Fragment>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
