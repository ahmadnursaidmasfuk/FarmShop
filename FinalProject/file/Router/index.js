import React, {Component, useContext} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../Pages/Home'
import ProfilScreen from '../Pages/profil'
import LoginScreen from '../Pages/Login'
import NotifScreen from '../Pages/notif'
import ForyouScreen from '../Pages/foryou'
import FeedScreen from '../Pages/feed'
import PertamaScreen from '../Pages/pertama'
import RegisterScreen from '../Pages/Register'
import ProdukScreen from '../Pages/produk'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const IconBottom = (props) => {
    const {color, focused} = props.data
    let colorSelected = focused ? color :'grey'
    return(
        <View>
            <Image style={{height: 23, width: 23,}} source={props.image}/>
        </View>
    )
}

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown:false}} >
                    <Stack.Screen name="PertamaScreen" component={PertamaScreen}/>
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="MainApp" component={MainApp}/>
                    <Stack.Screen name="ProdukScreen" component={ProdukScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MainApp =()=>(
        <Tab.Navigator 
            screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./asset/home.png')}/>
                    )
                }}
            />
            <Tab.Screen name="Feed" component={FeedScreen}
                options={{
                        tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./asset/feed.png')}/>
                                )
                            }}/>
            <Tab.Screen name="For You" component={ForyouScreen}
                options={{
                        tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./asset/foryou.png')}/>
                                )
                            }}
            />
            <Tab.Screen name="Notifications" component={NotifScreen}
                options={{
                        tabBarIcon: (props) => (
                            <IconBottom data={props} image={require('./asset/notif.png')}/>
                            )
                    }}/>
            <Tab.Screen name="Profil" component={ProfilScreen}
                    options={{
                            tabBarIcon: (props) => (
                               <IconBottom data={props} image={require('./asset/profil.png')}/>
                                )
                            }}/>
        </Tab.Navigator>
)
