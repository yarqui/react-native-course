import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Avatar from "../../components/Avatar";
import KeyboardContainer from "../../components/KeyboardContainer";
import globalStyles from "../../utils/globalStyles";
import regScreenStyles from "./regScreenStyles";

const RegistrationScreen = () => {
  return (
    <KeyboardContainer>
      <View style={globalStyles.appContainer}>
        <TextInput
          style={globalStyles.authInput}
          placeholder="Email"
          placeholderTextColor={"#BDBDBD"}
        />
      </View>
    </KeyboardContainer>
  );
};

export default RegistrationScreen;
