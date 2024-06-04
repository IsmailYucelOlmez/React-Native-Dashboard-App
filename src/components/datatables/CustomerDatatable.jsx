import React, { Fragment, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Text,ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useGetCustomersQuery } from '../../redux/slices/apiSlice';
import { customerColumns } from '../../../assets/columns';


const CustomerDataTable = ({state,setAbsoluteFormType,setSelectedId}) => {

  const customerData=useGetCustomersQuery();

  const showPopup=(value)=>{
    if(state=="admin"){
        setAbsoluteFormType("customer")
        setSelectedId(value)
    }
  }

  return (
    <ScrollView className="rounded-lg py-3 px-1  mt-5 border flex flex-col bg-white w-full" >
      { customerData?.data ?(
      <Fragment className="w-full">
        <View className="flex flex-row justify-between items-center m-1 p-1.5 border-b-2 mb-3 pb-3 rounded-lg ">
          
          {customerColumns?.map((e,i)=>(
           <Text className="text-sm">{e.name}</Text> 
          ))}
                
        </View>
        <View className="m-0.5 p-0.5 rounded-lg  flex flex-col gap-2 w-full">
          {customerData.data?.map((e,i)=>(
            <Pressable onPress={()=>showPopup(e.id)} key={i} className=" p-0.5 border-b rounded-lg flex flex-row items-center gap-2 w-full">
                           
                <Text className="text-xs w-14 px-2 text-center">{e.cName}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.cmail}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.cPhone}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.cBudget}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.cStatu}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.cLocation}</Text>
                                                                           
            </Pressable>
          ))}

        </View>

      </Fragment>
      ):(
        <View>
          <Text>yükleniyor...</Text>
        </View>
      )}

    </ScrollView>
  )
}

export default CustomerDataTable
