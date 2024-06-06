import React, { useEffect, useState } from 'react'
import { View, Text ,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../../components/Navbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import CustomerDataTable from '../../components/datatables/CustomerDatatable.jsx'

const CustomerScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView>
      <Navbar />
      <Sidebar/>
      
        <View className="mt-3" >
          <Text className="text-xl font-bold ml-2">Customer</Text>
          <CustomerDataTable state={"user"} />
          
        </View>
      
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default CustomerScreen
