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
    borderColor: "red",

    flex: 1,
    alignItems: "center",

    // justifyContent: "flex-end",
    marginTop: 220,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
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
