import React from'react'
import { StyleSheet, Text, view } from 'react-native';
import 'react-native-gesture-handler'
import Index from './file/index'
//import File from './file/Pages/produk'

import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCrfuw7W1XwhDHx_YE50ZxBwMDLsBpRrAQ",
  authDomain: "final-project-b040d.firebaseapp.com",
  projectId: "final-project-b040d",
  storageBucket: "final-project-b040d.appspot.com",
  messagingSenderId: "530635603221",
  appId: "1:530635603221:web:96a0651b5da103f8e3fd1c"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default function App() {
    return (
        <Index/>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        color:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})