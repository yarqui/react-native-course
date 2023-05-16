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

      // Sets email and password to AsyncStorage
      await AsyncStorage.setItem("auth_email", email);
      await AsyncStorage.setItem("auth_password", password);

      await dispatch(
        updateUserProfile({
          userId: uid,
          userName: displayName,
          userEmail: email,
          avatar: photoURL,
          hasCurrentUser: true,
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

      // Sets email and password to AsyncStorage
      await AsyncStorage.setItem("auth_email", email);
      await AsyncStorage.setItem("auth_password", password);

      await dispatch(
        updateUserProfile({
          userId: uid,
          userName: displayName,
          userEmail: email,
          avatar: photoURL,
          hasCurrentUser: true,
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
    // gets email & password from AsyncStorage to dispatch it with updateUserProfile
    // ❗❗❗ it not safe to store a password in AsyncStorage?
    const authEmail = await AsyncStorage.getItem("auth_email");
    const authPassword = await AsyncStorage.getItem("auth_password");
    console.log("authEmail:", authEmail);
    console.log("authPassword:", authPassword);

    // FIXME: why does key values in userData have double quotes?
    const userData = { userEmail: authEmail, password: authPassword };
    console.log("userData:", userData);

    // TODO: check userData after logout and clearing AsyncStorage. Maybe we should check only userData
    if (userData.userEmail) {
      try {
        await dispatch(authLogin(userData));
      } catch (error) {
        console.log("error:", error);
        console.log("error.message:", error.message);
      }
    }
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
