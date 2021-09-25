import axios from "axios";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from "react-native";
import {Data} from'./data'

export default function Home({navigation}) {
    useEffect(()=>{
        console.log(Data)
    },[])
        return(
            <View style={styles.container}>
                    <ImageBackground style={styles.header} source={require('./asset/product1.jpeg')}>
                        <TouchableOpacity onPress={()=>navigation.navigate("MainApp")} >
                        <Image style={{height:30,width:30}} source={require('./asset/arrow.png')}></Image></TouchableOpacity>
                        <Image style={{height:30,width:30, marginLeft:250,}} source={require('./asset/keranjang.png')}></Image>
                        <Image style={{height:20,width:20, marginLeft:10, marginTop:5}} source={require('./asset/titik.png')}></Image>
                    </ImageBackground>
                    <View style={styles.header2}>
                        <View style={styles.contenHeader}>
                        <View styles={{flexDirection:'column'}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Buah Apel</Text>
                            <Text style={{color:'red',fontWeight:'bold', fontSize:18}}>Rp. 30.000/kg</Text>
                            </View>
                            <Image style={{marginTop:20,marginLeft:200,width:20,height:20}} source={require('./asset/love.png')}></Image>
                        </View>
                        <View style={{marginTop:10,borderBottomWidth:1, borderBottomtColor:'grey', width:360}}></View>
                        <View style={styles.contenHeader}>
                            <Image style={{height:20,width:20,marginTop:5}} source={require('./asset/uang.png')}></Image>
                            <Text style={{marginTop:3,marginLeft:5,fontWeight:'bold',fontSize:16,color:'grey'}}>4.4/5</Text>
                            <View style={{marginLeft:5,marginTop:5, borderRightWidth:2, borderRightColor:'grey', height:20}}></View>
                            <Text style={{marginLeft:5,marginTop:5,color:'grey',fontWeight:'bold'}}>50 Sold/day</Text>
                            <Image style={{marginTop:10,marginLeft:80,width:40,height:20}} source={require('./asset/truk.png')}></Image>
                            <Text style={{marginLeft:10,marginTop:10,color:'grey',fontWeight:'bold'}}>Free Delivery</Text>
                        </View>
                    </View>
                    <View style={styles.header3}>
                        <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'green',borderRadius:10, marginLeft:20}}>
                            <Image style={{width:30,height:30}} source={require('./asset/keranjang.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:100,height:40,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'red',borderRadius:10, marginLeft:20}}>
                            <Text>Beli Sekarang</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:140,height:40,alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'red',borderRadius:10, marginLeft:20}}>
                            <Image style={{width:30,height:30}} source={require('./asset/keranjang.png')}></Image>
                            <Text style={{color:'white',fontWeight:'bold'}}>+ Keranjang</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    header:{
        height:360,
        width:360,
        paddingTop:10,
        paddingLeft: 20,
        paddingRight:20,
        marginTop:35,
        flexDirection:'row'
    },
    header2:{
        height:100,
        width:360,
        paddingTop:5,
        flexDirection:'column',
        backgroundColor:'white',
        borderRadius:8
    },
    contenHeader:{
        flexDirection:'row',
        marginLeft:10
    },
    header3:{
        marginTop:210,
        height:70,
        width:360,
        paddingTop:10,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:8
    },
    
})