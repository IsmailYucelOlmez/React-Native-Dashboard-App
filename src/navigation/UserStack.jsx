import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import EmployeeScreen from '../screens/EmployeeScreen';
import LineChartScreen from '../screens/LineChartScreen';

const Stack=createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
    <Stack.Screen name='home' component={HomeScreen}/>
    <Stack.Screen name='customer' component={CustomerScreen}/>
    <Stack.Screen name='employee' component={EmployeeScreen}/>
    <Stack.Screen name='line-chart' component={LineChartScreen}/>
  </Stack.Navigator>
  )
}

export default UserStack
