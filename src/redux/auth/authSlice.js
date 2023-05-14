import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  avatar: null,
  isCurrentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
