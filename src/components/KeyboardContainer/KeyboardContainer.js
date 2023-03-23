import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

const KeyboardContainer = ({ children }) => {
  return (
    <TouchableWithoutFeedback>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../images/bg.jpg")}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : ""}
        >
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardContainer;
