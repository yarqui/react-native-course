import { useState } from "react";
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "./src/utils/fonts";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import globalStyles from "./src/utils/globalStyles";

const loadFonts = async () => {
  await Font.loadAsync({
    [fonts.robotoRegular]: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    [fonts.robotoMedium]: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    [fonts.robotoBold]: require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  console.log("keyboardIsShown:", keyboardIsShown);

  const handleActiveKeyboard = () => {
    if (keyboardIsShown) return;

    setKeyboardIsShown(!keyboardIsShown);
  };

  const hideKeyboard = () => {
    setKeyboardIsShown(false);

    Keyboard.dismiss();
  };

  const inputHandler = () => {};

  const submitHandler = () => {};

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <RegistrationScreen
      keyboardIsShown={keyboardIsShown}
      handleActiveKeyboard={handleActiveKeyboard}
      hideKeyboard={hideKeyboard}
    />
  );
};

export default App;
