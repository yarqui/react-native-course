import { StyleSheet } from "react-native";
import fonts from "../../utils/fonts";

const regScreenStyles = StyleSheet.create({
  regContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
  },

  regUnderlay: {
    borderWidth: 1,
    borderColor: "aqua",

    position: "relative",

    flex: 1,
    alignItems: "center",

    marginTop: 220,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  regAvatarUnderlay: {
    position: "absolute",
    top: -60,
    // or 👇
    // transform: [{ translateY: -60 }],

    width: 120,
    height: 120,

    borderRadius: 16,

    backgroundColor: "#F6F6F6",
  },

  plusIcon: {
    position: "absolute",
    top: 81,
    right: -12,
    color: "#FF6C00",
  },

  regTitle: {
    marginTop: 92,
    fontFamily: fonts.robotoMedium,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});

export default regScreenStyles;
