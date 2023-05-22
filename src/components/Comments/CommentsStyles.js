import { StyleSheet } from "react-native";

export const CommentsStyles = StyleSheet.create({
  postImage: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,

    resizeMode: "cover",
  },

  commentsContainer: { width: "100%", marginTop: 32 },

  commentWrap: { flex: 1, flexDirection: "row" },

  userAvatar: {
    marginRight: 16,
  },

  textWrap: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  text: { fontSize: 13, lineHeight: 18 },

  textTime: {
    marginLeft: "auto",
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },

  inputWrap: {
    position: "relative",
    width: "100%",
  },

  input: {
    height: 50,
    padding: 16,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },

  iconSend: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
