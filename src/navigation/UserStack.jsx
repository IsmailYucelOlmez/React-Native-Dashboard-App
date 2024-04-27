import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import EmployeeScreen from '../screens/EmployeeScreen';
import LineChartScreen from '../screens/charts/LineChartScreen';
import StackedBarChartScreen from '../screens/charts/StackedBarChartScreen';
import PieChartScreen from '../screens/charts/PieChartScreen';
import BarChartScreen from '../screens/charts/BarChartScreen';
import AreaChart from '../screens/charts/AreaChart';
import ProductScreen from '../screens/ProductScreen';
import OrderScreen from '../screens/OrderScreen';
import KanbanScreen from '../screens/KanbanScreen';

const Stack=createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='CustomerScreen' component={CustomerScreen}/>
      <Stack.Screen name='EmployeeScreen' component={EmployeeScreen}/>
      <Stack.Screen name='ProductScreen' component={ProductScreen}/>
      <Stack.Screen name='OrderScreen' component={OrderScreen}/>
      <Stack.Screen name='KanbanScreen' component={KanbanScreen}/>
      <Stack.Screen name='LineChartScreen' component={LineChartScreen}/>
      <Stack.Screen name='PieChartScreen' component={PieChartScreen}/>
      <Stack.Screen name='BarChartScreen' component={BarChartScreen}/>
      <Stack.Screen name='AreaChart' component={AreaChart}/>
      <Stack.Screen name='StackedBarChartScreen' component={StackedBarChartScreen}/>
    </Stack.Navigator>
  )
}

export default UserStack
