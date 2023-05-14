import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSlice } from "./authSlice";
import { auth } from "../../../firebase/config";

export const authRegistration =
  ({ login, email, password }) =>
  async (dispatch) => {
    try {
      const normalizedEmail = email.toLocaleLowerCase().trim();
      const user = await createUserWithEmailAndPassword(
        auth,
        normalizedEmail,
        password
      );
      console.log("user:", user);
    } catch (error) {
      console.log("error:", error);
      console.log("error.message:", error.message);
    }
  };

export const authLogin = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};

export const authLogout = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
