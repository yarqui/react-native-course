import { View, Image, Text } from "react-native";
import { CommentsStyles } from "../CommentsStyles";

const CurrentUserComment = ({ comment }) => {
  <View style={CommentsStyles.commentsContainer}>
    <View style={CommentsStyles.commentWrap}>
      <Image
        style={CommentsStyles.userAvatar}
        source={{ uri: comment.photo }}
        // source={require("../../../images/defaultCommentator.png")}
      />
      <View style={CommentsStyles.textWrap}>
        <Text style={CommentsStyles.text}>{item.comment}</Text>
        <Text style={CommentsStyles.textTime}>{item.time}</Text>
      </View>
    </View>
  </View>;
};

export default CurrentUserComment;
