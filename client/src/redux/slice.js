import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
    anchorE1: null,
    anchorE2: null,
    darkMode: false,
    allPosts: [],
    myInfo: null,
    user: {},
    postId: null,
    searchedUsers: [],
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
    toggleColorMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    addToAllPost: (state, action) => {
      const newPostsArr = [...action.payload.posts];
      if (state.allPosts.length === 0) {
        state.allPosts = newPostsArr;
        return;
      }
      const existingPosts = [...state.allPosts];
      newPostsArr.forEach((e) => {
        const existingIndex = existingPosts.findIndex((i) => i._id === e._id);
        if (existingIndex !== -1) {
          existingPosts[existingIndex] = e;
        } else {
          existingPosts.push(e);
        }
      });
      state.allPosts = existingPosts;
    },

    addSingle: (state, action) => {
      let newArr = [...state.allPosts];
      let updatedArr = [action.payload.newPost, ...newArr];
      let uniqueArr = new Set();
      let uniquePosts = updatedArr.filter((e) => {
        if (!uniqueArr.has(e._id)) {
          uniqueArr.add(e);
          return true;
        }
        return false;
      });
      state.allPosts = [...uniquePosts];
    },
    addMyInfo: (state, action) => {
      state.myInfo = action.payload.me;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addPostId: (state, action) => {
      state.postId = action.payload;
    },
    deleteThePost: (state) => {
      let postArr = [...state.allPosts];
      let newArr = postArr.filter((e) => e._id !== state.postId);
      state.allPosts = newArr;
    },
    addToSearchedUsers: (state, action) => {
      state.searchedUsers = action.payload;
    },
  },
});

export const {
  toggleMainMenu,
  addToSearchedUsers,
  deleteThePost,
  addPostId,
  addUser,
  addMyInfo,
  addSingle,
  toggleMyMenu,
  addPostModal,
  editProfileModel,
  toggleColorMode,
  addToAllPost,
} = serviceSlice.actions;

export default serviceSlice.reducer;
