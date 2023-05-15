import React from 'react';

// import ChatWindow from './components/screens/ChatWindow';
// import CreateAChatroom from './components/screens/CreateAChatroom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import Authentication from './components/screens/Authentication';
// import Inbox from './components/screens/Inbox';
// import OffersScreen from './components/screens/worker/OffersScreen';
// import ReportScreen from './components/screens/worker/ReportScreen';
// import HistoryScreen from './components/screens/worker/HistoryScreen';
// import ChatWindow2 from './components/screens/Chatwindow2';
import SignUpClient from './components/screens/client/RegisterAsAClient'
import SignUpWorker from './components/screens/worker/RegisterWorker';

const Stack = createStackNavigator();

export default function App() {
  
  return (
     <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="SignIn" component={Authentication} />
        <Stack.Screen name="SignUpWorker" component={SignUpWorker} />
        <Stack.Screen name = "SignUpClient" component={SignUpClient}/>
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen name="WorkerProfil" component={WorkerProfil}/> */}
        {/* <Stack.Screen name="ChatWindow" component={ChatWindow} />
        <Stack.Screen name="OfferScreen" component={OffersScreen} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="ReportScreen" component={ReportScreen}/>
        <Stack.Screen name="HistoryScreen" component={HistoryScreen}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}


