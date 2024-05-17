import React, { useEffect, useState } from 'react'
import { View, Text ,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../../components/Navbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import DataTable from '../../components/DataTable.jsx'
import { useGetCustomersQuery } from '../../redux/slices/apiSlice.js'
import {customerColumns} from '../../../assets/columns.js'



const CustomerScreen = () => {

  const [data,setData]=useState([]);

  const data2=useGetCustomersQuery();

  return (
    <SafeAreaView>
      <ScrollView>
      <Navbar />
      <Sidebar/>
      {!data2 ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ):(
        <View className="mt-3" >
          <Text className="text-xl font-bold ml-2">Customer</Text>
          <DataTable data={data2?.data} columns={customerColumns} state="user" datatype="customer"/>
          
        </View>
      )}
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default CustomerScreen
