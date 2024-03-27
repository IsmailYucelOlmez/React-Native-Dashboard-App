import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const EmployeeScreen = () => {
  return (
    <SafeAreaView>
      <Sidebar/>
      <Navbar />
      <Text>employee</Text>
    </SafeAreaView>
  )
}

export default EmployeeScreen
