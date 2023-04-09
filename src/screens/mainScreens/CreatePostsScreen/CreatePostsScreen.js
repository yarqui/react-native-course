import { useEffect, useState } from "react";
import {
  Pressable,
  Keyboard,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import KeyboardContainer from "../../../components/KeyboardContainer";
import { CameraIcon, MapPinIcon, TrashIcon } from "../../../components/svg";
import globalStyles from "../../../utils/globalStyles";
import { Image } from "react-native";

const initialPostData = {
  id: "",
  name: "",
  location: "",
  locationDescription: "",
  photo: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [postData, setPostData] = useState(initialPostData);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [resetCamera, setResetCamera] = useState(false);

  const { /*id,*/ name, location, locationDescription, photo } = postData;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (name && location && locationDescription && photo) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [name, location, locationDescription, photo]);

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
    Keyboard.dismiss();
  };

  const toggleCameraType = () => {
    setCameraType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      console.log("take photo");
      setResetCamera(true);
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);

      const { coords } = await Location.getCurrentPositionAsync();

      setPostData((prevUserData) => ({
        ...prevUserData,
        // id: "1",
        photo: uri,
        location: {
          longitude: coords.longitude,
          latitude: coords.latitude,
        },
      }));
    }
  };

  const submitPost = () => {
    console.log("postDataToSubmit:", postData);

    navigation.navigate("Posts", {
      // id,
      name,
      location,
      locationDescription,
      photo,
    });
    setPostData(initialPostData);
  };

  const erasePost = () => {
    setPostData(initialPostData);
    navigation.navigate("Posts");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>All requested permissions are needed to use the App</Text>;
  }

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
            }}
          >
            <Camera
              style={{
                width: "100%",
                height: 240,
                justifyContent: "space-between",
                alignItems: "center",
              }}
              type={cameraType}
              ref={(ref) => setCameraRef(ref)}
              ratio="4:3"
              key={resetCamera ? "reset" : undefined}
            >
              {photo ? (
                <View
                  style={{
                    alignSelf: "flex-end",
                    // borderWidth: 1,
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: postData.photo }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignSelf: "flex-end",
                    width: 100,
                    height: 100,
                  }}
                ></View>
              )}

              {/* Container to upload image */}
              <Pressable
                style={{
                  opacity: 0.5,
                }}
                onPress={takePhoto}
              >
                {/* Container for camera icon */}
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
                  <CameraIcon />
                </View>
              </Pressable>

              <Pressable
                style={{ alignSelf: "center" }}
                onPress={toggleCameraType}
              >
                <MaterialIcons
                  name="flip-camera-ios"
                  size={32}
                  color="white"
                  style={{ opacity: 0.5 }}
                />
              </Pressable>
            </Camera>

            {/* Container for upload-photo-title */}
            <Pressable style={{ flexDirection: "row" }}>
              <Text
                style={{
                  // borderWidth: 1,

                  marginTop: 8,

                  fontSize: 16,
                  lineHeight: 19,

                  color: "#BDBDBD",
                }}
                // onPress={() => {
                //   console.log("upload photo logic");
                // }}
              >
                Upload a photo
              </Text>
            </Pressable>

            {/* Form container */}
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
                  setPostData((prevUserData) => ({
                    ...prevUserData,
                    name: inputValue,
                  }))
                }
              />

              {/* Location input container */}
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
                  value={locationDescription}
                  placeholder="Location..."
                  placeholderTextColor="#BDBDBD"
                  onSubmitEditing={hideKeyboard}
                  onFocus={() => {
                    setKeyboardIsShown(true);
                  }}
                  onChangeText={(inputValue) =>
                    setPostData((prevUserData) => ({
                      ...prevUserData,
                      locationDescription: inputValue,
                    }))
                  }
                />

                <MapPinIcon style={{ position: "absolute", bottom: 13 }} />
              </View>
            </View>

            {/* Submit button  */}
            <TouchableOpacity
              style={{
                ...globalStyles.authBtn,
                backgroundColor: readyToSubmit ? "#FF6C00" : "#878787",
                marginTop: 32,
              }}
              disabled={!readyToSubmit}
              activeOpacity={0.8}
              onPress={submitPost}
            >
              <Text style={globalStyles.authBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>

          {/* Erase post button is shown, when keyboard is inactive */}
          {!keyboardIsShown && (
            <Pressable
              style={{
                height: 83,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={erasePost}
            >
              <TrashIcon />
            </Pressable>
          )}
        </View>
      </View>
    </KeyboardContainer>
  );
};
export default CreatePostsScreen;
