import { View, Image, Text } from "react-native";
import { CommentsStyles } from "../CommentsStyles";

export const RegularComment = ({ comment }) => {
  <View style={CommentsStyles.commentsContainer}>
    <View style={CommentsStyles.commentWrap}>
      <Image
        style={CommentsStyles.userAvatar}
        source={{ uri: comment.photo }}
      />
      <View style={CommentsStyles.textWrap}>
        <Text style={CommentsStyles.text}>{item.comment}</Text>
        <Text style={CommentsStyles.textTime}>{item.time}</Text>
      </View>
    </View>
  </View>;
};

export default RegularComment;
