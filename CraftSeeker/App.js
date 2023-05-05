import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from './components/screens/worker/WorkersDashBoard/DashBoard';
import WorkerProfil from './components/screens/WorkerProfil/WorkerProfil';
import Edit from './components/screens/WorkerProfil/Edit';
import Navigation from './Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Navigation/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    //     <Stack.Screen name = "WorkerProfil" component={WorkerProfil}/>
    //     <Stack.Screen name="Edit" component={Edit} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}