import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSlice } from "./authSlice";
import { auth } from "../../../firebase/config";

const { updateUserProfile } = authSlice.actions;

export const authRegistration =
  ({ userName, userEmail, password, avatar }) =>
  async (dispatch) => {
    try {
      const normalizedEmail = userEmail.toLocaleLowerCase().trim();
      await createUserWithEmailAndPassword(auth, normalizedEmail, password);

      // updates created user profile in Firebase with additional user credentials from the form
      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: avatar,
      });

      // gets user credentials from current user object in Firebase (from auth instance) and dispatches it to Redux state
      const { displayName, email, photoURL, uid } = auth.currentUser;
      dispatch(
        updateUserProfile({
          userId: uid,
          userName: displayName,
          userEmail: email,
          avatar: photoURL,
          isCurrentUser: true,
        })
      );
    } catch (error) {
      console.log("error:", error);
      console.log("error.message:", error.message);
    }
  };

export const authLogin =
  ({ userEmail, password }) =>
  async (dispatch) => {
    try {
      const normalizedEmail = userEmail.toLocaleLowerCase().trim();
      await signInWithEmailAndPassword(auth, normalizedEmail, password);

      // gets user credentials from current user object in Firebase (from auth instance) and dispatches it to Redux state
      const { displayName, email, photoURL, uid } = auth.currentUser;
      dispatch(
        updateUserProfile({
          userId: uid,
          userName: displayName,
          userEmail: email,
          avatar: photoURL,
          isCurrentUser: true,
        })
      );
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

export const authStateChanged = () => async (dispatch) => {
  try {
    const authEmail = await AsyncStorage.getItem("auth_email");
    const authPassword = await AsyncStorage.getItem("auth_password");
    console.log("authPassword:", authPassword);

    const userData = { userEmail: authEmail, userPassword: authPassword };
    console.log("userData:", userData);

    //
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
