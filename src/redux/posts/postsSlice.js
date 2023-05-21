import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  ownPosts: [],
  comments: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateAllPosts: (state, { payload }) => ({ ...state, posts: payload }),
    updateOwnPosts: (state, { payload }) => ({ ...state, ownPosts: payload }),
    updateComments: (state, { payload }) => ({ ...state, comments: payload }),
  },
});
