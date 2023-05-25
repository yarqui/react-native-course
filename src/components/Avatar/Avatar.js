import { Image, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import PropTypes from "prop-types";
import { AddAvatarIcon, RemoveAvatarIcon } from "../svg";
import avatarStyles from "./AvatarStyles";
import { selectUserId } from "../../redux/auth/authSelectors";
import { uploadPhotoToServer } from "../../utils/uploadPhotoToServer";
import { changeUserAvatar } from "../../redux/auth/authOperations";

const Avatar = ({ avatar, pickImageOnRegistration }) => {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  const pickImage = async () => {
    try {
      // Asks the user to grant permissions for accessing user's photo.
      let permissionResult = await requestMediaLibraryPermissionsAsync();
      if (permissionResult.status !== "granted") {
        alert("Permission to access Media Library is required!");
        return;
      }
      // Displays the system UI for choosing an image or a video from the phone's library
      let imgPickerResult = await launchImageLibraryAsync();

      if (imgPickerResult.canceled) return;

      const img = imgPickerResult.assets[0].uri;
      const uploadedImg = await uploadPhotoToServer(img, "avatar");

      await dispatch(changeUserAvatar(uploadedImg));
    } catch (error) {
      console.log("error.message:", error.message);
    }
  };

  return (
    <>
      {avatar ? (
        <TouchableOpacity
          style={{
            ...avatarStyles.avatarUnderlay,
          }}
          activeOpacity={0.8}
          onPress={() => {
            dispatch(changeUserAvatar(null));
          }}
        >
          <Image
            style={{ borderRadius: 16, height: 120, width: 120 }}
            source={{ uri: avatar }}
          />
          <RemoveAvatarIcon style={avatarStyles.removeAvatarIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={avatarStyles.avatarUnderlay}
          activeOpacity={0.8}
          onPress={userId ? pickImage : pickImageOnRegistration}
        >
          <AddAvatarIcon style={avatarStyles.addAvatarIcon} />
        </TouchableOpacity>
      )}
    </>
  );
};

Avatar.propTypes = {
  pickImageOnRegistration: PropTypes.func,
  avatar: PropTypes.string,
};

export default Avatar;
