import React from 'react';
import ChatWindow from './components/screens/ChatWindow';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from './components/screens/worker/WorkersDashBoard/DashBoard';
// import WorkerProfil from './components/screens/WorkerProfil/WorkerProfil';
// import Edit from './components/screens/WorkerProfil/Edit';
// import Navigation from './Navigation';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { io } from "socket.io-client";
// import ChatWindow from './components/screens/ChatWindow';
// import { NativeBaseProvider } from "native-base"
// import Authentication from './components/screens/Authentication';
// // import SignUpWorker from './components/screens/worker/RegisterWorker';
// import Inbox from './components/screens/Inbox';
// import OffersScreen from './components/screens/worker/OffersScreen';
// import ReportScreen from './components/screens/worker/ReportScreen';
// import HistoryScreen from './components/screens/worker/HistoryScreen';
// import ChatWindow2 from './components/screens/Chatwindow2';

// const Stack = createStackNavigator();

export default function App() {
  return (
    // <HistoryScreen></HistoryScreen>
    // <Text>Render app here</Text>
    // <ChatWindow2></ChatWindow2>
    // {/* <ReportScreen/> */}
    <ChatWindow/>
    // <OffersScreen/>
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


