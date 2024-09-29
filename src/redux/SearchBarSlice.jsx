import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    searchText: "",
  },
  reducers: {
    searchTextChange: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { searchTextChange } = searchBarSlice.actions;
export default searchBarSlice.reducer;
