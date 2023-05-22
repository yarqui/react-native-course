import { query, where, collection, getDocs, addDoc } from "firebase/firestore";
import { postsSlice } from "./postsSlice";
import { db } from "../../../firebase/config";
import { uploadPhotoToServer } from "../../utils/uploadPhotoToServer";

const { updateOwnPosts, updateAllPosts } = postsSlice.actions;

export const getAllPosts = () => async (dispatch, _) => {
  try {
    const allPosts = [];
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((post) => {
      allPosts.push({ ...post.data(), postId: post.id });
    });
    dispatch(updateAllPosts(allPosts));
    return allPosts;
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};

export const getOwnPosts = () => async (dispatch, getState) => {
  const { userId } = getState().auth;
  try {
    const ownPosts = [];
    // creates a query with filter
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    // executes the query and returns the results as a QuerySnapshot
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((post) => {
      // data() retrieves all fields in the document as an Object.
      ownPosts.push({ ...post.data(), postId: post.id });
    });
    dispatch(updateOwnPosts(ownPosts));
    return ownPosts;
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};

export const uploadPostToServer =
  (post, screenName) => async (dispatch, getState) => {
    const { userId } = getState().auth;

    try {
      // uploads a photo to Storage & gets an imgURL from Storage
      const imgURL = await uploadPhotoToServer(post.photo, screenName);

      // add a post to collection in Database
      await addDoc(collection(db, "posts"), {
        ...post,
        userId,
        photo: imgURL,
      });
      // ❗ it appeared crucial to dispatch fetching posts HERE to update profile and posts screens
      getAllPosts();
      getOwnPosts();
      // dispatch(getAllPosts());
      // dispatch(getOwnPosts());
    } catch (error) {
      console.log("error:", error);
      console.log("error.message:", error.message);
    }
  };

export const uploadComments = (comment) => async (dispatch, getState) => {
  const { userId } = getState.auth();

  try {
    await addDoc(collection(db, "comments"), {
      ...comment,
      userId,
    });
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
