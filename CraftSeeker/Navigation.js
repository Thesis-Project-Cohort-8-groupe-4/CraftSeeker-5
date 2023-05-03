import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Edit from './components/screens/WorkerProfil/Edit';

const Stack = createNativeStackNavigator();
export default function Navigation() {

    

  return (
    <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              
              <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
          </NavigationContainer>
  )
}
