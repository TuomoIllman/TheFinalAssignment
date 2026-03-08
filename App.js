import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationProvider from './providers/locationProvider';

import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/logInScreen';
import LocationsScreen from './screens/locationsScreen';
import AddLocationScreen from './screens/addLocationScreen';
import MapScreen from './screens/mapView';
import UserProvider from './providers/userProvider';
import CountrySearchScreen from './screens/countrySearchScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <LocationProvider>
      <UserProvider>
      <NavigationContainer>
        
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1b380a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
          <Stack.Screen name = 'Login' component = {LoginScreen} />
          <Stack.Screen name = 'Home' component = {HomeScreen} />
          <Stack.Screen name = 'Map' component = {MapScreen} />
          <Stack.Screen name = 'Locations' component = {LocationsScreen} />
          <Stack.Screen name = 'AddLocation' component = {AddLocationScreen} />
          <Stack.Screen name = 'CountrySearch' component = {CountrySearchScreen}/>
   
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
    </LocationProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  footerContainer:{
    
  }

});




