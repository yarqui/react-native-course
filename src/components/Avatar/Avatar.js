import { Image, TouchableOpacity, View } from "react-native";
import regScreenStyles from "../../screens/RegistrationScreen/regScreenStyles";
import { AntDesign } from "@expo/vector-icons";

const Avatar = () => {
  return (
    <View style={regScreenStyles.regAvatarUnderlay}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          console.log("future add avatar logic");
        }}
      >
        {/* <Image
          style={{ borderRadius: 16 }}
          source={require("../../images/avatar.jpg")}
        /> */}
        <AntDesign
          name="pluscircle"
          size={25}
          style={regScreenStyles.plusIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
