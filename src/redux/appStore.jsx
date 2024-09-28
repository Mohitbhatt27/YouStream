import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBarSlice";

const appStore = configureStore({
  reducer: {
    sideSlice: sideBarReducer,
  },
});

export default appStore;
