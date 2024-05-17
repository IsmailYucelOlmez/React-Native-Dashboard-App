import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import DataTable from '../../components/DataTable'
import {productColumns} from '../../../assets/columns'
import { useGetProductsQuery } from '../../redux/slices/apiSlice'

const ProductScreen = () => {

  const productData=useGetProductsQuery();

  return (
    <SafeAreaView>
     <Navbar />
      <Sidebar/>
      {productData.status=="pending" ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ):(
        <View className="" >
          <Text className="text-xl font-bold ml-2 mt-5">Product</Text>
          <DataTable data={productData?.data} columns={productColumns} state="user" datatype="product"/>
        </View>
      )}
      
    </SafeAreaView>
  )
}

export default ProductScreen
