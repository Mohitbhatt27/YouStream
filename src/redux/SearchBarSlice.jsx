import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    searchText: "",
    cache: {},
  },
  reducers: {
    searchTextChange: (state, action) => {
      state.searchText = action.payload;
    },
    setcache: (state, action) => {
      state.cache[action.payload.searchBarText] = action.payload.data;
    },
  },
});

export const { searchTextChange, setcache } = searchBarSlice.actions;
export default searchBarSlice.reducer;
