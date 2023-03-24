import { StyleSheet } from "react-native";
import fonts from "../../utils/fonts";

const regScreenStyles = StyleSheet.create({
  regUnderlay: {
    flex: 1,
    borderWidth: 1,
    borderColor: "violet",

    // position: "relative",

    // flex: 1,

    // TODO:of keyboard is active move marginTop
    marginTop: 220,

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
