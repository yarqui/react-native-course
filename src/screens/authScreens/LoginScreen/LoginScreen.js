import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";
import regScreenStyles from "../RegistrationScreen/regScreenStyles";

const initialUserState = {
  email: "",
  password: "",
};

const LoginScreen = ({
  navigation,
  keyboardIsShown,
  passwordIsShown,
  focusedInput,
  setPasswordIsShown,
  hideKeyboard,
  handleActiveKeyboard,
}) => {
  const [userData, setUserData] = useState(initialUserState);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const { email, password } = userData;

  useEffect(() => {
    if (email && password) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [email, password]);

  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View
        style={{
          ...globalStyles.authUnderlay,
          marginTop: keyboardIsShown ? 200 : 320,
        }}
      >
        <View style={globalStyles.appContainer}>
          <View style={globalStyles.authInputContainer}>
            <Text style={globalStyles.authTitle}>Login</Text>

            <TextInput
              style={{
                ...globalStyles.authInput,
                borderColor: focusedInput === "email" ? "#FF6C00" : "#E8E8E8",
                backgroundColor:
                  focusedInput === "email" ? "#FFFFFF" : "#F6F6F6",
              }}
              placeholder="Email"
              placeholderTextColor={"#BDBDBD"}
              name="email"
              keyboardType={"email-address"}
              value={userData.email}
              onFocus={() => {
                handleActiveKeyboard("email");
              }}
              onBlur={() => {}}
              onSubmitEditing={hideKeyboard}
              onEndEditing={() => {}}
              onChangeText={(value) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  email: value.trim().toLocaleLowerCase(),
                }))
              }
            />

            <View style={globalStyles.passwordContainer}>
              <TextInput
                style={{
                  ...globalStyles.authInput,
                  borderColor:
                    focusedInput === "password" ? "#FF6C00" : "#E8E8E8",
                  backgroundColor:
                    focusedInput === "password" ? "#FFFFFF" : "#F6F6F6",
                }}
                placeholder="Password"
                name="password"
                keyboardType={"default"}
                value={userData.password}
                onFocus={() => {
                  handleActiveKeyboard("password");
                }}
                onBlur={() => {}}
                secureTextEntry={!passwordIsShown}
                placeholderTextColor={"#BDBDBD"}
                onSubmitEditing={hideKeyboard}
                onChangeText={(value) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    password: value.trim(),
                  }))
                }
              />

              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={globalStyles.showPasswordText}
                  onPress={() => {
                    setPasswordIsShown(!passwordIsShown);
                  }}
                >
                  {passwordIsShown ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            {!keyboardIsShown && (
              <>
                <TouchableOpacity
                  style={{
                    ...globalStyles.authBtn,
                    backgroundColor: readyToSubmit ? "#FF6C00" : "#878787",
                  }}
                  disabled={!readyToSubmit}
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log("future submit logic:", userData);
                    setUserData(initialUserState);
                  }}
                >
                  <Text style={globalStyles.authBtnText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    console.log("future navigation to sign up screen");
                  }}
                >
                  <Text
                    style={globalStyles.authAccountPrompt}
                    onPress={() => {
                      navigation.navigate("Register");
                    }}
                  >
                    No account? Sign Up
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

LoginScreen.propTypes = {
  keyboardIsShown: PropTypes.bool.isRequired,
  passwordIsShown: PropTypes.bool.isRequired,
  setPasswordIsShown: PropTypes.func.isRequired,
  handleActiveKeyboard: PropTypes.func.isRequired,
  hideKeyboard: PropTypes.func.isRequired,
};
export default LoginScreen;
