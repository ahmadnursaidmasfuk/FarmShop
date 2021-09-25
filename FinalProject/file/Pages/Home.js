import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from "react-native";
import {Data} from'./data'

export default function Home({navigation}) {
    useEffect(()=>{
        console.log(Data)
    },[])
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.Header} source={require('./asset/background.jpg')}>
                <View style={styles.subHeader}>
                    <View style={styles.subContenHeader}>
                    <Image style={{width:20,height:20,marginLeft:10}} source={require('./asset/cari.png')}></Image>
                    <TextInput style={{marginLeft:10}} placeholder="Searching..."></TextInput>
                    </View>
                    <Image style={{width:18,height:18,marginLeft:10,marginRight:10,marginTop:50}} source={require('./asset/love.png')}></Image>
                    <Image style={{width:23,height:23,marginRight:8,marginTop:50}} source={require('./asset/pesan.png')}></Image>
                    <Image style={{width:25,height:25,marginTop:50}} source={require('./asset/keranjang.png')}></Image> 
                </View>
                <TouchableOpacity style={{marginLeft:50,marginTop:90,height:25, width:130, backgroundColor:'black',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Lihat Semua Promo</Text>
                </TouchableOpacity>
            </ImageBackground>

        <View style={styles.container}>
            <View style={styles.Header1}>
                <View style={styles.subHeader1}>
                    <View style={styles.subContenHeader1}>
                        <TouchableOpacity style={{width:40,height:40, backgroundColor:'grey', borderRadius:5,marginLeft:5,alignItems:"center",justifyContent:'center'}}>
                        <Image style={{width:25,height:25,}} source={require('./asset/scan.png')}></Image>
                        </TouchableOpacity>
                        <Image style={{width:30,height:30,marginLeft:20}} source={require('./asset/uang.png')}></Image>
                        <TouchableOpacity style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:5}}>RP. 150.000</Text>
                        <Text style={{marginLeft:5, color:'red',fontSize:12,fontWeight:'bold'}}>Top Up</Text>
                        </TouchableOpacity>
                        <View style={{marginLeft:20, borderRightWidth:2, borderRightColor:'#A8AAAB', height:35}}></View>
                        <Image style={{width:40,height:40, marginLeft:10}} source={require('./asset/diskon.png')}></Image>
                        <TouchableOpacity style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:5}}>Kupon Saya</Text>
                        <Text style={{marginLeft:5, color:'red',fontSize:12,fontWeight:'bold'}}>Kupon Baru</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subContenHeader2}>
                        <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/semua.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Lihat</Text>
                        <Text style={{color:'white',fontWeight:'bold'}}>Semua</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,height:80,width:70, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/delivery.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Gratis</Text>
                        <Text style={{color:'white',fontWeight:'bold'}}>Ongkir</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:20,height:25,}} source={require('./asset/topup.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>TopUp &</Text>
                        <Text style={{color:'white',fontWeight:'bold'}}>Tagihan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:20,height:30,}} source={require('./asset/lokasi.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Deals di</Text>
                        <Text style={{color:'white',fontWeight:'bold'}}>Sekitar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/vocher.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Cashback</Text>
                        <Text style={{color:'white',fontWeight:'bold'}}>& Voucher</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subContenHeader2}>
                        <TouchableOpacity style={{marginLeft:2, flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/sayur.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Sayuran</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2, flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/buah.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Buah</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:28,height:25,}} source={require('./asset/alat.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Alat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/pupuk.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Pupuk</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center', justifyContent:'center',height:80,width:70}}>
                        <View style={{width:40,height:40, backgroundColor:'white', borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/bibit.png')}></Image>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold'}}>Bibit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.Header2}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={{color:"red",fontWeight:'bold', marginLeft:20, marginTop:10,fontSize:18}}>Flash Sell</Text>
                    <Text style={{marginTop:12,marginLeft:220,fontWeight:'bold'}}>All</Text>
                    <View style={{width:10,height:10,backgroundColor:'red',marginTop:17, marginLeft:5,borderRadius:5}}></View>
                </TouchableOpacity>
                <View style={{borderBottomWidth:1,borderBottomColor:'grey', width:320, marginLeft:20}}></View>
            <View style={styles.subContenHeader3}>
            <SafeAreaView>
                    <FlatList
                    numColumns={3}
                    data={Data}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>{
                            return(
                                <>
                                <TouchableOpacity onPress={()=>navigation.navigate("ProdukScreen")}  style={styles.product}>
                                    <View style={{flexDirection: 'column', width:100,height:150,alignItems:'center',}}>
                                        <Image style={{height: 100, width: 100, borderRadius: 10, borderWidth:1,borderColor:'grey'}}source={item.image}
                                            />
                                        <Text style={{fontSize:12,marginTop:10,fontWeight:'bold'}}>{item.title}</Text>
                                        <Text style={{fontSize:12}}>Rp. {item.harga}</Text>
                                    </View>
                                </TouchableOpacity>
                                </>)
                        }}
                        />
                </SafeAreaView>
                </View>
            </View>
            <View style={styles.Header3}>
            <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={{color:"red",fontWeight:'bold', marginLeft:20, marginTop:10,fontSize:18}}>Product Favorit</Text>
                    <Text style={{marginTop:12,marginLeft:180,fontWeight:'bold'}}>All</Text>
                    <View style={{width:10,height:10,backgroundColor:'red',marginTop:17, marginLeft:5,borderRadius:5}}></View>
                </TouchableOpacity>
                <View style={{borderBottomWidth:1,borderBottomColor:'grey', width:320, marginLeft:20}}></View>
                </View>            
         </View>
         </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    Header:{
        width:370,
        height:220,
        backgroundColor:'blue',
    },
    subHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    subContenHeader:{
        width:230,
        marginTop:50,
        height: 30,
        marginLeft:10,
        backgroundColor:'white',
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center'
    },
    Header1:{
        width:370,
        height:250,
        backgroundColor:'red',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
    },
    subHeader1:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContenHeader1:{
        width:340,
        marginTop:10,
        height: 50,
        backgroundColor:'white',
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
    },
    subContenHeader2:{
        marginTop:15,
        flexDirection:'row',
    },
    Header2:{
        width:360,
        height:220,
        backgroundColor:'white'
    },
    product:{
        backgroundColor: 'silver',
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        borderColor:'grey',
        marginTop:10,
        marginLeft:15
    },
    Header3:{
        backgroundColor:'white',
        width:360,
        marginTop:5
    }
})