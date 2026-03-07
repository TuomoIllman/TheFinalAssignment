import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import { useContext, useState } from 'react';
import { LocationContext } from '../providers/locationProvider';



export default function AddLocationScreen() {
  const { saveLocation } = useContext(LocationContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const[rating, setRating] = useState("")

  function handleSave() {

    const newLocation = {
      name: name,
      description: description,
      rating: rating
    };

    saveLocation(newLocation);
    Alert.alert("Location Saved!")

    setName("");
    setDescription("");
    setRating("");
  }

 
  
  
  return (
     <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Location name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating (1-5 starts)"
        value={rating}
        onChangeText={setRating}
        keyboardType={"numeric"}
      />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Location</Text>
      </Pressable>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
