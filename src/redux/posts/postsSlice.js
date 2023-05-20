import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ownPosts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateOwnPosts: (state, { payload }) => ({ ...state, ownPosts: payload }),
  },
});
