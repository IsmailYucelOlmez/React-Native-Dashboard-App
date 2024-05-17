import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
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
