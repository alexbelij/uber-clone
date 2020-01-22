import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import Search from '../Search';
import Directions from '../Directions';

import styles from './styles';
 
function Map(){
  const [currentRegion, setCurrentRegion] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    async function loadInitialPosition(){
     const { granted } = await requestPermissionsAsync();
     if(granted){
       const { coords } = await getCurrentPositionAsync({
         enableHighAccuracy: false //FALSE WIFI, TRUE GPS
       });
       const { latitude, longitude} = coords;
       setCurrentRegion({
         latitude,
         longitude,
         latitudeDelta: 0.04,
         longitudeDelta: 0.04, 
       })
     }
    }
    loadInitialPosition();
  }, []);

  const handleLocationSelected = (data, { geometry }) => {
    const { location: {lat: latitude, lng: longitude } } = geometry;
    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    })
  }



  if(!currentRegion){
    return null;
  }

  return (
    <View style={{flex: 1}} >
      <MapView 
        initialRegion={currentRegion} 
        style={styles.map}
        showsUserLocation
        loadingEnabled  
      >
        { destination && (
          <Directions 
            origin={currentRegion}
            destination={destination}
            onReady={() => {}}
          />
        )}
      </MapView>
      <Search onLocationSelected={handleLocationSelected} />
    </View>
  )
}
export default Map;