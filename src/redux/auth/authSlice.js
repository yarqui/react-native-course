import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  avatar: null,
  hasCurrentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => {
      const { userId, userName, userEmail, avatar, hasCurrentUser } = payload;
      return { ...state, userId, userName, userEmail, avatar, hasCurrentUser };
    },
    logoutUser: () => initialState,
  },
});
