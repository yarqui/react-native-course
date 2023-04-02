import { Image, TouchableOpacity, View } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import AddAvatarIcon from "../svg/AddAvatarIcon";
import { AddAvatarIcon } from "../svg";
import avatarStyles from "./AvatarStyles";

const Avatar = () => {
  return (
    <>
      <TouchableOpacity
        style={avatarStyles.avatarUnderlay}
        activeOpacity={0.8}
        onPress={() => {
          console.log("future add avatar logic");
        }}
      >
        <AddAvatarIcon style={avatarStyles.plusIcon} />
      </TouchableOpacity>
    </>
  );
};

export default Avatar;

// {
/* <AntDesign
          name="pluscircle"
          size={25}
          style={avatarStyles.plusIcon}
        /> */
// }
// {
/* <Image
          style={{ borderRadius: 16 }}
          source={require("../../images/avatar.jpg")}
        /> */
// }
