import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DataTable from '../components/DataTable'
import { useGetCustomersQuery } from '../redux/slices/apiSlice'
import {customerColumns} from '../../assets/columns'


const CustomerScreen = () => {

  const customersData=useGetCustomersQuery();


  return (
    <SafeAreaView>
      <Navbar />
      <Sidebar/>
      {customersData.status=="pending" ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ):(
        <View className="" >
          <Text className="text-xl font-bold ml-2">Customer</Text>
          <DataTable data={customersData?.data} columns={customerColumns} state="user"/>
        </View>
      )}
      

      
      
    </SafeAreaView>
  )
}

export default CustomerScreen
