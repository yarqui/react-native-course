import { View, Image, Text } from "react-native";
import { CommentsStyles } from "../CommentsStyles";

const CurrentUserComment = ({ comment }) => {
  return (
    <View style={CommentsStyles.commentsContainer}>
      <View style={CommentsStyles.commentWrap}>
        <View style={CommentsStyles.textWrap}>
          <Text style={CommentsStyles.text}>{comment.commentTxt}</Text>
          <Text style={CommentsStyles.textTime}>{comment.commentDate}</Text>
        </View>

        {comment.photo ? (
          <Image
            style={{
              ...CommentsStyles.commentatorAvatar,
              marginRight: 0,
              marginLeft: 16,
            }}
            source={{ uri: comment.photo }}
          />
        ) : (
          <Image
            style={{
              ...CommentsStyles.commentatorAvatar,
              marginRight: 0,
              marginLeft: 16,
            }}
            source={require("../../../images/defaultCommentator.png")}
          />
        )}
      </View>
    </View>
  );
};

export default CurrentUserComment;
