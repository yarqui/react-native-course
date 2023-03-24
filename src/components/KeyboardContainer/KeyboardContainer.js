import {
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import globalStyles from "../../utils/globalStyles";

const KeyboardContainer = ({ hideKeyboard, children }) => {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={hideKeyboard}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={globalStyles.bgImage}
          source={require("../../images/bg.jpg")}
        />

        <KeyboardAvoidingView
          style={globalStyles.keyboardAvoiding}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          onPress={Keyboard.dismiss}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardContainer;
