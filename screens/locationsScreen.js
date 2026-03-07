import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { useContext, useState } from "react";
import { LocationContext } from "../providers/locationProvider";

const Separator = () => <View style={styles.separator} />;

export default function LocationsScreen({ navigation }) {
  const { locations } = useContext(LocationContext);

  const renderStars = (rating) => {
    const r = parseInt(rating) || 0;
    return "⭐".repeat(r) + "☆".repeat(5 - r);
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate("Map", { locationName: item.name })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.rating}>Rating:{renderStars(item.rating)}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Saved Locations </Text>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
      <Pressable
        onPress={() => navigation.navigate("AddLocation")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add New Location!</Text>
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
    width: "100%",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    color: "white",
  },

  item: {
    padding: 10,
    backgroundColor: "#1b380a",
    borderRadius: 8,
    margin: 10,
  },
  name: {
    fontSize: 20,
    color: "white",
  },

  description: {
    fontSize: 20,
    color: "white",
  },
  rating: {
    fontSize: 18,
    color: "#f1c40f",
    marginTop: 12,
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: "gray",
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
