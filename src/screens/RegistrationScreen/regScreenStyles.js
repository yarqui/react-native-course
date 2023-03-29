import { StyleSheet } from "react-native";

const regScreenStyles = StyleSheet.create({
  regUnderlay: {
    flex: 1,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  regAvatarUnderlay: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -48 }],

    width: 120,
    height: 120,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",

    // overflow: "hidden",
  },

  plusIcon: {
    position: "absolute",
    bottom: -12,
    right: -12,

    color: "#FF6C00",
  },
});

export default regScreenStyles;
