import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './UserStack';
import AuthStack from './AuthStack';

const RootNavigator = () => {
    const isAuth=true;
  return (
    <NavigationContainer>
       {isAuth ? <UserStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}

export default RootNavigator