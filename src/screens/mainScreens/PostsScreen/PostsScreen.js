import { useState } from "react";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import { View, Text, Image, FlatList } from "react-native";
import KeyboardContainer from "../../../components/KeyboardContainer";
import {
  MapPinIcon,
  MessageOffIcon,
  MessageOnIcon,
} from "../../../components/svg";
import globalStyles from "../../../utils/globalStyles";

const POSTS = [
  {
    id: 1,
    photo: require("../../../images/bali.jpg"),
    name: "Temple of Rest",
    location: "Bali",
    comments: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  },
  {
    id: 2,
    photo: require("../../../images/lviv.jpg"),
    name: "Lviv main square",
    location: "Lviv",
    comments: [{ id: 3 }, { id: 4 }],
  },
  {
    id: 3,
    photo: require("../../../images/carpathians.jpg"),
    name: "Khomiak mountain",
    location: "Khomiak mountain",
    comments: [{ id: 5 }, { id: 6 }, { id: 7 }],
  },
];

const PostsScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [posts, setPosts] = useState(POSTS);

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
    setFocusedInput(null);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          ...globalStyles.appContainer,
          // borderWidth: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: 32,
          marginBottom: 0,
        }}
      >
        <View
          style={{
            // borderWidth: 1,

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

        <SafeAreaView
          style={{
            width: "100%",
            marginTop: 16,
            marginBottom: 60,
          }}
        >
          <FlatList
            style={{
              width: "100%",
            }}
            scrollEnabled={true}
            data={posts}
            renderItem={({ item }) => {
              return (
                <View style={{ width: "100%", marginTop: 32 }}>
                  <Image
                    style={{
                      width: "100%",
                      height: 240,
                      marginBottom: 8,
                      borderRadius: 8,

                      resizeMode: "contain",
                    }}
                    source={item.photo}
                  />

                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 19,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 11,
                    }}
                  >
                    {/* /**Comments section */}
                    <Pressable
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onPress={() => {
                        navigation.navigate("Comments");
                      }}
                    >
                      <MessageOffIcon></MessageOffIcon>
                      <Text
                        style={{
                          marginLeft: 6,
                          fontSize: 16,
                          lineHeight: 19,
                          color: "#BDBDBD",
                        }}
                      >
                        {item.comments.length}
                      </Text>
                    </Pressable>
                    <Pressable
                      style={{ flexDirection: "row" }}
                      onPress={() => {
                        navigation.navigate("Map");
                      }}
                    >
                      <MapPinIcon></MapPinIcon>
                      <Text
                        style={{
                          textDecorationLine: "underline",
                        }}
                      >
                        {item.location}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
export default PostsScreen;
