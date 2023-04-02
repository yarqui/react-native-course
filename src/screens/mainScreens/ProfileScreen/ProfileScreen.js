import { useState } from "react";
import { View, Text } from "react-native";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";

const ProfileScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
    setFocusedInput(null);
    Keyboard.dismiss();
  };

  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View
          style={{
            ...globalStyles.appContainer,
            marginTop: 32,
            marginBottom: 0,
          }}
        >
          <Text>ProfileScreen</Text>
        </View>
      </View>
    </KeyboardContainer>
  );
};

export default ProfileScreen;
