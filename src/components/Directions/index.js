import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
// import { Container } from './styles';

export default function Directions({destination, origin, onReady}) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={'AIzaSyBIuZDy_cKsPTBfD2VG5XNV6Ty_SlsNlwk'}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
