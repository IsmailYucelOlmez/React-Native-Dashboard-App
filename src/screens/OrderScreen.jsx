import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DataTable from '../components/DataTable'
import {orderColumns} from '../../assets/columns'
import { useGetOrdersQuery } from '../redux/slices/apiSlice'


const OrderScreen = () => {

  const orderData=useGetOrdersQuery();

  return (
    <SafeAreaView>
     <Navbar />
      <Sidebar/>
      {orderData.status=="pending" ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ):(
        <View className="" >
          <Text className="text-xl font-bold ml-2">Order</Text>
          <DataTable data={orderData?.data} columns={orderColumns} state="user"/>
        </View>
      )}
      
    </SafeAreaView>
  )
}

export default OrderScreen
