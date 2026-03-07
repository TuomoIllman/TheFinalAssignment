import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export default function UserProvider({ children }) {

  const [username, setUserName] = useState();

  useEffect(()=>{
    (async function(){
        const uname = await AsyncStorage.getItem("username");
        if(uname){
            setUserName(uname);
        }

    })();
  },[]);

  async function saveUserName(uname){
    await AsyncStorage.setItem('username', uname);
    setUserName(uname);
  }

   async function logout() {
    await AsyncStorage.removeItem("username");
    setUserName(null); 
  }

  return (
    <UserContext.Provider value={{ username, saveUserName, logout }}>
      {children}
    </UserContext.Provider>
  );
}


