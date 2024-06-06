import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import ProductDataTable from '../../components/datatables/ProductDatatable'

const ProductScreen = () => {

  return (
    <SafeAreaView>
     <Navbar />
      <Sidebar/>
      
        <View className="" >
          <Text className="text-xl font-bold ml-2 mt-5">Product</Text>
          <ProductDataTable state={"user"} />
        </View>
      
    </SafeAreaView>
  )
}

export default ProductScreen
