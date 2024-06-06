import React, { Fragment, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Text,ScrollView } from 'react-native'
import { orderColumns } from '../../../assets/columns';
import { useGetOrdersQuery } from '../../redux/slices/apiSlice';



const OrderDataTable = () => {

  const orderData=useGetOrdersQuery()

  return (
    <ScrollView className="rounded-lg py-3 px-1  mt-5 border flex flex-col bg-white w-full" >
      { orderData?.data ?(
      <Fragment className="w-full">
        <View className="flex flex-row justify-between items-center m-1 p-1.5 border-b-2 mb-3 pb-3 rounded-lg ">
          
          {orderColumns.map((e,i)=>(
           <Text className="text-sm">{e.name}</Text> 
          ))}
                
        </View>
        <View className="m-0.5 p-0.5 rounded-lg  flex flex-col gap-2 w-full">
          {orderData?.data?.map((e,i)=>(

              <View key={i} className=" p-0.5 border-b rounded-lg flex flex-row items-center gap-2 w-full">
                                                                               
                <Text className="text-xs w-full text-center">{e.orderDate}</Text>
                <Text className="text-xs w-full text-center">{e.orderStatu}</Text>
                <Text className="text-xs w-full text-center">{e.totalPrice}</Text>
                <Text className="text-xs w-full text-center">{e.customerId}</Text>
                  
                                                                                                 
              </View>         
          ))}

        </View>

      </Fragment>
      ):(
        <View>
          <Text>Loading...</Text>
        </View>
      )}

    </ScrollView>
  )
}

export default OrderDataTable
