import { StyleSheet } from "react-native";

const avatarStyles = StyleSheet.create({
  avatarUnderlay: {
    position: "relative",
    marginTop: -60,
    alignSelf: "center",
    width: 120,
    height: 120,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  addAvatarIcon: {
    position: "absolute",
    bottom: 10,
    right: -10,
  },

  removeAvatarIcon: {
    position: "absolute",
    bottom: 10,
    right: -20,
  },
});

export default avatarStyles;
