import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Avatar from "../../../components/Avatar";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";
import { authRegistration } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const initialUserState = {
  userName: "",
  userEmail: "",
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
  const dispatch = useDispatch();

  const { userName, userEmail, password } = userData;

  useEffect(() => {
    if (userName && userEmail && password) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [userName, userEmail, password]);

  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View
        style={{
          ...globalStyles.authUnderlay,
          height: keyboardIsShown ? "72%" : "66%",
        }}
      >
        <Avatar />
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
                value={userData.userName}
                onFocus={() => {
                  handleActiveKeyboard("login");
                }}
                onSubmitEditing={hideKeyboard}
                onChangeText={(value) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    userName: value,
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
                value={userData.userEmail}
                onFocus={() => {
                  handleActiveKeyboard("email");
                }}
                onSubmitEditing={hideKeyboard}
                onChangeText={(value) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    userEmail: value.trim(),
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
                      dispatch(authRegistration(userData));
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
      </View>
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
