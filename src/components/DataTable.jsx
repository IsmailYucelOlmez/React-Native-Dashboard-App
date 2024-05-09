import React, { Fragment, useState } from 'react'
import { View } from 'react-native'
import { Pressable,Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';;


const DataTable = ({data,columns,state}) => {

  return (
    <View className="rounded-lg p-3 mt-5 border w-full flex flex-col bg-white" >
      { data || columns ?(
        <Fragment>
      <View className="flex flex-row justify-between items-center m-1 p-1.5 border-b-2 mb-3 pb-3 rounded-lg w-full">
          
          {columns?.map((e,i)=>(
            <Pressable><Text className="text-sm">{e.name}</Text></Pressable> 
          ))}
                
      </View>
      <View className="m-1 p-1 rounded-lg  flex flex-col gap-2">
        {data?.map((e,i)=>(
            <View key={i} className=" p-0.5 border-b rounded-lg flex flex-row items-center gap-2 w-full">
                <Text className="text-sm ">{e.ID}</Text>
                <Text className="text-sm ">{e.CName}</Text>
                <Text className="text-sm ">{e.CMail}</Text>
                <Text className="text-sm ">{e.CPhone}</Text>
                <Text className="text-sm ">{e.CBudget}</Text>
                <Text className="text-sm ">{e.CStatu}</Text>
                <Text className="text-sm ">{e.CLocation}</Text>
                <View className="flex flex-row w-1/4">
                  {state=="admin" && (
                    <View>
                      <FontAwesome6 name="pencil" size={24} color="black" />
                      <MaterialIcons name="delete" size={24} color="black" />
                    </View>         
                  )}
                
                </View>
               
            </View>
        ))}

      </View>
      </Fragment>
      ):(
        <View>
          <Text>yükleniyor...</Text>
        </View>
      )}
    </View>
  )
}

export default DataTable
