import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from "react-native";

import {
  Accuracy,
  geocodeAsync,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

import { Activity, useEffect, useState } from "react";
import MapView from "react-native-maps";
import Constants from "expo-constants";

export default function MapScreen({route}) {
  const defaultCoord = { latitude: 60.1699, longitude: 24.9384 }; 
  const [coord, setCoord] = useState(defaultCoord);
  const [loading, setLoading] = useState(true);

  const locationName = route.params?.locationName;

  useEffect(() => {
    (async () => {
      
      await requestForegroundPermissionsAsync();

      if (locationName) {
        try {
          const result = await geocodeAsync(locationName);
          if (result.length > 0) {
            setCoord({
              latitude: result[0].latitude,
              longitude: result[0].longitude,
            });
          }
        } catch (error) {
          console.log("Geocode error:", error);
        }
      }

      setLoading(false);
    })();
  }, [locationName]);

  if (loading || !coord) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: coord.latitude,
          longitude: coord.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222", 
  },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
  map: {
    flex: 1,
    margin: 10,
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    backgroundColor: "white",
  },

  button: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#1b380a",
    backgroundColor: "#1b380a",
    marginVertical: 10,
    width: 300,
    marginTop: 50,
   
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    margin: 10,
    
  },
});
