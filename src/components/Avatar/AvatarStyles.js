import { StyleSheet } from "react-native";

const avatarStyles = StyleSheet.create({
  avatarUnderlay: {
    marginTop: -60,
    alignSelf: "center",
    width: 120,
    height: 120,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",

    // overflow: "hidden",
  },

  plusIcon: {
    bottom: -81,
    right: -107,
  },
});

export default avatarStyles;
