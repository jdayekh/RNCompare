import {
  AppRegistry,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {
  Callout,
  MapContainer,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import React, {Component, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';

const profile = (props, {navigation}) => {
  const [lat, setLat] = React.useState('');
  const [lng, setLng] = React.useState('');

  Geolocation.getCurrentPosition(
    (pos) => {
      console.log('pos -> ', pos);
      console.log('Position.latitude -> ', pos.coords.latitude);
      console.log('Position.longitude -> ', pos.coords.longitude);
      setLat(pos.coords.latitude);
      setLng(pos.coords.longitude);
      console.log('xxx: ' + lat);
      console.log('xxx: ' + lng);
    },
    (error) => console.log(error),
  );

  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.421998333333335,
          longitude: -122.08400000000002,
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
        loadingEnabled={true}>
        <Marker
          coordinate={{
            latitude: 37.421998333333335,
            longitude: -122.08400000000002,
          }}
          title="Flatiron School Atlanta"
          description="This is where the magic happens!"
        />
      </MapView>
    </View>
  );
};

export default profile;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const map_width = '110%';
const map_height = '100%';
const width_proportion_left = '95%';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    flex: 1,
    width,
    height,
  },

  pageName: {
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  containerMap: {
    width: map_width,
    marginHorizontal: 5,
    height: Dimensions.get('window').width / 2, // approximate a square
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
});
