import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-cyan-500 justify-center items-center " >
      <Text className="text-xl">Home Screen</Text> 
    </SafeAreaView>
  )
}

export default HomeScreen


