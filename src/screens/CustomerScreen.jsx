import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const CustomerScreen = () => {
  return (
    <SafeAreaView>
      <Sidebar/>
      <Navbar />
      <Text>customer</Text>
    </SafeAreaView>
  )
}

export default CustomerScreen
