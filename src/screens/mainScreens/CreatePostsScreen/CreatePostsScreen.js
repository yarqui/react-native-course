import { useEffect, useState } from "react";
import { Pressable, Keyboard, TextInput, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import KeyboardContainer from "../../../components/KeyboardContainer";
import { CameraIcon, MapPinIcon, TrashIcon } from "../../../components/svg";
import globalStyles from "../../../utils/globalStyles";

const initialSubmitData = {
  name: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [submitData, setSubmitData] = useState(initialSubmitData);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const { name, location } = submitData;

  useEffect(() => {
    if (name && location) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [name, location]);

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
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
              // borderWidth: 1,
              flex: 1,
              width: "100%",
              // alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: "100%",
                height: 240,
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: "#F6F6F6",
                borderWidth: 1,
                borderColor: "#E8E8E8",
                borderRadius: 8,
              }}
              onPress={() => {
                console.log("upload photo logic");
              }}
            >
              <View
                style={{
                  height: 60,
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",

                  backgroundColor: "#FFFFFF",
                  borderRadius: 50,
                }}
              >
                <CameraIcon></CameraIcon>
              </View>
            </Pressable>

            <Pressable style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginTop: 8,

                  fontSize: 16,
                  lineHeight: 19,

                  color: "#BDBDBD",
                }}
                onPress={() => {
                  console.log("upload photo logic");
                }}
              >
                Upload a photo
              </Text>
            </Pressable>

            <View style={{ marginTop: 32 }}>
              <TextInput
                style={{
                  height: 50,

                  fontSize: 16,
                  lineHeight: 19,

                  borderBottomWidth: 1,
                  borderBottomColor: "#E8E8E8",
                }}
                value={name}
                placeholder="Name..."
                placeholderTextColor="#BDBDBD"
                onSubmitEditing={hideKeyboard}
                onFocus={() => {
                  setKeyboardIsShown(true);
                }}
                onChangeText={(inputValue) =>
                  setSubmitData((prevUserData) => ({
                    ...prevUserData,
                    name: inputValue,
                  }))
                }
              ></TextInput>

              <View
                style={{
                  position: "relative",

                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{
                    width: "100%",
                    height: 50,
                    marginTop: 16,
                    paddingLeft: 28,

                    fontSize: 16,
                    lineHeight: 19,

                    borderBottomWidth: 1,
                    borderBottomColor: "#E8E8E8",
                  }}
                  value={location}
                  placeholder="Location..."
                  placeholderTextColor="#BDBDBD"
                  onSubmitEditing={hideKeyboard}
                  onFocus={() => {
                    setKeyboardIsShown(true);
                  }}
                  onChangeText={(inputValue) =>
                    setSubmitData((prevUserData) => ({
                      ...prevUserData,
                      location: inputValue,
                    }))
                  }
                ></TextInput>

                <MapPinIcon
                  style={{ position: "absolute", bottom: 13 }}
                ></MapPinIcon>
              </View>
            </View>

            <TouchableOpacity
              style={{
                ...globalStyles.authBtn,
                backgroundColor: readyToSubmit ? "#FF6C00" : "#878787",
                marginTop: 32,
              }}
              disabled={!readyToSubmit}
              activeOpacity={0.8}
              onPress={() => {
                console.log("future submit logic:", submitData);

                navigation.navigate("Posts");
                setSubmitData(initialSubmitData);
              }}
            >
              <Text style={globalStyles.authBtnText}>Submit</Text>
            </TouchableOpacity>

            {/* here lies button */}
          </View>

          {!keyboardIsShown && (
            <Pressable
              style={{
                height: 83,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setSubmitData(initialSubmitData);
                navigation.navigate("Posts");
              }}
            >
              <TrashIcon></TrashIcon>
            </Pressable>
          )}
        </View>
      </View>
    </KeyboardContainer>
  );
};
export default CreatePostsScreen;
