import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Avatar from "../../components/Avatar";
import KeyboardContainer from "../../components/KeyboardContainer";
import globalStyles from "../../utils/globalStyles";
import regScreenStyles from "./regScreenStyles";

// TODO: I SHOULD MAKE appContainer ON THE TOP OF regUnderlay
// to make top and bottom paddings global (maybe horizontal too?)
// In this case, use regUnderlay with position: absolute?
// Check the relative parent in this case from which it'll be positioned

// TODO: change active opacity to 0.8 in TextInput

// TODO: Think of adding Keyboard.addListener('keyboardDidShow', () => {
// console.log('Keyboard is shown');
// });
// And then removing it when

// TODO: implement expo-splash-screen instead of expo-app-loading

const RegistrationScreen = ({
  keyboardIsShown,
  hideKeyboard,
  handleActiveKeyboard,
}) => {
  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View style={regScreenStyles.regUnderlay}>
        <View style={globalStyles.appContainer}>
          <Avatar style={regScreenStyles.regAvatarUnderlay}></Avatar>
          <View style={globalStyles.authInputContainer}>
            <Text style={regScreenStyles.regTitle}>Registration</Text>

            <TextInput
              style={globalStyles.authInput}
              onFocus={handleActiveKeyboard}
              placeholder="Login"
              placeholderTextColor={"#BDBDBD"}
            />

            <TextInput
              style={globalStyles.authInput}
              onFocus={handleActiveKeyboard}
              placeholder="Email"
              placeholderTextColor={"#BDBDBD"}
            />

            <View style={globalStyles.passwordContainer}>
              <TextInput
                style={globalStyles.authInput}
                onFocus={handleActiveKeyboard}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={"#BDBDBD"}
              />

              <TouchableOpacity>
                <Text style={globalStyles.showPasswordText}>Show</Text>
              </TouchableOpacity>
            </View>

            {!keyboardIsShown && (
              <>
                <TouchableOpacity style={globalStyles.authBtn}>
                  <Text style={globalStyles.authBtnText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={globalStyles.authAccountPrompt}>
                    Have an account? Sign In
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </KeyboardContainer>
  );
};

export default RegistrationScreen;
