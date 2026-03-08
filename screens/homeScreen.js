import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/userProvider";



export default function HomeScreen({navigation}) {

  const { username } = useContext(UserContext);


  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Welcome {username}</Text>
        <Text style = {styles.headerText}> Choose a View</Text>
        

         <Pressable
        style = {styles.button}
        onPress = {()=> navigation.navigate("AddLocation")}
        >
          <Text style = {styles.buttonText}>Add Location</Text>
        </Pressable>
        
         <Pressable
        style = {styles.button}
        onPress = {()=> navigation.navigate("Locations")}
        >
          <Text style = {styles.buttonText}>View Locations</Text>
        </Pressable>
        <Pressable
        style = {styles.button}
        onPress = {()=> navigation.navigate("Map")}
        >
          <Text style = {styles.buttonText}>View Map</Text>
        </Pressable>

        <Pressable
        style = {styles.button}
        onPress = {()=> navigation.navigate("CountrySearch")}
        >
          <Text style = {styles.buttonText}>Country Search</Text>
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
    paddingTop: 10,
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

  regularText:{
    fontSize:10,
    color:"white",
    textAlign: "center",
    margin: 10,
  },

 
});
