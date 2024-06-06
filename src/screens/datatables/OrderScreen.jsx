import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import OrderDataTable from '../../components/datatables/OrderDataTable'


const OrderScreen = () => {

  return (
    <SafeAreaView>
     <Navbar />
      <Sidebar/>
      
        <View className="" >
          <Text className="text-xl font-bold ml-2 mt-5 ">Order</Text>
          <OrderDataTable state={"user"}/>
        </View>
      
      
    </SafeAreaView>
  )
}

export default OrderScreen
