import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useContext, useState } from 'react';
import { LocationContext } from '../providers/locationProvider';

export default function AddLocationScreen() {
  const [name, setName] = useState("");
  const { setLocation } = useContext(LocationContext);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={name}
        onChangeText={setName}
      />
      <Pressable style={styles.button} onPress={() => setLocation(name)}>
        <Text style={styles.buttonText}>Save Location</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
  },

    headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 50,
    color: "white",
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
