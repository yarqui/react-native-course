import { TouchableOpacity, View } from "react-native";
import regScreenStyles from "../../screens/RegistrationScreen/regScreenStyles";
import { AntDesign } from "@expo/vector-icons";

const Avatar = () => {
  return (
    <View style={regScreenStyles.regAvatarUnderlay}>
      <TouchableOpacity>
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
