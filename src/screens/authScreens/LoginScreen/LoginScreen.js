import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { authLogin } from "../../../redux/auth/authOperations";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";

const initialUserState = {
  userEmail: "",
  password: "",
};

const LoginScreen = ({
  isLoggedIn,
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

  const { userEmail, password } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userEmail && password) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [userEmail, password]);

  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View
        style={{
          ...globalStyles.authUnderlay,
          marginTop: keyboardIsShown ? 200 : 320,
        }}
      ></View>

      <View style={globalStyles.appContainer}>
        <Text style={globalStyles.authTitle}>Login</Text>
        <View style={globalStyles.formContainer}>
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
              onBlur={() => {}}
              onSubmitEditing={hideKeyboard}
              onEndEditing={() => {}}
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
              <View style={globalStyles.inputContainer}>
                <TouchableOpacity
                  style={{
                    ...globalStyles.authBtn,
                    backgroundColor: readyToSubmit ? "#FF6C00" : "#878787",
                  }}
                  disabled={!readyToSubmit}
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(authLogin(userData));
                    navigation.navigate("Home");
                    setUserData(initialUserState);
                  }}
                >
                  <Text style={globalStyles.authBtnText}>Sign In</Text>
                </TouchableOpacity>
              </View>

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
