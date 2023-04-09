import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import { MapPinIcon, MessageOffIcon } from "../../../components/svg";
import globalStyles from "../../../utils/globalStyles";

const initialPosts = [
  // {
  //   id: 1,
  //   photo: require("../../../images/bali.jpg"),
  //   name: "Temple of Rest",
  //   location: "",
  //   locationDescription: "Bali",
  //   comments: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  // },
  // {
  //   id: 2,
  //   photo: require("../../../images/lviv.jpg"),
  //   name: "Lviv main square",
  //   location: "",
  //   locationDescription: "Lviv",
  //   comments: [{ id: 3 }, { id: 4 }],
  // },
  // {
  //   id: 3,
  //   photo: require("../../../images/carpathians.jpg"),
  //   name: "Khomiak mountain",
  //   location: "",
  //   locationDescription: "Khomiak mountain",
  //   comments: [{ id: 5 }, { id: 6 }, { id: 7 }],
  // },
];

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState(initialPosts);

  // const { /*id,*/ name, location, locationDescription, photo } = route.params;
  // console.log("route.params:", route.params);

  useEffect(() => {
    route.params && setPosts((prevPosts) => [...prevPosts, route.params]);
  }, [route.params]);

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

                      resizeMode: "cover",
                    }}
                    source={{ uri: item.photo }}
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
                        const img = item.photo;
                        navigation.navigate("Comments", { img });
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
                        {item.comments ? item.comments.length : 0}
                      </Text>
                    </Pressable>

                    {/* Map section */}
                    <Pressable
                      style={{ flexDirection: "row" }}
                      onPress={() => {
                        navigation.navigate("Map", {
                          name: item.name,
                          locationDescription: item.locationDescription,
                          longitude: item.location.longitude,
                          latitude: item.location.latitude,
                        });
                      }}
                    >
                      <MapPinIcon></MapPinIcon>
                      <Text
                        style={{
                          textDecorationLine: "underline",
                        }}
                      >
                        {item.locationDescription}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
export default PostsScreen;
