import { query, where, collection, getDocs } from "firebase/firestore";
import { postsSlice } from "./postsSlice";
import { db } from "../../../firebase/config";

const { updateOwnPosts } = postsSlice.actions;

export const getOwnPosts = () => async (dispatch, getState) => {
  const { userId } = getState().auth;

  try {
    const allPosts = [];
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((post) => {
      allPosts.push({ ...post.data(), postId: post.id });
    });

    dispatch(updateOwnPosts(allPosts));
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
