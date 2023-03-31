import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import * as Font from "expo-font";
import fonts from "./src/utils/fonts";
import CommentsScreen from "./src/screens/auxScreens/CommentsScreen";
import CreatePostsScreen from "./src/screens/mainScreens/CreatePostsScreen";
import Home from "./src/screens/mainScreens/Home";
import LoginScreen from "./src/screens/authScreens/LoginScreen";
import MapScreen from "./src/screens/auxScreens/MapScreen";
import PostsScreen from "./src/screens/mainScreens/PostsScreen";
import RegistrationScreen from "./src/screens/authScreens/RegistrationScreen";
import ProfileScreen from "./src/screens/mainScreens/ProfileScreen";

import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// TODO: ?? Consider making appContainer ON THE TOP of authUnderlay
// to make top and bottom paddings global (maybe horizontal too?)
// In this case, use authUnderlay with position: absolute?
// Check the relative parent in this case from which it'll be positioned

SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          [fonts.robotoRegular]: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
          [fonts.robotoMedium]: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
          [fonts.robotoBold]: require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, []);

  // const [windowHeight, setWindowHeight] = useState(
  //   () => Dimensions.get("window").height
  // );

  // useEffect(() => {
  //   const onChange = () => {
  //     const height = Dimensions.get("window").height;
  //     setWindowHeight(height);
  //     console.log("height:", height);
  //   };

  //   Dimensions.addEventListener("change", onChange);

  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  const handleActiveKeyboard = (inputName) => {
    setFocusedInput(inputName);

    if (keyboardIsShown) return;

    setKeyboardIsShown(!keyboardIsShown);
  };

  const hideKeyboard = () => {
    // TODO: add if (!keyboardIsShown) => return; Test it.

    setKeyboardIsShown(false);

    setFocusedInput(null);

    Keyboard.dismiss();
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
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
        <AuthStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <AuthStack.Screen name="MapScreen" component={MapScreen} />
        <AuthStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <AuthStack.Screen name="PostsScreen" component={PostsScreen} />
        <AuthStack.Screen name="ProfileScreen" component={ProfileScreen} />

        <AuthStack.Screen name="Register">
          {(props) => (
            <RegistrationScreen
              {...props}
              keyboardIsShown={keyboardIsShown}
              passwordIsShown={passwordIsShown}
              focusedInput={focusedInput}
              setPasswordIsShown={setPasswordIsShown}
              hideKeyboard={hideKeyboard}
              handleActiveKeyboard={handleActiveKeyboard}
            />
          )}
        </AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* <RegistrationScreen
        // windowHeight={windowHeight ? windowHeight : null}
        keyboardIsShown={keyboardIsShown}
        passwordIsShown={passwordIsShown}
        focusedInput={focusedInput}
        setPasswordIsShown={setPasswordIsShown}
        handleActiveKeyboard={handleActiveKeyboard}
        hideKeyboard={hideKeyboard}
      /> */

/* <LoginScreen
          keyboardIsShown={keyboardIsShown}
          passwordIsShown={passwordIsShown}
          focusedInput={focusedInput}
          setPasswordIsShown={setPasswordIsShown}
          handleActiveKeyboard={handleActiveKeyboard}
          hideKeyboard={hideKeyboard}
        ></LoginScreen> */
