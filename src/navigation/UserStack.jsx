import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/datatables/CustomerScreen';
import EmployeeScreen from '../screens/datatables/EmployeeScreen';
import LineChartScreen from '../screens/charts/LineChartScreen';
import StackedBarChartScreen from '../screens/charts/StackedBarChartScreen';
import PieChartScreen from '../screens/charts/PieChartScreen';
import BarChartScreen from '../screens/charts/BarChartScreen';
import AreaChart from '../screens/charts/AreaChart';
import ProductScreen from '../screens/datatables/ProductScreen';
import OrderScreen from '../screens/datatables/OrderScreen';
import KanbanScreen from '../screens/KanbanScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AdminPanelScreen from '../screens/AdminPanelScreen';

const Stack=createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='UserProfileScreen' component={UserProfileScreen}/>
      <Stack.Screen name='AdminPanelScreen' component={AdminPanelScreen}/>
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
