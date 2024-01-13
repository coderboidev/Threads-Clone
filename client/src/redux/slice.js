import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
    anchorE1: null,
    anchorE2: null,
  },
  reducers: {
    toggleMainMenu: (state, action) => {
      state.anchorE1 = action.payload;
    },
    toggleMyMenu: (state, action) => {
      state.anchorE2 = action.payload;
    },
    addPostModal: (state, action) => {
      state.openAddPostModal = action.payload;
    },
    editProfileModel: (state, action) => {
      state.openEditProfileModal = action.payload;
    },
  },
});

export const {
  toggleMainMenu,
  toggleMyMenu,
  addPostModal,
  editProfileModel,
} = serviceSlice.actions;

export default serviceSlice.reducer;
