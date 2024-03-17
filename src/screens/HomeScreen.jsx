import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#e5e5e5] " >
      <Navbar/>
      <Text className="text-xl">Home Screen</Text> 
    </SafeAreaView>
  )
}

export default HomeScreen


