import React, {useEffect} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function Telegram() {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontWeight:'bold',fontSize:24}}>My Account</Text>
                    <Image style={{height:20,width:20, marginLeft:120,marginTop:10}} source={require('./asset/notif.png')}></Image>
                    <Image style={{height:20,width:20, marginLeft:15,marginTop:10}} source={require('./asset/keranjang.png')}></Image>
                    <Image style={{height:20,width:20, marginLeft:15,marginTop:10}} source={require('./asset/home.png')}></Image>
                </View>
                <View style={{marginTop:10,marginLeft:10 ,flexDirection:'row', alignItems:'flex-start'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Ahmad Nur Sa'id Masfuk</Text>
                    <Text style={{fontWeight:'bold',fontSize:12,marginTop:5,marginLeft:70}}>Silver Member</Text>
                </View>
                <View style={styles.header1}>
                <View style={{flexDirection:'row'}}>
                        <Image style={{width:40,height:40, marginTop:10, marginLeft:10}} source={require('./asset/profil.png')}></Image>
                        <View style={{marginLeft:20,marginTop:10,flexDirection:'column'}}>
                            <Text style={{color:'grey',fontSize:12}}>Following : 4</Text>
                            <Text style={{color:'grey',fontSize:12}}>Follower : 10</Text>
                        </View>
                        <View style={{marginLeft:20,marginTop:10,flexDirection:'column'}}>
                            <Text style={{color:'red',fontSize:12,fontWeight:'bold'}}>Kupon Saya</Text>
                            <Text>9 Kupon Baru</Text>
                        </View>
                        <View style={{marginLeft:20,marginTop:10,flexDirection:'column'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'red',fontSize:12,fontWeight:'bold'}}>Top Up</Text>
                                <Text style={{marginLeft:10,color:'black',fontSize:12,fontWeight:'bold'}}>Saldo:</Text>
                            </View>
                            <Text>Rp. 150.000</Text>
                        </View>
                        </View>
                        <View style={{marginTop:10,borderBottomWidth:1, borderBottomColor:'#A8AAAB'}}></View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:50}}>Akun Pribadi</Text>
                        <View style={{marginTop:5,borderBottomWidth:3, borderBottomColor:'red',width:180}}></View>
                        </View>
                        <Text style={{marginLeft:60}}>Akun Toko</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:8}}>
                        <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16}}>Transaksi</Text>
                        <Text style={{marginTop:5,marginLeft:150,fontSize:12}}>Lihat Semua Transaksi</Text>
                    </View>
                <View style={styles.header2}>
                    <Text style={{fontWeight:'bold', marginLeft:10}}>Menunggu Pembayaran</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>Semua transaksi yang belum dibayar</Text>
                    <View style={{marginTop:5,borderBottomWidth:2, borderBottomColor:'#A8AAAB'}}></View>
                    <View style={styles.subContenHeader2}>
                        <TouchableOpacity style={{flexDirection:'column',alignItems:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'silver', borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/semua.png')}></Image>
                        </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Lihat</Text>
                        <Text style={{color:'black',fontWeight:'bold'}}>Semua</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,height:80,width:70, flexDirection:'column', alignItems:'center'}}>
                        <View style={{width:40,height:40, backgroundColor:'silver', borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:30,height:30,}} source={require('./asset/delivery.png')}></Image>
                        </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Gratis</Text>
                        <Text style={{color:'black',fontWeight:'bold'}}>Ongkir</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'silver', borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/dikemas.png')}></Image>
                        </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Dikemas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'silver', borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:30,height:30,}} source={require('./asset/dikirim.png')}></Image>
                        </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Dikirim</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:2,flexDirection:'column', alignItems:'center',height:80,width:70,}}>
                        <View style={{width:40,height:40, backgroundColor:'silver', borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                            <Image style={{width:25,height:25,}} source={require('./asset/rating.png')}></Image>
                        </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Beri</Text>
                        <Text style={{color:'black',fontWeight:'bold'}}>Penilaian</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:5,borderBottomWidth:2, borderBottomColor:'#A8AAAB'}}></View>
                    <Text style={{fontWeight:'bold', marginLeft:10}}>Komplain sebagai pembeli</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>Lihat status komplain</Text>
                </View>
                <Text style={{marginLeft:10,fontWeight:'bold',fontSize:16, marginTop:80}}>Favorit saya</Text>
                <View style={styles.header3}>
                    <Text style={{marginTop:10,fontWeight:'bold', marginLeft:10}}>Terakhir dilihat</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>Cek produk terakhir yang dilihat</Text>
                    <View style={{marginTop:5,borderBottomWidth:2, borderBottomColor:'#A8AAAB'}}></View>
                    <Text style={{marginTop:10,fontWeight:'bold', marginLeft:10}}>Wishlist</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>Cek produk terakhir yang wishlist</Text>
                    <View style={{marginTop:5,borderBottomWidth:2, borderBottomColor:'#A8AAAB'}}></View>
                    <Text style={{marginTop:10,fontWeight:'bold', marginLeft:10}}>Toko Favorit</Text>
                    <Text style={{fontSize:12, marginLeft:10}}>Lihat toko yang anda ikuti</Text>
                    <View style={{marginTop:5,borderBottomWidth:2, borderBottomColor:'#A8AAAB'}}></View>
                    <Text style={{marginTop:10,fontWeight:'bold', marginLeft:10}}>Langganan</Text>
                </View>
                
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
 
    },
    header:{
        height:90,
        width:360,
        flexDirection:'row',
        paddingTop:50,
        paddingLeft:10,
        backgroundColor:'white'
    },
    header1:{
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        marginTop:5,
        height:90,
        width:360,
        flexDirection:'column',
        backgroundColor:'white'
    },
    header2:{
        borderRadius:10,
        marginTop:5,
        height:180,
        width:360,
        flexDirection:'column',
        backgroundColor:'white'
    },
    subContenHeader2:{
        flexDirection:'row',
        marginTop:10
    },
    header3:{
        borderRadius:10,
        marginTop:5,
        height:200,
        width:360,
        flexDirection:'column',
        backgroundColor:'white'
    },
})