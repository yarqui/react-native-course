import { Image, Pressable, Text, View } from "react-native";
import { MapPinIcon, MessageOffIcon, MessageOnIcon } from "../svg";
import { useNavigation } from "@react-navigation/native";

const PostItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={{ width: "100%", marginTop: 32, marginBottom: 4 }}>
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
            const postId = item.postId;

            navigation.navigate("Comments", { img, postId });
          }}
        >
          {item.comments ? (
            <MessageOnIcon></MessageOnIcon>
          ) : (
            <MessageOffIcon></MessageOffIcon>
          )}

          <Text
            style={{
              marginLeft: 6,
              fontSize: 16,
              lineHeight: 19,
              color: "#BDBDBD",
            }}
          >
            {item.comments ? item.comments : 0}
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
};

export default PostItem;
