import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PropTypes from "prop-types";
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
          behavior={Platform.OS == "ios" ? "padding" : ""}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

KeyboardContainer.propTypes = {
  hideKeyboard: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default KeyboardContainer;
