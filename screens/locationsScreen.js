import {StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';
import { useContext, useState } from 'react';
import { LocationContext } from '../providers/locationProvider';





export default function LocationsScreen() {

const {location} = useContext(LocationContext);

  return (
    <FlatList
    >
        <View>
        <Text> Locations Screen</Text>
        <Text style={{ fontSize: 24 }}>{location}</Text>
        </View>
    </FlatList>
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
});
