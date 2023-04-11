import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./components/navbar/Navbar";

//styles
import styles from "./App.module.scss";

function App() {
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
