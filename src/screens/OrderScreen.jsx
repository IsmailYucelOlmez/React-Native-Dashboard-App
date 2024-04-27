import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DataTable from '../components/DataTable'


const OrderScreen = () => {
  return (
    <SafeAreaView>
     <Navbar />
      <Sidebar/>
      <View>
        <Text>Orders</Text>
        <DataTable/>
      </View>
      
    </SafeAreaView>
  )
}

export default OrderScreen
