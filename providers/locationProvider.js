import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocationContext = createContext();

export default function LocationProvider({ children }) {

  const [locations, setLocations] = useState([]);
   useEffect(() => {
    (async function () {
      const stored = await AsyncStorage.getItem("locations");

      if (stored) {
        setLocations(JSON.parse(stored));
      }
    })();
  }, []);

  async function saveLocation(newLocation) {

    const updated = [...locations, newLocation];

    await AsyncStorage.setItem("locations", JSON.stringify(updated));

    setLocations(updated);
  }


  return (
    <LocationContext.Provider value={{ locations, saveLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

