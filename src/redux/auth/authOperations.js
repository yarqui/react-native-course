import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncStorage } from "../../utils/asyncStorage";
import { authSlice } from "./authSlice";
import { auth } from "../../../firebase/config";

const { updateUserProfile, logoutUser } = authSlice.actions;

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
      await AsyncStorage.setItem([asyncStorage.email].toString(), email);
      await AsyncStorage.setItem([asyncStorage.password].toString(), password);

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
      await AsyncStorage.setItem([asyncStorage.email].toString(), email);
      await AsyncStorage.setItem([asyncStorage.password].toString(), password);

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
    const currentUserCredentials = [
      [asyncStorage.email].toString(),
      [asyncStorage.password].toString(),
    ];
    await signOut(auth);
    await dispatch(logoutUser());
    await AsyncStorage.multiRemove(currentUserCredentials);
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};

export const authStateChanged = () => async (dispatch) => {
  try {
    // gets email & password from AsyncStorage to dispatch it with updateUserProfile
    // ❗❗❗ it not safe to store a password in AsyncStorage!
    const authEmail = await AsyncStorage.getItem(
      [asyncStorage.email].toString()
    );
    const authPassword = await AsyncStorage.getItem(
      [asyncStorage.password].toString()
    );
    console.log("authEmail:", authEmail);
    console.log("authPassword:", authPassword);

    const userData = { userEmail: authEmail, password: authPassword };
    console.log("userData:", userData);

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
