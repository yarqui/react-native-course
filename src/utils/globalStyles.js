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
    left: 0,

    width: "100%",
  },

  authUnderlay: {
    // borderWidth: 1,
    // borderColor: "lime",

    position: "absolute",
    bottom: 0,
    left: 0,

    width: "100%",
    height: "66%",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  appContainer: {
    // borderWidth: 1,
    // borderColor: "#ff7301",

    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 44,
    marginBottom: 34,
    marginHorizontal: "4%",
  },

  authTitle: {
    marginBottom: 16,

    textAlign: "center",
    fontFamily: fonts.robotoMedium,
    fontSize: 30,
    lineHeight: 35,

    color: "#212121",
  },

  formContainer: {
    // borderWidth: 1,
    // borderColor: "#0ee4e0",

    alignItems: "center",
    // gap: 16,
  },

  inputContainer: {
    flexDirection: "row",
  },

  authInput: {
    width: "100%",
    height: 50,
    padding: 16,
    marginTop: 16,

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
    top: 16,

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
