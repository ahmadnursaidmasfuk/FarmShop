import axios from "axios";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{marginTop:140, fontSize: 60, fontWeight: "bold", color:'white' }}>welcome</Text>
      <Image
        style={{ height: 200, width: 200, marginTop:50 }}
        source={require("./asset/logo.png")}
      />
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom:50, color:'white' }}>Farm Shop</Text>
      <View style={styles.subHeader}>
      <View>
        <View style={styles.button}>
        <Button onPress={()=>navigation.navigate("LoginScreen")}title="Login"/>
        </View>
        <View style={styles.button}>
        <Button onPress={()=>navigation.navigate("RegisterScreen")}title="Register"/>
      </View>
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
      borderRadius:5,
      backgroundColor: 'white',
      height: 100,
      width: 300,
      marginTop:50,
      alignItems: 'center',
      marginBottom:200
  },
  button:{
      marginTop:10,
      width:270,
  }
});
