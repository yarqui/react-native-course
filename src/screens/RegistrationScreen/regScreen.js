import { View, Text, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../../utils/globalStyles";
import regScreenStyles from "./regScreenStyles";

const RegistrationScreen = () => {
  return (
    <View style={regScreenStyles.regContainer}>
      <View style={regScreenStyles.regUnderlay}>
        <Text style={regScreenStyles.regTitle}>Registration</Text>
        <View style={globalStyles.authInputContainer}>
          <TextInput
            style={globalStyles.authInput}
            placeholder="Login"
            placeholderTextColor={"#BDBDBD"}
          ></TextInput>

          <TextInput
            style={globalStyles.authInput}
            placeholder="Email"
            placeholderTextColor={"#BDBDBD"}
          ></TextInput>

          <View style={globalStyles.passwordContainer}>
            <TextInput
              style={globalStyles.authInput}
              placeholder="Password"
              placeholderTextColor={"#BDBDBD"}
            ></TextInput>

            <TouchableOpacity>
              <Text style={globalStyles.showPasswordText}>Show</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={globalStyles.authBtn}>
          <Text style={globalStyles.authBtnText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={globalStyles.authAccountPrompt}>
            Have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen;
