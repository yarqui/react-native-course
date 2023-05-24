import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Keyboard,
  Image,
  SafeAreaView,
} from "react-native";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";
import { TextInput } from "react-native-gesture-handler";
import { SendIcon } from "../../../components/svg";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar, selectUserId } from "../../../redux/auth/authSelectors";
import { selectComments } from "../../../redux/posts/postsSelectors";
import CurrentUserComment from "../../../components/Comments/CurrentUserComment/CurrentUserComment";
import RegularComment from "../../../components/Comments/RegularComment/RegularComment";
import { CommentsStyles } from "../../../components/Comments/CommentsStyles";
import {
  getCommentsByPostId,
  uploadComments,
} from "../../../redux/posts/postsOperations";

const CommentsScreen = ({ route, navigation }) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [commentText, setCommentText] = useState("");
  const comments = useSelector(selectComments);
  const avatar = useSelector(selectAvatar);
  const currentUserId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const { postId } = route.params;

  useEffect(() => {
    dispatch(getCommentsByPostId(postId));
  }, [dispatch]);

  const handleActiveKeyboard = () => {
    if (keyboardIsShown) return;

    setKeyboardIsShown(!keyboardIsShown);
  };

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
    Keyboard.dismiss();
  };

  const getFormattedDateTime = () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-UA", options);

    return formattedDate;
    // const hours = date.getHours().toString().padStart(2, "0");
    // const minutes = date.getMinutes().toString().padStart(2, "0");

    // return `${formattedDate} | ${hours}:${minutes}`;
  };

  const onSubmit = () => {
    if (!commentText) return;

    const commentId = Date.now();
    const commentDate = getFormattedDateTime();
    const commentTxt = commentText.trim();

    const commentData = {
      commentId,
      commentTxt,
      commentDate,
      photo: avatar,
    };

    dispatch(uploadComments(postId, commentData));
    dispatch(getCommentsByPostId(postId));

    setCommentText("");
    hideKeyboard();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <SafeAreaView
        style={{
          ...globalStyles.appContainer,
          marginTop: 32,
          marginBottom: 16,
        }}
      >
        <Image
          source={{ uri: route.params.img }}
          style={CommentsStyles.postImage}
        />
        <FlatList
          style={{
            width: "100%",
          }}
          scrollEnabled={true}
          data={comments}
          renderItem={({ item }) =>
            item.userId === currentUserId ? (
              <CurrentUserComment comment={item} />
            ) : (
              <RegularComment comment={item} />
            )
          }
          keyExtractor={(item) => item.commentId}
        ></FlatList>

        <View style={CommentsStyles.inputWrap}>
          <TextInput
            style={CommentsStyles.input}
            placeholder="Comment..."
            placeholderTextColor="#BDBDBD"
            value={commentText}
            onChangeText={(inputValue) => setCommentText(inputValue)}
            onFocus={() => {
              handleActiveKeyboard();
            }}
            onSubmitEditing={hideKeyboard}
          ></TextInput>

          <SendIcon style={CommentsStyles.iconSend} onPress={onSubmit} />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default CommentsScreen;

// const styles = StyleSheet.create({
//   postImage: {
//     width: "100%",
//     height: 240,
//     marginBottom: 8,
//     borderRadius: 8,

//     resizeMode: "cover",
//   },

//   textTime: {
//     marginLeft: "auto",
//     marginTop: 8,
//     fontSize: 10,
//     lineHeight: 12,
//     color: "#BDBDBD",
//   },

//   inputWrap: {
//     position: "relative",
//     width: "100%",
//   },

//   input: {
//     height: 50,
//     padding: 16,

//     fontSize: 16,
//     lineHeight: 19,

//     backgroundColor: "#F6F6F6",
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     borderRadius: 100,
//   },

//   iconSend: {
//     position: "absolute",
//     top: 8,
//     right: 8,
//   },
// });
