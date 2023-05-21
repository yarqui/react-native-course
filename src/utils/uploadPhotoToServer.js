import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/config";

export const uploadPhotoToServer = async (photo, screenName) => {
  // manipulates the image provided via uri. 2nd arg - actions, 3d - save options
  const { uri } = await manipulateAsync(photo, [{ resize: { width: 600 } }], {
    compress: 0.8,
    format: SaveFormat.JPEG,
  });
  // fetches photo URL from state
  const response = await fetch(uri);
  // creates a Binary Large Object file from a relative path of the photo
  const file = await response.blob();
  const photoId = Date.now().toString();
  // returns a StorageReference for the given url.
  const storageRef =
    screenName === "postsScreen"
      ? ref(storage, `postsImages/img-${photoId}`)
      : ref(storage, `avatarImages/img-${photoId}`);
  try {
    // uploads file to the storage reference
    await uploadBytes(storageRef, file);
    // returns the download URL for the storage ref
    const processedImg = await getDownloadURL(storageRef);
    return processedImg;
  } catch (error) {
    console.log("error:", error);
    console.log("error.message:", error.message);
  }
};
