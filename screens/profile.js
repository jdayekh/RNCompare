import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, {
  Callout,
  MapContainer,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import React, { Component, useEffect, useState } from "react";

import Geolocation from "@react-native-community/geolocation";

const profile = (props, { navigation }) => {
  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);

  Geolocation.getCurrentPosition(
    (pos) => {
      setLat(parseFloat(pos.coords.latitude));
      setLng(parseFloat(pos.coords.longitude));
    },
    (error) => console.log(error)
  );

  const [error, setError] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        loadingIndicatorColor="#e21d1d"
        ref={(map) => (map = map)}
        style={{
          width,
          height,
        }}
        loadingEnabled={true}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
          title="Device Location"
          description="This is the device location!"
        />
      </MapView>
    </View>
  );
};

export default profile;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const map_width = "110%";
const map_height = "100%";
const width_proportion_left = "95%";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    flex: 1,
    width,
    height,
  },





});
