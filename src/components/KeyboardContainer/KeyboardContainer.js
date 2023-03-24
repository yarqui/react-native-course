import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import globalStyles from "../../utils/globalStyles";

const KeyboardContainer = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        style={globalStyles.bgImage}
        source={require("../../images/bg.jpg")}
      >
        <KeyboardAvoidingView
          style={globalStyles.keyboardAvoiding}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardContainer;
