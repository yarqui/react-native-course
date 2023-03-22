import { StyleSheet } from "react-native";

// borderWidth: 1, borderColor: "red",

const globalStyles = StyleSheet.create({
  appContainer: {
    borderWidth: 1,
    borderColor: "red",

    flex: 1,
    justifyContent: "flex-end",
  },

  bgImage: {
    flex: 1,
    paddingTop: 44,
  },

  authInputContainer: {
    width: "100%",
    gap: 16,
    marginTop: 32,
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
    flexDirection: "row",
    position: "relative",
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
    marginTop: 43,

    alignItems: "center",

    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,

    borderRadius: 100,

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
