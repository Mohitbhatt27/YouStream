import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SideBarSlice";
import searchBarReducer from "./SearchBarSlice";

const appStore = configureStore({
  reducer: {
    sideSlice: sideBarReducer,
    searchSlice: searchBarReducer,
  },
});

export default appStore;
