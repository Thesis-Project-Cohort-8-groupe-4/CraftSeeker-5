import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from './components/screens/worker/WorkersDashBoard/DashBoard';
import WorkerProfil from './components/screens/WorkerProfil/WorkerProfil';
import Edit from './components/screens/WorkerProfil/Edit';
import Navigation from './Navigation';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { io } from "socket.io-client";
import ChatWindow from './components/screens/ChatWindow';
import { NativeBaseProvider } from "native-base"
import SignIn from './components/screens/SignIn';
import SignUpWorker from './components/screens/worker/RegisterWorker';
import Inbox from './components/screens/Inbox';
import OffersRequests from './components/screens/worker/WorkersDashBoard/OffersRequests';

// const Stack = createStackNavigator();

export default function App() {
  return (
    <OffersRequests/>
    // <Navigation />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    //     <Stack.Screen name="WorkerProfil" component={WorkerProfil}/>
    //     <Stack.Screen name="Edit" component={Edit} />
    //     {/* <ChatWindow></ChatWindow> */}
    //     {/* <SignIn></SignIn> */}
    //     {/* <SignUpWorker></SignUpWorker> */}
    //     {/* <Inbox></Inbox>*/}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}


