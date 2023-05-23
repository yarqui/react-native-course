import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  getCountFromServer,
  updateDoc,
} from "firebase/firestore";
import { postsSlice } from "./postsSlice";
import { db } from "../../../firebase/config";
import { uploadPhotoToServer } from "../../utils/uploadPhotoToServer";

const { updateOwnPosts, updateAllPosts, updateComments } = postsSlice.actions;

export const getAllPosts = () => async (dispatch, _) => {
  try {
    let allPosts = [];
    const postsQuery = query(collection(db, "posts"));
    const postsSnapshot = await getDocs(postsQuery);

    // we use for of loop to use await
    for (const post of postsSnapshot.docs) {
      const postWithId = { ...post.data(), postId: post.id };
      const commentsQuery = query(collection(db, "posts", post.id, "comments"));
      const commentsSnapshot = await getCountFromServer(commentsQuery);
      const commentsQuantity = commentsSnapshot.data().count;
      console.log("commentsQuantity:", commentsQuantity);

      await updateDoc(post.ref, { comments: commentsQuantity });

      allPosts.push({ ...postWithId, comments: commentsQuantity });
    }

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
    let ownPosts = [];
    // creates a query with filter
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    // executes the query and returns the results as a QuerySnapshot
    const postsSnapshot = await getDocs(q);
    postsSnapshot.forEach((post) => {
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

export const uploadPostToServer = (post, screenName) => async (_, getState) => {
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
    // getAllPosts();
    // getOwnPosts();
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};

export const uploadComments =
  (postId, comment) => async (dispatch, getState) => {
    const { userId } = getState().auth;

    try {
      await addDoc(collection(db, "posts", postId, "comments"), {
        ...comment,
        userId,
      });
      dispatch(getAllPosts());
      dispatch(getOwnPosts());
    } catch (error) {
      console.log("error:", error);
      console.log("error.message:", error.message);
    }
  };

export const getCommentsByPostId = (postId) => async (dispatch, _) => {
  try {
    let postComments = [];
    const commentsRef = collection(db, "posts", postId, "comments");
    const q = query(commentsRef);
    const commentsSnapshot = await getDocs(q);

    commentsSnapshot.forEach((comment) => postComments.push(comment.data()));
    dispatch(updateComments(postComments));
    // TODO: should we return anything here?
    return postComments;
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
