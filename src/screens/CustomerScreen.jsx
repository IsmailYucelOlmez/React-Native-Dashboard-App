import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DataTable from '../components/DataTable'


const CustomerScreen = () => {
  return (
    <SafeAreaView>
      <Navbar />
      <Sidebar/>

      <View className="" >
        <Text>Customer</Text>
        <DataTable data={[]}/>
      </View>
      
    </SafeAreaView>
  )
}

export default CustomerScreen
