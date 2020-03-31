import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Search from './Search';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

function Map() {
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setCoordinates(coords);
        setLoading(false);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, maximumAge: 10000, timeout: 10000},
    );
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFF" />
      ) : (
        <>
          <MapView
            initialRegion={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0068,
              longitudeDelta: 0.0068,
            }}
            style={styles.map}
            showsUserLocation
            loadingEnabled
          />
          <Search />
        </>
      )}
    </View>
  );
}

export default Map;
