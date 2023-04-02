import { useState } from "react";
import { View, Text, Image } from "react-native";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";

const PostsScreen = () => {
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
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 32,
            marginBottom: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={require("../../../images/avatar.jpg")}
                style={{ width: 60, height: 60, borderRadius: 16 }}
              />
            </View>
            <View style={{ marginLeft: 8 }}>
              <Text
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  lineHeight: 15,
                }}
              >
                Yaroslav Pelykh
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 11,
                  lineHeight: 13,
                  color: "#4d4d4d",
                }}
              >
                y.pelykh@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardContainer>
  );
};
export default PostsScreen;
