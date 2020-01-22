import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => {
  return (
    <MapViewDirections 
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyCA_yeG_zYBF0oq4cRxwXZJRkKKwRngX5c"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
export default Directions;
