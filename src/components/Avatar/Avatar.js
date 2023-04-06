import { Image, TouchableOpacity, View } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import AddAvatarIcon from "../svg/AddAvatarIcon";
import { AddAvatarIcon, RemoveAvatarIcon } from "../svg";
import avatarStyles from "./AvatarStyles";
import { useState } from "react";

const Avatar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <TouchableOpacity
          style={avatarStyles.avatarUnderlay}
          activeOpacity={0.8}
          onPress={() => {
            console.log("future remove avatar logic");
          }}
        >
          <Image
            style={{ borderRadius: 16 }}
            source={require("../../images/avatar.jpg")}
          />
          <RemoveAvatarIcon style={avatarStyles.removeAvatarIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={avatarStyles.avatarUnderlay}
          activeOpacity={0.8}
          onPress={() => {
            console.log("future add avatar logic");
          }}
        >
          <AddAvatarIcon style={avatarStyles.addAvatarIcon} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Avatar;
