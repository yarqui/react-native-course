import { StyleSheet } from "react-native";
import fonts from "./fonts";

// borderWidth: 1, borderColor: "red",

const globalStyles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },

  bgImage: {
    position: "absolute",
    top: 0,
    right: 0,

    paddingTop: 44,
    justifyContent: "flex-end",
    width: "100%",
  },

  authUnderlay: {
    flex: 1,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  appContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 34,
    paddingHorizontal: 16,
  },

  authTitle: {
    fontFamily: fonts.robotoMedium,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },

  authInputContainer: {
    alignItems: "center",
    gap: 16,
  },

  authInput: {
    width: "100%",
    height: 50,
    padding: 16,

    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  passwordContainer: {
    position: "relative",

    flexDirection: "row",
  },

  showPasswordText: {
    position: "absolute",
    right: 0,
    top: 0,

    padding: 15,

    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },

  authBtn: {
    alignItems: "center",
    width: "100%",
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,

    borderRadius: 50,

    backgroundColor: "#FF6C00",
  },

  authBtnText: {
    fontSize: 16,
    lineHeight: 19,

    color: `#FFFFFF`,
  },

  authAccountPrompt: {
    padding: 15,

    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
});

export default globalStyles;
