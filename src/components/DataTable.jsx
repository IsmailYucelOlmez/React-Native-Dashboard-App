import React, { useState } from 'react'
import { View } from 'react-native'
import { Pressable,Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';;


const DataTable = ({data}) => {

    const data2=[
        {
            userName:"Ahmet Tekeli",
            email:"ahmet22@gmail.com",
            phoneNumber:"0 544 268 77 24"
        },
        {
            userName:"Mehmet Büyükekşi",
            email:"mehmetIstifa@gmail.com",
            phoneNumber:"0 542 458 45 67"
        },
        {
            userName:"Ismail Yücel Ölmez",
            email:"ismailyucelolmez514@gmail.com",
            phoneNumber:"0 538 012 51 68"
        }
    ]
    const defaultData=data2;

    const [selectedItems,setSelectedItems]=useState([]);
    const [sortedColumn,setSortedColumn]=useState("");
   


  return (
    <View className="rounded-lg p-3 mt-5 border w-full flex flex-col bg-white" >
      <View className="flex flex-row justify-between m-1 p-1.5 border-b-2 mb-3 pb-3 rounded-lg w-full">
          <Pressable><Text className="text-sm w-20">User Name</Text></Pressable> 
          <Pressable><Text className="text-sm w-20">Email</Text></Pressable> 
          <Pressable><Text className="text-sm w-20">Phone Number</Text></Pressable>
          <Pressable className="bg-red-600 p-1 rounded-lg flex justify-center items-center"><Text className="text-white text-sm w-20">Delete All</Text></Pressable> 
      </View>
      <View className="m-1 p-1 rounded-lg  flex flex-col gap-2">
        {data2.map((e,i)=>(
            <View key={i} className=" p-0.5 border-b rounded-lg flex flex-row gap-2 w-full">
                <Text className="text-sm w-1/4">{e.userName}</Text>
                <Text className="text-sm w-1/4">{e.email}</Text>
                <Text className="text-sm w-1/4">{e.phoneNumber}</Text>
                <View className="flex flex-row w-1/4">
                <FontAwesome6 name="pencil" size={24} color="black" />
                <MaterialIcons name="delete" size={24} color="black" />
                </View>
               
            </View>
        ))}

      </View>
    </View>
  )
}

export default DataTable
