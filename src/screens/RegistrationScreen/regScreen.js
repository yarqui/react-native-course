import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Avatar from "../../components/Avatar";
import KeyboardContainer from "../../components/KeyboardContainer";
import globalStyles from "../../utils/globalStyles";
import regScreenStyles from "./regScreenStyles";

const RegistrationScreen = () => {
  return (
    <KeyboardContainer>
      <View style={globalStyles.appContainer}>
        <TextInput
          style={globalStyles.authInput}
          placeholder="Email"
          placeholderTextColor={"#BDBDBD"}
        ></TextInput>
      </View>
    </KeyboardContainer>
  );
};

//
// return (
//     <KeyboardContainer>
//       <View style={regScreenStyles.regUnderlay}>
//         <Avatar></Avatar>

//         <Text style={regScreenStyles.regTitle}>Registration</Text>

//         <TextInput
//           style={globalStyles.authInput}
//           placeholder="Login"
//           placeholderTextColor={"#BDBDBD"}
//         ></TextInput>

// <TextInput
//   style={globalStyles.authInput}
//   placeholder="Email"
//   placeholderTextColor={"#BDBDBD"}
// ></TextInput>

//         <View style={globalStyles.passwordContainer}>
//           <TextInput
//             style={globalStyles.authInput}
//             placeholder="Password"
//             placeholderTextColor={"#BDBDBD"}
//           ></TextInput>

//           <TouchableOpacity>
//             <Text style={globalStyles.showPasswordText}>Show</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* <TouchableOpacity style={globalStyles.authBtn}>
//         <Text style={globalStyles.authBtnText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <Text style={globalStyles.authAccountPrompt}>
//           Have an account? Sign In
//         </Text>
//       </TouchableOpacity> */}
//     </KeyboardContainer>
//   );
// };

export default RegistrationScreen;
