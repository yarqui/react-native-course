import { useState } from "react";
import { View, Text } from "react-native";
import globalStyles from "../../../utils/globalStyles";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import Avatar from "../../../components/Avatar/Avatar";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={globalStyles.bgImage}
        source={require("../../../images/bg.jpg")}
      />

      <View style={{ ...globalStyles.authUnderlay, height: "80%" }}>
        <Avatar />
      </View>

      <View
        style={{
          ...globalStyles.appContainer,
          marginTop: "60%",
        }}
      >
        <Text>Profile?</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
