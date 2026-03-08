import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  Image, 
  StyleSheet, 
  Pressable, 
} from "react-native";
import axios from "axios";

export default function CountrySearchScreen() {
  const [keyword, setKeyword] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const searchCountries = async () => {
    if (!keyword) return;
    setError(null);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${keyword}`);
      setCountries(response.data);
    } catch (err) {
      console.log(err);
      setError("No countries found.");
      setCountries([]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image 
        source={{ uri: item.flags?.png }} 
        style={styles.flag} 
        resizeMode="contain"
      />
      <Text style={styles.name}>{item.name.common}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Countries</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter country name"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable style={styles.button} onPress={searchCountries}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>

      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={countries}
        keyExtractor={(item) => item.cca3} 
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#222222",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color:"white",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    padding: 10,
    margin:12,
  },
 
    button: {
    backgroundColor: "#1b380a",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    marginBottom: 10,
    color:"white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    color:"white",
  },
});