import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { name, locationDescription, latitude, longitude } = route.params;
  console.log("route.params:", route.params);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView
        style={{
          width: "100%",
          flex: 1,
        }}
        mapType="standard"
        minZoomLevel={9}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          title={name}
          coordinate={{ latitude: latitude, longitude: longitude }}
          description={locationDescription}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
