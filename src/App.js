import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//styles
import "./App.module.scss";

function App() {
  return (
    <Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
