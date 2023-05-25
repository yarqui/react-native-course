import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, FlatList, SafeAreaView } from "react-native";
import globalStyles from "../../../utils/globalStyles";
import {
  selectUserName,
  selectUserEmail,
  selectAvatar,
} from "../../../redux/auth/authSelectors";
import { getAllPosts } from "../../../redux/posts/postsOperations";
import { selectAllPosts } from "../../../redux/posts/postsSelectors";
import PostItem from "../../../components/PostItem/PostItem";

const PostsScreen = () => {
  const allPosts = useSelector(selectAllPosts);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
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
              source={{ uri: avatar }}
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
              {userName}
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 11,
                lineHeight: 13,
                color: "#4d4d4d",
              }}
            >
              {userEmail}
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
            data={allPosts}
            renderItem={({ item }) => <PostItem item={item} />}
            keyExtractor={(item) => item.postId}
            key={allPosts}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
export default PostsScreen;
