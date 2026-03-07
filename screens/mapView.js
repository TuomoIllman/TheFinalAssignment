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

export default function MapScreen() {
  const [coord, setCoord] = useState({ latitude: 60.1699, longitude: 24.9384 });
  const [text, setText] = useState("");
  //const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    (async function () {
      const { status } = await requestForegroundPermissionsAsync();
    })();
  }, []);
  //if(loading){
  //return(<ActivityIndicator/>);

  async function getLocation() {
    const result = await geocodeAsync(text);
    setCoord(result[0]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={text}
          onChangeText={setText}
        ></TextInput>
        <Pressable style={styles.button} onPress={getLocation}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: coord.latitude,
          longitude: coord.longitude,
          latitudeDelta: 0.093,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
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
