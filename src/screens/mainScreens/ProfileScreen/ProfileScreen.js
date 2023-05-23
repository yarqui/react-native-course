import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import Avatar from "../../../components/Avatar/Avatar";
import {
  LogOutIcon,
  MapPinIcon,
  MessageOffIcon,
  RemoveAvatarIcon,
} from "../../../components/svg";
import globalStyles from "../../../utils/globalStyles";
import { authLogout } from "../../../redux/auth/authOperations";
import {
  selectAvatar,
  selectUserName,
} from "../../../redux/auth/authSelectors";
import { selectOwnPosts } from "../../../redux/posts/postsSelectors";
import { getOwnPosts } from "../../../redux/posts/postsOperations";
import PostItem from "../../../components/PostItem/PostItem";
import { uploadPhotoToServer } from "../../../utils/uploadPhotoToServer";

const ProfileScreen = ({ navigation }) => {
  const ownPosts = useSelector(selectOwnPosts);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const avatar = useSelector(selectAvatar);

  useEffect(() => {
    dispatch(getOwnPosts());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={globalStyles.bgImage}
        source={require("../../../images/bg.jpg")}
      />

      <View style={{ ...globalStyles.authUnderlay, height: "80%" }}>
        <Avatar avatar={avatar} />
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
          <Text style={styles.userTitle}>{userName}</Text>
          <FlatList
            style={{
              width: "100%",
              flex: 1,
              // marginTop: -32,
            }}
            data={ownPosts}
            renderItem={({ item }) => <PostItem item={item} />}
            keyExtractor={(item) => item.postId}
            key={ownPosts}
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
