import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

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
    <View style={styles.appContainer}>
      <ImageBackground source={require("./src/images/bg.jpg")}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Login"
            onChangeText={() => {}}
          />
          <Button title="Sign Up" onPress={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
  },
  inputContainer: {
    // borderColor: "red",
    // borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    // borderColor: "green",
    // borderWidth: 1,
    flex: 5,
  },
  textInput: {
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default App;
