import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import Search from '../Search';
import styles from './styles';
 
function Map(){
  const [currentRegion, setCurrentRegion] = useState(null);
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
      />
      <Search />
    </View>
  )
}
export default Map;