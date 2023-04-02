import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Avatar from "../../../components/Avatar";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";

const initialUserState = {
  login: "",
  email: "",
  password: "",
  avatar: null,
};

const RegistrationScreen = ({
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

  const { login, email, password } = userData;

  useEffect(() => {
    if (login && email && password) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [login, email, password]);

  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <>
        <View
          style={{
            ...globalStyles.authUnderlay,
            height: keyboardIsShown ? "72%" : "66%",
          }}
        >
          <Avatar />
        </View>
        <View style={globalStyles.appContainer}>
          <Text style={globalStyles.authTitle}>Registration</Text>
          <View style={globalStyles.formContainer}>
            <View style={globalStyles.inputContainer}>
              <TextInput
                style={{
                  ...globalStyles.authInput,
                  borderColor: focusedInput === "login" ? "#FF6C00" : "#E8E8E8",
                  backgroundColor:
                    focusedInput === "login" ? "#FFFFFF" : "#F6F6F6",
                }}
                placeholder="Login"
                placeholderTextColor={"#BDBDBD"}
                name="login"
                keyboardType={"default"}
                value={userData.login}
                onFocus={() => {
                  handleActiveKeyboard("login");
                }}
                onSubmitEditing={hideKeyboard}
                onChangeText={(value) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    login: value,
                  }))
                }
              />
            </View>

            <View style={globalStyles.inputContainer}>
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
                onSubmitEditing={hideKeyboard}
                onChangeText={(value) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    email: value.trim(),
                  }))
                }
              />
            </View>

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
                <View style={globalStyles.inputContainer}>
                  <TouchableOpacity
                    style={{
                      ...globalStyles.authBtn,
                      backgroundColor: readyToSubmit ? "#FF6C00" : "#878787",
                    }}
                    disabled={!readyToSubmit}
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log("future submit form logic", userData);
                      navigation.navigate("Home");

                      setUserData(initialUserState);
                    }}
                  >
                    <Text style={globalStyles.authBtnText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    console.log("future navigation to log in screen");
                  }}
                >
                  <Text
                    style={globalStyles.authAccountPrompt}
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  >
                    Have an account? Sign In
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </>
    </KeyboardContainer>
  );
};

RegistrationScreen.propTypes = {
  keyboardIsShown: PropTypes.bool.isRequired,
  passwordIsShown: PropTypes.bool.isRequired,
  setPasswordIsShown: PropTypes.func.isRequired,
  handleActiveKeyboard: PropTypes.func.isRequired,
  hideKeyboard: PropTypes.func.isRequired,
};

export default RegistrationScreen;
