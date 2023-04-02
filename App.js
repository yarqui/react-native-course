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
import useRoute from "./src/navigation/router";

// FIXME: console.log in AddAvatarIcon doesn't work
// FIXME: authUnderlay drops down on input focus on iPhone
// TODO: isLoggedIn state to conditional render navigation.

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

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

  if (!isReady) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
