import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';

export default function Search({ onLocationSelected }) {

  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key: "API KEY",
        language: "pt"
      }}
      textInputProps={{
        autoCapitalize: "none",
        autoCorrect: false
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={styles}
    />
  );
}
