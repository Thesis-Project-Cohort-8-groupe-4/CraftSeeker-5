import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { io } from "socket.io-client";
import ChatWindow from './components/screens/ChatWindow';
import{ NativeBaseProvider} from "native-base"
import WorkerProfil from './components/screens/WorkerProfil/WorkerProfil';
import SignIn from './components/screens/SignIn';
import SignUpWorker from './components/screens/worker/RegisterWorker';
import Inbox from './components/screens/Inbox';
export default function App() {


  return (
    <NativeBaseProvider>
    <View>
      <Text>life is shit</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {/* <WorkerProfil></WorkerProfil> */}
          {/* <ChatWindow></ChatWindow> */}
        {/* <SignIn></SignIn> */}
        {/* <SignUpWorker></SignUpWorker> */}
        <Inbox></Inbox>
      </ScrollView>
    </View>
    </NativeBaseProvider>
  );
}
