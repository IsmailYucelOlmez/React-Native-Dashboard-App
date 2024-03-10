import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';

const Stack=createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
    <Stack.Screen name='home' component={HomeScreen}/>
    <Stack.Screen name='customer' component={CustomerScreen}/>
  </Stack.Navigator>
  )
}

export default UserStack
