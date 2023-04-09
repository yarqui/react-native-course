import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Keyboard,
  Image,
} from "react-native";
import KeyboardContainer from "../../../components/KeyboardContainer";
import globalStyles from "../../../utils/globalStyles";
import { TextInput } from "react-native-gesture-handler";
import { SendIcon } from "../../../components/svg";

const initialComments = [
  // {
  //   user: {
  //     name: "Pablo",
  //     email: "pablo32@gmail.com",
  //     photo: require("../../../images/defaultCommentator.png"),
  //     id: 10,
  //   },
  //   comment:
  //     "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  //   time: "04 april, 2023 | 10:47",
  //   id: 10,
  // },
  // {
  //   user: {
  //     name: "Ron",
  //     email: "yulia@gmail.com",
  //     photo: require("../../../images/defaultCommentator.png"),
  //     id: 12,
  //   },
  //   comment:
  //     "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
  //   time: "08 february, 2022 | 13:12",
  //   id: 12,
  // },
];

const CommentsScreen = ({ route, navigation }) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [inputComment, setInputComment] = useState("");
  console.log("comments.length:", comments.length);
  console.log("route.params:", route.params);

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
    const formattedDate = date.toLocaleDateString("en-US", options);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${formattedDate} | ${hours}:${minutes}`;
  };

  const onSubmit = () => {
    if (!inputComment) return;

    console.log("submit comment logic");

    setComments((prevComments) => {
      return [
        ...prevComments,
        {
          user: {
            name: "Yar",
            email: "y.pelykh@gmail.com",
            photo: require("../../../images/defaultCommentator.png"),
            id: 13,
          },
          comment: inputComment,
          // time: "04 april, 2023 | 10:47",
          time: getFormattedDateTime(),
          id: 15,
        },
      ];
    });
    setInputComment("");
    hideKeyboard();
  };
  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View
          style={{
            ...globalStyles.appContainer,
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          <Image source={{ uri: route.params.img }} style={styles.postImage} />
          <FlatList
            style={{
              width: "100%",
            }}
            scrollEnabled={true}
            data={comments}
            renderItem={({ item }) => {
              return (
                <View style={styles.commentsContainer}>
                  <View style={styles.commentWrap}>
                    <Image
                      style={styles.userAvatar}
                      source={require("../../../images/defaultCommentator.png")}
                    />
                    <View style={styles.textWrap}>
                      <Text style={styles.text}>{item.comment}</Text>
                      <Text style={styles.textTime}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          ></FlatList>

          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="Comment..."
              placeholderTextColor="#BDBDBD"
              value={inputComment}
              onChangeText={(inputValue) => setInputComment(inputValue)}
              onFocus={() => {
                handleActiveKeyboard();
              }}
              onSubmitEditing={hideKeyboard}
            ></TextInput>

            <SendIcon style={styles.iconSend} onPress={onSubmit} />
          </View>
        </View>
      </View>
    </KeyboardContainer>
  );
};
export default CommentsScreen;

const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,

    resizeMode: "cover",
  },

  commentsContainer: { width: "100%", marginTop: 32 },

  commentWrap: { flex: 1, flexDirection: "row" },

  userAvatar: {
    marginRight: 16,
  },

  textWrap: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  text: { fontSize: 13, lineHeight: 18 },

  textTime: {
    marginLeft: "auto",
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },

  inputWrap: {
    position: "relative",
    width: "100%",
  },

  input: {
    height: 50,
    padding: 16,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },

  iconSend: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
