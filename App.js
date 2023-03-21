import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const inputHandler = () => {};

  const submitHandler = () => {};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Login"
          onChangeText={() => {}}
        />
        <Button title="Sign Up" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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
    textAlign: "center",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
