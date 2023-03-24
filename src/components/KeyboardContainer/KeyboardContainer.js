import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import globalStyles from "../../utils/globalStyles";

const KeyboardContainer = ({ children }) => {
  return (
    <TouchableWithoutFeedback>
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
