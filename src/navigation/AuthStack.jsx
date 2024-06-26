import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';

const Stack=createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
      <Stack.Screen name='login' component={LoginScreen}/> 
    </Stack.Navigator>
  )
}

export default AuthStack
