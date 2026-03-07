import {
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import { useState, useContext, useEffect  } from "react";
import { UserContext } from "../providers/userProvider";



export default function LoginScreen({ navigation }) {

  const {username, saveUserName} = useContext(UserContext);

  const [user, onChangeUser] = useState("");
  const [password, onChangePassword] = useState("");

  const correctUser = "Tuomo";
  const correctPassword = "salasana";

useEffect(() => {
  if (username) {
    navigation.navigate("Home");
  }
}, [username]);

 const handleLogin = async () => {
  if (user === correctUser && password === correctPassword) {
    await saveUserName(user);  
    navigation.navigate("Home"); 
  } else {
    Alert.alert("Login failed");
  }
};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        indicatorStyle="white"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Text style={styles.headerText}>Welcome to Location App</Text>

        <Text style={styles.regularText}>Login to continue </Text>

        <TextInput
          style={styles.input}
          value={user}
          onChangeText={onChangeUser}
          placeholder={"Username"}
          clearButtonMode={"always"}
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder={"Password"}
          maxLength={14}
          secureTextEntry={true}
          clearButtonMode={"always"}
        />

        <Pressable
          style={styles.button}
          onPress={() => {handleLogin()}}
        >
          <Text style={styles.buttonText}>Log in!</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#ffffff",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#ffffff",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    backgroundColor: "white",
    width: 300,
  },
  buttonText: {
    fontSize: "25",
    textAlign: "center",
    color: "white",
  },
  button: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#1b380a",
    backgroundColor: "#1b380a",
    marginVertical: 10,
    width: 300,
    marginTop: 50,
    padding: 5,
  },
});
