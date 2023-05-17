import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import globalStyles from "../../../utils/globalStyles";
import Avatar from "../../../components/Avatar/Avatar";
import {
  LogOutIcon,
  MapPinIcon,
  MessageOffIcon,
  RemoveAvatarIcon,
} from "../../../components/svg";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { authLogout } from "../../../redux/auth/authOperations";

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

const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(POSTS);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={globalStyles.bgImage}
        source={require("../../../images/bg.jpg")}
      />

      <View style={{ ...globalStyles.authUnderlay, height: "80%" }}>
        <Avatar />
        <LogOutIcon
          style={{ position: "absolute", right: 16, top: 22 }}
          onPress={() => {
            dispatch(authLogout());
          }}
        ></LogOutIcon>

        <View
          style={{
            ...globalStyles.appContainer,
            marginTop: 10,
            marginBottom: 0,
          }}
        >
          <Text style={styles.userTitle}>Yaroslav Pelykh</Text>
          <FlatList
            style={{
              width: "100%",
              flex: 1,
              // marginTop: -32,
            }}
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userTitle: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 16,
  },
});
