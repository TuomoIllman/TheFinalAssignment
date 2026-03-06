import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native';

import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { Activity, useEffect, useState } from 'react';
import  MapView from 'react-native-maps';
import Constant from 'expo-constants';


export default function MapScreen() {

    const [coord, setCoord] = useState();
    const [ loading, setLoading ] = useState(true);
   
    

    useEffect(()=>{
        requestLocation();
        async function requestLocation(){
         let {status} = await requestForegroundPermissionsAsync ({accuracy: Accuracy.Lowest});
            if (status != 'granted') {
                console.log('Location request denied');
                return;
        }

        const location = await getCurrentPositionAsync({accuracy: Accuracy.Lowest});
        setCoord(location.coords);
        setLoading(false);
        }

    },[]);

    if(loading){
        return(<ActivityIndicator/>);
    }





  return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: coord.latitude,
                    longitude: coord.longitude,
                    latitudeDelta: 0.0930,
                    longitudeDelta: 0.0421,
                    
                }}></MapView>

        </View>
  );
}



const styles = StyleSheet.create({
    container: {

        paddingTop: Constant.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    map: {
        
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})