import { configureStore } from "@reduxjs/toolkit";

//slices
import projectsReducer from "./slices/projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
