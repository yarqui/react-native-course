import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { Keyboard } from "react-native";
import LoginScreen from "../screens/authScreens/LoginScreen";
import RegistrationScreen from "../screens/authScreens/RegistrationScreen";
import CommentsScreen from "../screens/auxScreens/CommentsScreen";
import MapScreen from "../screens/auxScreens/MapScreen";
import CreatePostsScreen from "../screens/mainScreens/CreatePostsScreen";
import Home from "../screens/mainScreens/Home";
import PostsScreen from "../screens/mainScreens/PostsScreen";
import ProfileScreen from "../screens/mainScreens/ProfileScreen";

const AuthStack = createStackNavigator();

const useRoute = (isLoggedIn) => {
  console.log("isLoggedIn in router:", isLoggedIn);
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleActiveKeyboard = (inputName) => {
    setFocusedInput(inputName);

    if (keyboardIsShown) return;

    setKeyboardIsShown(!keyboardIsShown);
  };

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
    setFocusedInput(null);
    Keyboard.dismiss();
  };

  return (
    <AuthStack.Navigator
      // initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerStyle: { borderBottomWidth: 1 },
      }}
    >
      {!isLoggedIn && (
        <>
          <AuthStack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </AuthStack.Screen>

          <AuthStack.Screen name="Register">
            {(props) => (
              <RegistrationScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </AuthStack.Screen>

          <AuthStack.Screen name="Home" component={Home} />
          <AuthStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: true }}
          />
          <AuthStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true }}
          />
        </>
      )}

      {isLoggedIn && (
        <>
          <AuthStack.Screen name="Home" component={Home} />
          <AuthStack.Screen name="Create Post" component={CreatePostsScreen} />
          <AuthStack.Screen name="Profile" component={ProfileScreen} />
          {/* <AuthStack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </AuthStack.Screen>

          <AuthStack.Screen name="Register">
            {(props) => (
              <RegistrationScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </AuthStack.Screen> */}

          <AuthStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: true }}
          />
          <AuthStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true }}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};

export default useRoute;
