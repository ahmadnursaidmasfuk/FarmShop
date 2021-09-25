import axios from "axios";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, alert, Alert } from "react-native";
import firebase from "firebase";


export default function Register ({ navigation, }) {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");
   const [password, setPassword] = useState("");
   const [isError, setIsError] = useState(false);

  const submit = () => {
    console.log({name, email, number, password});
    const Data = {
      name,
      email,
      number,
      password,
    }
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
    // Signed in
     var user = userCredential.user;
     console.log(user)
     Alert.alert('Registration succes')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    Alert.alert("Registration failed", errorMessage);
  });

      }
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 200, width: 200, marginTop:100 }}
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
          placeholder="Nama"
           value={name}
           onChangeText={(value)=>setName(value)}
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
          placeholder="Email"
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
          placeholder="Nomer Handphone"
           value={number}
           onChangeText={(value)=>setNumber(value)}
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
        <Button onPress={submit} title="Register" />
        <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")} style={{marginTop: 10,fontSize:12, color: 'black', alignItems:'center'}}>
            <Text>Already have an account?</Text>
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
      height: 370,
      width: 370,
      marginTop:50,
      alignItems: 'center',
  }
});
