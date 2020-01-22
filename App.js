import React from 'react';
import { StyleSheet } from 'react-native';

import Map from './src/components/Map';
export default function App() {
  return (
    <Map className={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});