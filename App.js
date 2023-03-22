import { useState } from "react";
import { View, ImageBackground } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "./src/utils/fonts";
import RegistrationScreen from "./src/screens/RegistrationScreen/regScreen";
import globalStyles from "./src/utils/globalStyles";

const loadFonts = async () => {
  await Font.loadAsync({
    [fonts.robotoRegular]: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    [fonts.robotoMedium]: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    [fonts.robotoBold]: require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

// TODO: UNINSTALL REACT-NATIVE-SVG

const App = () => {
  const [isReady, setIsReady] = useState(false);

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
    <ImageBackground
      style={globalStyles.bgImage}
      source={require("./src/images/bg.jpg")}
    >
      <View style={globalStyles.appContainer}>
        <RegistrationScreen />
      </View>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
// inputContainer: {
//   // borderColor: "red",
//   // borderWidth: 1,
//   flex: 1,
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignItems: "center",
// },
// textInput: {
//   fontFamily: "Roboto-Bold",
//   textAlign: "center",
//   borderColor: "#cccccc",
//   borderWidth: 1,
//   borderRadius: 5,
//   width: "70%",
//   marginRight: 8,
//   padding: 8,
// },
// });

export default App;
