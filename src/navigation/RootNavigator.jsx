import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Navbar from '../components/Navbar';
import CustomerScreen from '../screens/CustomerScreen';
import HomeScreen from '../screens/HomeScreen';
import { useSelector } from 'react-redux';



const RootNavigator = () => {
  
  const {name}=useSelector((state)=>state.user)

  return (
    <NavigationContainer >
      
       {name ? <UserStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}

export default RootNavigator
