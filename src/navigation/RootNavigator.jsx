import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Navbar from '../components/Navbar';
import CustomerScreen from '../screens/CustomerScreen';
import HomeScreen from '../screens/HomeScreen';



const RootNavigator = () => {
    const isAuth=true;
  return (
    <NavigationContainer >
      
       {isAuth ? <UserStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}

export default RootNavigator
