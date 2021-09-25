import axios from "axios";
import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, alert, Alert } from "react-native";
import firebase from "firebase";

export default function Login({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isError, setIsError] = useState(false);


  const submit = () => {
    console.log({email, password});
    const Data = {
      email,
      password,
    }
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log(Data);
      var user = userCredential.user;
      if(email==email&&password==password){
        navigation.navigate('MainApp')
      }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert("Something wrong", errorMessage);
    });

      }
  return (
    <View style={styles.container}>
      <Text style={{marginTop:180, fontSize: 50, fontWeight: "bold", color:'white' }}>Welcome Back</Text>
      <Image
        style={{ height: 200, width: 200, marginTop:50 }}
        source={require("./asset/logo.png")}
      />
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom:50, color:'white' }}>Farm Shop</Text>
      <View style={styles.subHeader}>
      <View>
        <TextInput
          style={{
            marginTop:30,
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Email"
           value={email}
           onChangeText={(value)=>setEmail(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Password"
           value={password}
           onChangeText={(value)=>setPassword(value)}
        />
        <Button onPress={submit} title="Login"/>
        <TouchableOpacity style={{marginTop: 10,fontSize:12, color: 'black', alignItems:'center'}}>
            <Text>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#152238",
    justifyContent: "center",
    alignItems: "center",
  },
  subHeader: {
      borderRadius:50,
      backgroundColor: 'white',
      height: 350,
      width: 370,
      marginTop:50,
      alignItems: 'center',
      marginVertical: 30
  }
});
